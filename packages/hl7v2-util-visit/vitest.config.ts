import { baseConfig } from "@rethinkhealth/testing";
import { defineConfig, mergeConfig } from "vitest/config";

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      name: "hl7v2-util-visit",
      // Run test files sequentially to avoid config file conflicts
      // Each test file uses a different HL7v2 config mode (empty vs legacy)
      fileParallelism: false,
    },
  })
);
