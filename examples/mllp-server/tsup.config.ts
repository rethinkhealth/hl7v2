import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    "bin/receive": "src/bin/receive.tsx",
    "bin/send": "src/bin/send.tsx",
  },
  format: ["esm"],
  target: "node18",
  outDir: "dist",
  clean: true,
  sourcemap: true,
  dts: false,
  banner: {
    js: "#!/usr/bin/env node",
  },
});
