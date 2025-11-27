import { z } from "zod";

/**
 * Schema for hl7v2-specific settings (NOT for plugins/linting).
 *
 * This schema defines the `settings` field that can be added to
 * unified-args configuration files. The `plugins` field is handled
 * by unified-args and should not be validated here.
 */
export const HL7v2SettingsSchema = z
  .object({
    /**
     * Experimental features for the parser.
     * These features are subject to change and may become defaults in future versions.
     */
    experimental: z
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
      .default({ emptyMode: "legacy" }),

    // Future hl7v2-specific settings can be added here
    // Example:
    // validation: z.object({
    //   strict: z.boolean().default(false),
    // }).optional(),
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
