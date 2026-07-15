#!/usr/bin/env node
/**
 * Diagnose and fix Cloudflare Pages build configuration for Next.js static export.
 * Uses the logged-in Wrangler OAuth session (no token printed).
 */
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import { execSync } from "node:child_process";

const ACCOUNT_ID = "b113a47f143584d8445aaddfb987ad7c";
const PROJECT_NAME = "rahulpanchal";
const GITHUB_REPO = "rahulpanchal8/resume";

const BUILD_CONFIG = {
  build_command:
    "corepack enable && corepack prepare pnpm@10 --activate && pnpm install --frozen-lockfile && pnpm build",
  destination_dir: "out",
  root_dir: "",
  build_caching: true,
};

function getOAuthToken() {
  const configPath = join(homedir(), "Library/Preferences/.wrangler/config/default.toml");
  const config = readFileSync(configPath, "utf8");
  const oauthToken = config.match(/oauth_token = "([^"]+)"/)?.[1];
  if (!oauthToken) {
    throw new Error("Wrangler OAuth token not found. Run: npx wrangler login");
  }
  return oauthToken;
}

async function cfApi(path, { method = "GET", body } = {}) {
  const response = await fetch(`https://api.cloudflare.com/client/v4${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${getOAuthToken()}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await response.json();
  if (!data.success) {
    throw new Error(`${method} ${path} failed: ${JSON.stringify(data.errors ?? data)}`);
  }
  return data.result;
}

async function refreshGitHubSecrets() {
  const apiToken = execSync("node scripts/setup-cloudflare-secrets.mjs", {
    cwd: process.cwd(),
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();

  const gh = "/opt/homebrew/bin/gh";
  execSync(`printf '%s' '${ACCOUNT_ID}' | ${gh} secret set CF_ACCOUNT_ID --repo ${GITHUB_REPO} --env Production`, {
    stdio: "ignore",
  });
  execSync(
    `printf '%s' '${apiToken.replace(/'/g, "'\\''")}' | ${gh} secret set CF_API_TOKEN --repo ${GITHUB_REPO} --env Production`,
    { stdio: "ignore" }
  );
}

async function main() {
  const mode = process.argv[2] ?? "diagnose";

  const project = await cfApi(`/accounts/${ACCOUNT_ID}/pages/projects/${PROJECT_NAME}`);
  const source = project.source;
  const buildConfig = project.build_config ?? {};

  console.log("=== Current Cloudflare Pages Config ===");
  console.log("Project:", project.name);
  console.log("Production branch:", project.canonical_deployment?.deployment_trigger?.metadata?.branch ?? source?.config?.production_branch);
  console.log("Git repo:", source?.config?.owner ? `${source.config.owner}/${source.config.repo_name}` : "none");
  console.log("Build command:", buildConfig.build_command ?? "(not set)");
  console.log("Output directory:", buildConfig.destination_dir ?? "(not set)");
  console.log("Root directory:", buildConfig.root_dir ?? "(not set)");
  console.log("Framework:", buildConfig.web_analytics_tag ?? buildConfig.framework ?? "(default)");

  if (mode === "diagnose") {
    return;
  }

  if (mode === "logs") {
    const deploymentId = process.argv[3];
    if (!deploymentId) {
      throw new Error("Usage: node scripts/fix-cloudflare-pages-config.mjs logs <deployment-id>");
    }
    const logs = await cfApi(
      `/accounts/${ACCOUNT_ID}/pages/projects/${PROJECT_NAME}/deployments/${deploymentId}/history/logs`
    );
    for (const line of logs.data ?? []) {
      console.log(line);
    }
    return;
  }

  if (mode === "fix-build") {
    console.log("\n=== Updating build configuration ===");
    const updated = await cfApi(`/accounts/${ACCOUNT_ID}/pages/projects/${PROJECT_NAME}`, {
      method: "PATCH",
      body: {
        build_config: BUILD_CONFIG,
        production_branch: "main",
      },
    });
    console.log("Updated build command:", updated.build_config.build_command);
    console.log("Updated output directory:", updated.build_config.destination_dir);
    return;
  }

  if (mode === "fix-secrets") {
    console.log("\n=== Refreshing GitHub Actions secrets ===");
    await refreshGitHubSecrets();
    console.log("CF_API_TOKEN and CF_ACCOUNT_ID updated in Production environment.");
    return;
  }

  if (mode === "fix-all") {
    await cfApi(`/accounts/${ACCOUNT_ID}/pages/projects/${PROJECT_NAME}`, {
      method: "PATCH",
      body: {
        build_config: BUILD_CONFIG,
        production_branch: "main",
      },
    });
    console.log("Build configuration updated.");

    await refreshGitHubSecrets();
    console.log("GitHub secrets refreshed.");
    return;
  }

  throw new Error(`Unknown mode: ${mode}. Use diagnose | fix-build | fix-secrets | fix-all`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
