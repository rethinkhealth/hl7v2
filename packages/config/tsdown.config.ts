import { defineConfig } from "tsdown";

export default defineConfig({
  clean: false,
  dts: true,
  entry: {
    index: "src/index.ts",
    "json-schema": "src/json-schema.ts",
    loader: "src/loader.ts",
    schema: "src/schema.ts",
  },
  fixedExtension: false,
  format: "esm",
  hash: false,
  sourcemap: true,
  target: "es2022",
});
