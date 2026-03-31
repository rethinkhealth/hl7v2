import { baseConfig } from "@rethinkhealth/testing";
import { defineConfig, mergeConfig } from "vitest/config";

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      name: "hl7v2-mllp",
      // Bun tests use `bun:test` imports and must run under `bun test`
      exclude: ["node_modules", "dist", "test/bun/**"],
    },
  })
);
