import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    "core/index": "src/core/index.ts",
    index: "src/index.ts",
    "runtimes/node": "src/runtimes/node.ts",
  },
  format: "esm",
  sourcemap: true,
  target: "es2022",
  dts: false,
  fixedExtension: false,
  hash: false,
  clean: false,
});
