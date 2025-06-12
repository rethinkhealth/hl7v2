import { defineConfig } from "tsup";

export default defineConfig({
  format: ["iife", "esm", "cjs"],
  entry: ["src/index.ts"],
  splitting: true,
  minify: true,
  bundle: true,
  skipNodeModulesBundle: true,
  sourcemap: false,
  clean: true,
  dts: {
    resolve: true,
    compilerOptions: {
      moduleResolution: "node"
    }
  },
  outDir: "dist"
});
