import { defineConfig } from "@glion/cli/config";

export default defineConfig({
  entry: "./src/app.ts",
  port: 2575,
  // tls: { cert: "./certs/server.pem", key: "./certs/server.key" },
  // watch: ["./src"],
});
