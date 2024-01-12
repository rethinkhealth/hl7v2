import { defineConfig } from "tsup";

export default defineConfig({
  format: ["iife", "esm", "cjs"],
  entry: [
    "src/index.ts",
    "src/schema/index.ts",
    "src/schema/2.5.1/index.ts",
    "src/schema/2.8/index.ts",
    "src/schema/2.9/index.ts",
  ],
  splitting: true,
  minify: true,
  bundle: true,
  skipNodeModulesBundle: true,
  sourcemap: false,
  clean: true,
  dts: {
    resolve: true,
    compilerOptions: {
      moduleResolution: "node",
    },
  },
  outDir: "dist",
});
