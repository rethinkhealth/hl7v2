import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      reporter: ["text", "html", "json"],
    },
    environment: "node",
    exclude: ["node_modules", "dist"],
    globals: false,
    include: ["**/*.test.ts", "**/*.test.tsx"],
  },
});
