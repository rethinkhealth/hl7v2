import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    /**
     * Directories and files should be bundled so that the resulting files line
     * up with the TSC generated type definitions.
     */
    index: "src/index.ts",
  },
  format: ["esm"],
  target: "es2022",
  sourcemap: true,
});
