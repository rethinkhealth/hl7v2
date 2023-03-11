import { defineConfig } from "tsup";

export default defineConfig({
  format: ["esm", "cjs"],
  entry: ["src/index.ts"],
  splitting: false,
  sourcemap: false,
  clean: true,
  dts: {
    resolve: true,
    compilerOptions: {
      moduleResolution: "node",
    },
  },
});
