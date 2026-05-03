import { defineConfig } from "tsdown";

export default defineConfig({
  clean: false,
  deps: { neverBundle: ["cloudflare:sockets"] },
  dts: false,
  entry: {
    "core/index": "src/core/index.ts",
    index: "src/index.ts",
    "runtimes/node": "src/runtimes/node.ts",
    "runtimes/workers": "src/runtimes/workers.ts",
  },
  fixedExtension: false,
  format: "esm",
  hash: false,
  sourcemap: true,
  target: "es2022",
});
