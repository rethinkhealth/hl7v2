import { cloudflareTest } from "@cloudflare/vitest-pool-workers";
import { baseConfig } from "@glion/testing";
import { defineConfig, mergeConfig } from "vitest/config";

/**
 * Two test projects under one config:
 *
 * - `node` — runs `core.test.ts`, `node.test.ts`, and the internal-helpers tests
 *   in plain Vitest under Node. Uses the shared `baseConfig` so coverage /
 *   globals / extension rules match the rest of the monorepo.
 * - `workers` — runs `test/workers/*.test.ts` inside a real `workerd` instance
 *   via `@cloudflare/vitest-pool-workers`. The pool boots `workerd` against
 *   `test/workers/wrangler.toml` and the adapter is exercised against the real
 *   `cloudflare:sockets` API. A Node-side `globalSetup` spins up a TCP "ack
 *   server" on `127.0.0.1:47575` that the worker tests connect to.
 */
export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      name: "hl7v2-mllp-client",
      projects: [
        {
          extends: true,
          test: {
            name: "hl7v2-mllp-client (node)",
            include: ["test/**/*.test.ts"],
            exclude: ["test/workers/**"],
          },
        },
        {
          extends: true,
          plugins: [
            cloudflareTest({
              wrangler: { configPath: "./test/workers/wrangler.toml" },
              singleWorker: true,
              isolatedStorage: false,
              miniflare: {
                compatibilityFlags: ["nodejs_compat"],
              },
            }),
          ],
          test: {
            name: "hl7v2-mllp-client (workers)",
            include: ["test/workers/**/*.test.ts"],
            globalSetup: ["./test/workers/global-setup.ts"],
          },
        },
      ],
    },
  })
);
