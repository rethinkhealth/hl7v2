import { zodToJsonSchema } from "zod-to-json-schema";
import { HL7v2ConfigSchema } from "./schema";

/**
 * JSON Schema for hl7v2 configuration.
 *
 * This schema can be used for IDE autocomplete by adding:
 * ```json
 * {
 *   "$schema": "https://raw.githubusercontent.com/rethinkhealth/hl7v2/main/packages/hl7v2-config/schema.json"
 * }
 * ```
 */
export const jsonSchema = zodToJsonSchema(HL7v2ConfigSchema, {
  name: "HL7v2Config",
  $refStrategy: "none",
  target: "jsonSchema7",
});
