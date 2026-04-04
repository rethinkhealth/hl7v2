import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    node: "src/node/index.ts",
    "bin/index": "src/bin/index.ts",
    "bin/run": "src/bin/run.ts",
    "bin/commands/start": "src/bin/commands/start.ts",
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
  // Shebang on the bin entry is preserved by tsdown automatically
  // because the source file starts with #!/usr/bin/env node.
});
