import { defineConfig } from "tsup";

export default defineConfig({
  format: ["esm", "cjs"],
  entry: ["src/index.ts"],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: {
    resolve: true,
    compilerOptions: {
      moduleResolution: "node",
    },
  },
});
