import codspeedPlugin from "@codspeed/vitest-plugin";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [codspeedPlugin()],
  test: {
    coverage: {
      reporter: ["text", "html", "json"],
    },
    environment: "node",
    exclude: ["node_modules", "dist"],
    globals: true,
    include: ["**/*.test.ts", "**/*.test.tsx"],
  },
});
