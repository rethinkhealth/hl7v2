import { baseConfig } from "@glion/testing";
import { defineConfig, mergeConfig } from "vitest/config";

/**
 * Two test projects under one config:
 *
 * - `hl7v2-mllp-client (node)` — runs `core.test.ts`, `node.test.ts`, and the
 *   internal-helpers tests in plain Vitest under Node. Uses the shared
 *   `baseConfig` so coverage / globals / extension rules match the rest of the
 *   monorepo.
 * - `hl7v2-mllp-client (workerd)` — also runs in plain Vitest under Node, but the
 *   tests inside spawn a real `workerd` process via `wrangler.unstable_dev` and
 *   exercise the adapter through HTTP requests to that worker. A Node-side
 *   `globalSetup` spins up a TCP "ack server" on `127.0.0.1:47575` so the
 *   spawned worker has something to connect to. This mirrors Hono's pattern
 *   (`runtime-tests/workerd`) and avoids `@cloudflare/vitest-pool-workers`,
 *   whose coverage instrumentation and CI startup behaviour are both unstable
 *   for our setup.
 *
 * Both projects load cleanly under Bun — there is no plugin import chain that
 * pulls in `zod`/`wrangler` at config-evaluation time, so `pnpm test:bun` can
 * use this same config file.
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
          test: {
            name: "hl7v2-mllp-client (workerd)",
            include: ["test/workers/**/*.test.ts"],
            globalSetup: ["./test/workers/global-setup.ts"],
            // Spawning workerd via wrangler.unstable_dev is slower than a
            // typical unit test; allow plenty of time for boot + 6 round-trips.
            testTimeout: 30_000,
            hookTimeout: 30_000,
          },
        },
      ],
    },
  })
);
