import { DEFAULT_DELIMITERS } from "@rethinkhealth/hl7v2-utils";
import { z } from "zod";

/**
 * Schema for delimiter configuration.
 *
 * Each delimiter must be exactly one character. All fields are optional,
 * allowing partial overrides (e.g., only override the field separator).
 *
 * Priority order (lowest to highest):
 * 1. DEFAULT_DELIMITERS (hardcoded in hl7v2-utils)
 * 2. settings.delimiters (from config file)
 * 3. opts.delimiters (direct API parameter)
 * 4. MSH auto-detection (if message starts with MSH)
 */
const DelimitersSchema = z
  .object({
    /**
     * Field separator character.
     * @default "|"
     */
    field: z
      .string()
      .length(1)
      .optional()
      .default(DEFAULT_DELIMITERS.field)
      .describe("Field separator character"),

    /**
     * Component separator character.
     * @default "^"
     */
    component: z
      .string()
      .length(1)
      .optional()
      .default(DEFAULT_DELIMITERS.component)
      .describe("Component separator character"),

    /**
     * Subcomponent separator character.
     * @default "&"
     */
    subcomponent: z
      .string()
      .length(1)
      .optional()
      .default(DEFAULT_DELIMITERS.subcomponent)
      .describe("Subcomponent separator character"),

    /**
     * Repetition separator character.
     * @default "~"
     */
    repetition: z
      .string()
      .length(1)
      .optional()
      .default(DEFAULT_DELIMITERS.repetition)
      .describe("Repetition separator character"),

    /**
     * Escape character.
     * @default "\\"
     */
    escape: z
      .string()
      .length(1)
      .optional()
      .default(DEFAULT_DELIMITERS.escape)
      .describe("Escape character"),

    /**
     * Segment terminator character.
     * @default "\\r"
     */
    segment: z
      .string()
      .length(1)
      .optional()
      .default(DEFAULT_DELIMITERS.segment)
      .describe("Segment terminator character"),
  })
  .strict()
  .optional()
  .default(DEFAULT_DELIMITERS);

const ExperimentalSchema = z
  .object({
    /**
     * Controls how empty fields/components are represented in the AST.
     *
     * - 'legacy': Empty fields create full structure (Field → Rep → Comp → Sub with value: "")
     * - 'empty': Empty fields have no children (Field with children: [])
     *
     * @default 'legacy'
     * @experimental This option is experimental and will become the default in v3.0.0
     */
    emptyMode: z
      .enum(["legacy", "empty"])
      .default("legacy")
      .describe(
        "Control how empty values are represented in the parser. " +
          "'legacy' creates full structure with empty strings, " +
          "'empty' creates empty children arrays."
      ),
  })
  .strict()
  .optional()
  .default({ emptyMode: "legacy" });

/**
 * Schema for hl7v2-specific settings (NOT for plugins/linting).
 *
 * This schema defines the `settings` field that can be added to
 * unified-args configuration files. The `plugins` field is handled
 * by unified-args and should not be validated here.
 */
const HL7v2SettingsSchema = z
  .object({
    /**
     * Custom delimiters to use as defaults.
     *
     * These delimiters serve as fallbacks when:
     * - Processing non-MSH message fragments
     * - Working with systems that use non-standard delimiters
     * - CLI/batch processing where all messages use the same delimiters
     *
     * Note: MSH auto-detection will override these if the message starts with MSH.
     */
    delimiters: DelimitersSchema,

    /**
     * Experimental features for the parser.
     * These features are subject to change and may become defaults in future versions.
     */
    experimental: ExperimentalSchema,
  })
  .strict()
  .optional()
  .default({});

export type HL7v2Settings = z.infer<typeof HL7v2SettingsSchema>;

/**
 * Full config schema (for documentation/validation).
 *
 * Note: The `plugins` field is handled by unified-args.
 * We document it here but don't deeply validate its structure.
 */
export const HL7v2ConfigSchema = z.object({
  /**
   * JSON Schema reference for IDE support.
   * Use: https://raw.githubusercontent.com/rethinkhealth/hl7v2/main/packages/hl7v2-config/schema.json
   */
  $schema: z
    .string()
    .url()
    .optional()
    .describe("JSON Schema URL for IDE autocomplete support"),

  /**
   * Plugins configuration - handled by unified-args.
   *
   * Format examples:
   * - ["preset-lint-recommended"]
   * - ["lint-max-message-size", { "maxBytes": 5000000 }]
   * - ["lint-message-version", ["error", { "expression": ">=2.3 <3.0.0" }]]
   *
   * Severity levels: "off" (0), "on"/"warn" (1), "error" (2)
   */
  plugins: z
    .array(z.any())
    .optional()
    .describe(
      "Plugins configuration - handled by unified-args. " +
        "Format: [pluginName] or [pluginName, options] or [pluginName, [severity, options]]"
    ),

  /**
   * hl7v2-specific settings (validated by this package).
   */
  settings: HL7v2SettingsSchema,
});

export type HL7v2Config = z.infer<typeof HL7v2ConfigSchema>;
