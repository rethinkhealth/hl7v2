import { baseConfig } from "@glion/testing";
import { defineConfig, mergeConfig } from "vitest/config";

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      include: ["tests/**/*.test.ts"],
      benchmark: {
        include: ["bench/**/*.bench.ts"],
      },
      name: "hl7v2",
    },
  })
);
