import { describe, expect, it } from "vitest";
import { HL7v2ConfigSchema, HL7v2SettingsSchema } from "../src/schema";

describe("HL7v2SettingsSchema", () => {
  it("should accept empty object with defaults", () => {
    const result = HL7v2SettingsSchema.safeParse({});
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data).toEqual({
        experimental: {
          emptyMode: "legacy",
        },
      });
    }
  });

  it("should accept undefined with defaults", () => {
    const result = HL7v2SettingsSchema.safeParse(undefined);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data).toEqual({
        experimental: {
          emptyMode: "legacy",
        },
      });
    }
  });

  it("should accept valid emptyMode values", () => {
    const legacy = HL7v2SettingsSchema.safeParse({
      experimental: { emptyMode: "legacy" },
    });
    expect(legacy.success).toBe(true);
    if (legacy.success) {
      expect(legacy.data.experimental.emptyMode).toBe("legacy");
    }

    const empty = HL7v2SettingsSchema.safeParse({
      experimental: { emptyMode: "empty" },
    });
    expect(empty.success).toBe(true);
    if (empty.success) {
      expect(empty.data.experimental.emptyMode).toBe("empty");
    }
  });

  it("should reject invalid emptyMode values", () => {
    const result = HL7v2SettingsSchema.safeParse({
      experimental: { emptyMode: "invalid" },
    });
    expect(result.success).toBe(false);
  });

  it("should reject unknown properties", () => {
    const result = HL7v2SettingsSchema.safeParse({
      unknownProperty: "value",
    });
    expect(result.success).toBe(false);
  });
});

describe("HL7v2ConfigSchema", () => {
  it("should accept minimal valid config", () => {
    const result = HL7v2ConfigSchema.safeParse({});
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.settings).toEqual({
        experimental: {
          emptyMode: "legacy",
        },
      });
    }
  });

  it("should accept config with $schema", () => {
    const result = HL7v2ConfigSchema.safeParse({
      $schema:
        "https://raw.githubusercontent.com/rethinkhealth/hl7v2/main/packages/hl7v2-config/schema.json",
    });
    expect(result.success).toBe(true);
  });

  it("should accept config with plugins array", () => {
    const result = HL7v2ConfigSchema.safeParse({
      plugins: ["preset-lint-recommended"],
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.plugins).toEqual(["preset-lint-recommended"]);
    }
  });

  it("should accept full config", () => {
    const result = HL7v2ConfigSchema.safeParse({
      $schema:
        "https://raw.githubusercontent.com/rethinkhealth/hl7v2/main/packages/hl7v2-config/schema.json",
      plugins: [
        "preset-lint-recommended",
        ["lint-max-message-size", { maxBytes: 5_000_000 }],
      ],
      settings: {
        experimental: {
          emptyMode: "empty",
        },
      },
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.settings.experimental.emptyMode).toBe("empty");
      expect(result.data.plugins).toHaveLength(2);
    }
  });

  it("should reject invalid $schema (not a URL)", () => {
    const result = HL7v2ConfigSchema.safeParse({
      $schema: "not-a-url",
    });
    expect(result.success).toBe(false);
  });

  it("should reject non-array plugins", () => {
    const result = HL7v2ConfigSchema.safeParse({
      plugins: "not-an-array",
    });
    expect(result.success).toBe(false);
  });
});
