import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    /**
     * Directories and files should be bundled so that the resulting files line
     * up with the TSC generated type definitions.
     */
    index: "./src/index.ts",
    // "utils/index": "src/utils/index.ts",
  },
  external: ["@codspeed/vitest-plugin"],
  format: ["esm"],
  sourcemap: true,
  target: "es2022",
  // treeshake: true,

  /**
   * Do not use tsup for generating d.ts files because it can not generate type
   * the definition maps required for go-to-definition to work in our IDE. We
   * use tsc for that.
   */
});
