import { readFileSync } from "node:fs";

import { defineConfig } from "tsdown";

const pkg = JSON.parse(readFileSync("./package.json", "utf8")) as {
  version: string;
};

export default defineConfig({
  entry: {
    index: "src/index.ts",
    node: "src/node/index.ts",
    "bin/index": "src/bin/index.ts",
    "bin/run": "src/bin/run.ts",
    "bin/commands/start": "src/bin/commands/start.ts",
    "bin/commands/dev": "src/bin/commands/dev.ts",
    "bin/tui/app": "src/bin/tui/app.tsx",
    "bin/child/runner": "src/bin/child/runner.ts",
    "bin/config/index": "src/bin/config/index.ts",
  },
  format: "esm",
  sourcemap: true,
  target: "es2022",
  dts: false,
  fixedExtension: false,
  hash: false,
  clean: false,
  // Inline the package version at build time so `glion --version`
  // reports the shipped version without any runtime filesystem walks.
  define: {
    __GLION_VERSION__: JSON.stringify(pkg.version),
  },
  // Shebang on the bin entry is preserved by tsdown automatically
  // because the source file starts with #!/usr/bin/env node.
});
