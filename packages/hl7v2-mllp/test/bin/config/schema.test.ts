import { describe, expect, it } from "vitest";

import { GlionConfigSchema } from "../../../src/bin/config/schema.js";

describe("GlionConfigSchema", () => {
  it("accepts a minimal config with only entry", () => {
    const result = GlionConfigSchema.safeParse({ entry: "./src/app.ts" });
    expect(result.success).toBe(true);
  });

  it("accepts a fully-specified config", () => {
    const result = GlionConfigSchema.safeParse({
      entry: "./src/app.ts",
      port: 2575,
      hostname: "0.0.0.0",
      tls: {
        cert: "./certs/s.pem",
        key: "./certs/s.key",
        ca: "./certs/ca.pem",
        passphrase: "secret",
      },
      watch: ["./src", "./handlers"],
      gracefulCloseMs: 5000,
      keepAlive: true,
      keepAliveInitialDelay: 60_000,
      socketTimeout: 0,
    });
    expect(result.success).toBe(true);
  });

  it("rejects missing entry", () => {
    const result = GlionConfigSchema.safeParse({ port: 2575 });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path).toEqual(["entry"]);
    }
  });

  it("rejects non-string entry", () => {
    const result = GlionConfigSchema.safeParse({ entry: 42 });
    expect(result.success).toBe(false);
  });

  it("allows port 0 (ephemeral) and rejects ports outside 0-65535", () => {
    expect(
      GlionConfigSchema.safeParse({ entry: "./a.ts", port: 0 }).success
    ).toBe(true);
    expect(
      GlionConfigSchema.safeParse({ entry: "./a.ts", port: 70_000 }).success
    ).toBe(false);
    expect(
      GlionConfigSchema.safeParse({ entry: "./a.ts", port: -1 }).success
    ).toBe(false);
  });

  it("requires tls.cert and tls.key when tls is present", () => {
    const result = GlionConfigSchema.safeParse({
      entry: "./a.ts",
      tls: { cert: "./c.pem" },
    });
    expect(result.success).toBe(false);
  });

  it("rejects unknown top-level fields (strict mode)", () => {
    const result = GlionConfigSchema.safeParse({
      entry: "./a.ts",
      unknownField: true,
    });
    expect(result.success).toBe(false);
  });
});
