#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const configPath = join(homedir(), "Library/Preferences/.wrangler/config/default.toml");
const config = readFileSync(configPath, "utf8");
const oauthToken = config.match(/oauth_token = "([^"]+)"/)?.[1];

if (!oauthToken) {
  console.error("Wrangler OAuth token not found. Run: npx wrangler login");
  process.exit(1);
}

const response = await fetch(
  "https://api.cloudflare.com/client/v4/accounts/b113a47f143584d8445aaddfb987ad7c/pages/projects/rahulpanchal",
  { headers: { Authorization: `Bearer ${oauthToken}` } }
);

const data = await response.json();
if (!data.success) {
  console.error("OAuth token cannot access Pages API. Create a token in the Cloudflare dashboard.");
  process.exit(1);
}

process.stdout.write(oauthToken);
