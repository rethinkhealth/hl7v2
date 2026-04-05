import { baseConfig } from "@rethinkhealth/testing";
import { defineConfig, mergeConfig } from "vitest/config";

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      // Run test files sequentially to prevent port contention between
      // e2e test files that share fixtures (e.g. minimal fixture on
      // port 54330 used by both glion-start and glion-dev tests).
      fileParallelism: false,
      name: "hl7v2-mllp",
    },
  })
);
