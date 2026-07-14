#!/usr/bin/env node
/**
 * Creates a permanent Cloudflare API token using the logged-in Wrangler session.
 * Prints the token to stdout for piping into `gh secret set`.
 */
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const ACCOUNT_ID = "b113a47f143584d8445aaddfb987ad7c";
const PAGES_WRITE_GROUP_ID = "8d28297797f24fb8a0c332fe0866ec89";

const configPath = join(homedir(), "Library/Preferences/.wrangler/config/default.toml");
const config = readFileSync(configPath, "utf8");
const oauthToken = config.match(/oauth_token = "([^"]+)"/)?.[1];

if (!oauthToken) {
  console.error("Wrangler OAuth token not found. Run: npx wrangler login");
  process.exit(1);
}

async function createToken(url) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${oauthToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "github-actions-resume-deploy",
      policies: [
        {
          effect: "allow",
          permission_groups: [{ id: PAGES_WRITE_GROUP_ID }],
          resources: {
            [`com.cloudflare.api.account.${ACCOUNT_ID}`]: "*",
          },
        },
      ],
    }),
  });
  return response.json();
}

let data = await createToken("https://api.cloudflare.com/client/v4/user/tokens");
if (!data.success) {
  data = await createToken(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/tokens`
  );
}

if (!data.success) {
  console.error(
    "Could not create API token automatically. Run: node scripts/configure-permanent-cf-token.mjs"
  );
  console.error(JSON.stringify(data.errors ?? data));
  process.exit(1);
}

process.stdout.write(data.result.value);
