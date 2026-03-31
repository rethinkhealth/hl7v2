import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "event-maps": "src/event-maps.ts",
  },
  format: "esm",
  sourcemap: true,
  target: "es2022",
  dts: false,
  fixedExtension: false,
  hash: false,
  outputOptions: {
    codeSplitting: {
      groups: [
        {
          name: "profiles",
          test: /src\/profiles\//,
          minSize: 100_000,
          maxSize: 250_000,
        },
      ],
    },
  },
});
