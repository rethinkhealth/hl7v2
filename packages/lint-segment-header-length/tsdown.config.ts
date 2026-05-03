import { defineConfig } from "tsdown";

export default defineConfig({
  clean: false,
  dts: true,
  entry: {
    index: "src/index.ts",
  },
  fixedExtension: false,
  format: "esm",
  hash: false,
  sourcemap: true,
  target: "es2022",
});
