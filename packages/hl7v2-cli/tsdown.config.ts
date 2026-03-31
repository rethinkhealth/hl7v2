import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    cli: "src/cli.ts",
  },
  format: "esm",
  sourcemap: true,
  target: "es2022",
  dts: false,
  fixedExtension: false,
  hash: false,
});
