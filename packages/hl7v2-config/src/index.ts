/**
 * Configuration schema and loader for hl7v2.
 *
 * This package provides type-safe configuration loading for hl7v2-specific
 * settings that augment the standard unified-args configuration system.
 *
 * ## Usage
 *
 * ### Load settings programmatically
 * ```typescript
 * import { loadHL7v2Settings } from '@rethinkhealth/hl7v2-config';
 *
 * const settings = await loadHL7v2Settings();
 * console.log(settings.experimental.emptyMode); // 'legacy' or 'empty'
 * ```
 *
 * ### Configuration file format
 * Create a `.hl7v2rc.json` file:
 * ```json
 * {
 *   "$schema": "https://raw.githubusercontent.com/rethinkhealth/hl7v2/main/packages/hl7v2-config/schema.json",
 *   "plugins": [
 *     "preset-lint-recommended"
 *   ],
 *   "settings": {
 *     "experimental": {
 *       "emptyMode": "empty"
 *     }
 *   }
 * }
 * ```
 *
 * @module @rethinkhealth/hl7v2-config
 */

export { jsonSchema } from "./json-schema";
export {
  ConfigurationError,
  loadHL7v2Config,
  loadHL7v2Settings,
} from "./loader";
export type { HL7v2Config, HL7v2Settings } from "./schema";
export { HL7v2ConfigSchema, HL7v2SettingsSchema } from "./schema";
