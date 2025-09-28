import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node", // or 'jsdom' for browser-based tests
    include: ["**/*.test.ts", "**/*.test.tsx"],
    exclude: ["node_modules", "dist"],
    coverage: {
      reporter: ["text", "html", "json"],
    },
  },
});
