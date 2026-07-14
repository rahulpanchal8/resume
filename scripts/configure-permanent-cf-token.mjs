#!/usr/bin/env node
/**
 * Creates a permanent Cloudflare API token for GitHub Actions and
 * stores it in the Production environment secrets.
 *
 * Usage:
 *   node scripts/configure-permanent-cf-token.mjs
 */
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { execSync } from "node:child_process";

const ACCOUNT_ID = "b113a47f143584d8445aaddfb987ad7c";
const PROJECT_NAME = "rahulpanchal";
const GITHUB_REPO = "rahulpanchal8/resume";
const TOKEN_CREATE_URL =
  "https://dash.cloudflare.com/profile/api-tokens/create?permissionGroupKeys=[{%22key%22:%22pages%22,%22type%22:%22edit%22}]&accountId=" +
  ACCOUNT_ID +
  "&name=github-actions-resume-deploy";

function openDashboard() {
  try {
    execSync(`open "${TOKEN_CREATE_URL}"`, { stdio: "ignore" });
  } catch {
    console.log("Open this URL in your browser:\n" + TOKEN_CREATE_URL);
  }
}

async function validateToken(apiToken) {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/pages/projects/${PROJECT_NAME}`,
    { headers: { Authorization: `Bearer ${apiToken}` } }
  );
  const data = await response.json();
  return data.success === true;
}

async function setSecrets(apiToken) {
  const gh = "/opt/homebrew/bin/gh";

  execSync(`printf '%s' '${ACCOUNT_ID}' | ${gh} secret set CF_ACCOUNT_ID --repo ${GITHUB_REPO} --env Production`, {
    stdio: "ignore",
  });

  execSync(`printf '%s' '${apiToken.replace(/'/g, "'\\''")}' | ${gh} secret set CF_API_TOKEN --repo ${GITHUB_REPO} --env Production`, {
    stdio: "ignore",
  });
}

async function main() {
  console.log("Permanent Cloudflare token setup");
  console.log("Account ID:", ACCOUNT_ID);
  console.log("");
  console.log("Opening Cloudflare dashboard to create an API token...");
  console.log("Use template: Account > Cloudflare Pages > Edit");
  openDashboard();

  const rl = createInterface({ input, output });
  const apiToken = (await rl.question("\nPaste the new API token here: ")).trim();
  rl.close();

  if (!apiToken) {
    console.error("No token provided.");
    process.exit(1);
  }

  console.log("Validating token...");
  const valid = await validateToken(apiToken);
  if (!valid) {
    console.error("Token validation failed. Ensure it has Pages Edit permission for this account.");
    process.exit(1);
  }

  console.log("Saving secrets to GitHub Production environment...");
  await setSecrets(apiToken);
  console.log("Done. CF_API_TOKEN and CF_ACCOUNT_ID are configured permanently.");
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
