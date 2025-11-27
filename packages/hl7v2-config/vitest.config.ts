import { baseConfig } from "@rethinkhealth/testing";
import { defineConfig, mergeConfig } from "vitest/config";

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      name: "hl7-parser",
    },
  })
);
