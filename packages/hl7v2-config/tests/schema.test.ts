import { DEFAULT_DELIMITERS } from "@rethinkhealth/hl7v2-utils";
import { describe, expect, it } from "vitest";
import { HL7v2ConfigSchema } from "../src/schema";

const DEFAULT_SETTINGS = {
  delimiters: DEFAULT_DELIMITERS,
  experimental: { emptyMode: "legacy" },
};

describe("HL7v2ConfigSchema", () => {
  describe("defaults", () => {
    it("should apply default settings for empty config", () => {
      const result = HL7v2ConfigSchema.parse({});
      expect(result.settings).toEqual(DEFAULT_SETTINGS);
    });

    it("should accept config with $schema", () => {
      const result = HL7v2ConfigSchema.parse({
        $schema:
          "https://raw.githubusercontent.com/rethinkhealth/hl7v2/main/packages/hl7v2-config/schema.json",
      });
      expect(result.settings).toEqual(DEFAULT_SETTINGS);
    });
  });

  describe("plugins", () => {
    it("should accept string plugins", () => {
      const result = HL7v2ConfigSchema.parse({
        plugins: ["preset-lint-recommended"],
      });
      expect(result.plugins).toEqual(["preset-lint-recommended"]);
    });

    it("should accept plugins with options", () => {
      const result = HL7v2ConfigSchema.parse({
        plugins: [["lint-max-message-size", { maxBytes: 5_000_000 }]],
      });
      expect(result.plugins).toHaveLength(1);
    });

    it("should reject non-array plugins", () => {
      const result = HL7v2ConfigSchema.safeParse({ plugins: "not-an-array" });
      expect(result.success).toBe(false);
    });
  });

  describe("settings.experimental", () => {
    it.each([
      "legacy",
      "empty",
    ] as const)("should accept emptyMode: %s", (mode) => {
      const result = HL7v2ConfigSchema.parse({
        settings: { experimental: { emptyMode: mode } },
      });
      expect(result.settings.experimental.emptyMode).toBe(mode);
    });

    it("should reject invalid emptyMode", () => {
      const result = HL7v2ConfigSchema.safeParse({
        settings: { experimental: { emptyMode: "invalid" } },
      });
      expect(result.success).toBe(false);
    });
  });

  describe("settings.delimiters", () => {
    it("should accept valid single-character delimiters", () => {
      const delimiters = {
        field: "@",
        component: "*",
        subcomponent: "#",
        repetition: "!",
        escape: "\\",
        segment: "\n",
      };
      const result = HL7v2ConfigSchema.parse({
        settings: { delimiters },
      });
      expect(result.settings.delimiters).toEqual(delimiters);
    });

    it("should accept partial delimiter overrides", () => {
      const result = HL7v2ConfigSchema.parse({
        settings: { delimiters: { field: "#", component: "@" } },
      });
      expect(result.settings.delimiters?.field).toBe("#");
      expect(result.settings.delimiters?.component).toBe("@");
      expect(result.settings.delimiters).toEqual({
        ...DEFAULT_DELIMITERS,
        field: "#",
        component: "@",
      });
    });

    it("should default to DEFAULT_DELIMITERS when not specified", () => {
      const result = HL7v2ConfigSchema.parse({});
      expect(result.settings.delimiters).toEqual(DEFAULT_DELIMITERS);
    });

    it.each([
      ["multi-character", { field: "||" }],
      ["empty string", { field: "" }],
    ])("should reject %s delimiter", (_, delimiters) => {
      const result = HL7v2ConfigSchema.safeParse({
        settings: { delimiters },
      });
      expect(result.success).toBe(false);
    });
  });

  describe("full config", () => {
    it("should accept complete valid config", () => {
      const result = HL7v2ConfigSchema.parse({
        $schema:
          "https://raw.githubusercontent.com/rethinkhealth/hl7v2/main/packages/hl7v2-config/schema.json",
        plugins: [
          "preset-lint-recommended",
          ["lint-max-message-size", { maxBytes: 5_000_000 }],
        ],
        settings: {
          delimiters: {
            field: "|",
            component: "^",
            repetition: "~",
            escape: "\\",
            subcomponent: "&",
          },
          experimental: { emptyMode: "empty" },
        },
      });
      expect(result.settings.experimental.emptyMode).toBe("empty");
      expect(result.plugins).toHaveLength(2);
      expect(result.settings.delimiters?.field).toBe("|");
    });
  });

  describe("validation errors", () => {
    it("should reject invalid $schema (not a URL)", () => {
      const result = HL7v2ConfigSchema.safeParse({ $schema: "not-a-url" });
      expect(result.success).toBe(false);
    });

    it("should reject unknown settings properties", () => {
      const result = HL7v2ConfigSchema.safeParse({
        settings: { unknownProperty: "value" },
      });
      expect(result.success).toBe(false);
    });

    it("should reject unknown delimiter properties", () => {
      const result = HL7v2ConfigSchema.safeParse({
        settings: { delimiters: { unknownDelimiter: "*" } },
      });
      expect(result.success).toBe(false);
    });
  });
});
