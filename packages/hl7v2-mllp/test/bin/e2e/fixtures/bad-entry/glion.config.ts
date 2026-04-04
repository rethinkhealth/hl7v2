import { defineConfig } from "@rethinkhealth/hl7v2-mllp/config";

export default defineConfig({
  entry: "./does-not-exist.ts",
  port: 54_331,
});
