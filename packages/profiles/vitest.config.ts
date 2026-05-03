import { baseConfig } from "@glion/testing";
import { defineConfig, mergeConfig } from "vitest/config";

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      coverage: {
        exclude: ["src/profiles/**"],
      },
      name: "hl7-profiles",
    },
  })
);
