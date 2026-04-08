import { readFileSync } from "node:fs";

import { defineConfig } from "tsdown";

const pkg = JSON.parse(readFileSync("./package.json", "utf8")) as {
  version: string;
};

export default defineConfig({
  entry: {
    index: "src/index.ts",
    run: "src/run.ts",
    "child/runner": "src/child/runner.ts",
    "config/index": "src/config/index.ts",
  },
  format: "esm",
  sourcemap: true,
  target: "es2022",
  dts: false,
  fixedExtension: false,
  hash: false,
  clean: false,
  define: {
    __GLION_VERSION__: JSON.stringify(pkg.version),
  },
});
