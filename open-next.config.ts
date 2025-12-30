import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Using dummy cache since we don't have R2 bucket configured yet
  // To enable R2 caching, uncomment the line below and configure R2 bucket in wrangler.jsonc
  // incrementalCache: r2IncrementalCache,
});
