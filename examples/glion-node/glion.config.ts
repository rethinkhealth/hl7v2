import { defineConfig } from "@rethinkhealth/hl7v2-mllp/config";

export default defineConfig({
  entry: "./src/app.ts",
  port: 2575,
  // tls: { cert: "./certs/server.pem", key: "./certs/server.key" },
  // watch: ["./src"],
});
