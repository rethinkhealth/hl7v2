import type { HL7v2ConfigInput } from "./schema";

/**
 * Helper for type-safe configuration authoring.
 *
 * Use in your `hl7v2.config.ts` file for IDE autocomplete:
 *
 * @example
 * ```typescript
 * import { defineConfig } from '@rethinkhealth/hl7v2-config';
 *
 * export default defineConfig({
 *   plugins: ['preset-lint-recommended'],
 *   settings: {
 *     experimental: { emptyMode: 'empty' }
 *   }
 * });
 * ```
 */
export function defineConfig(config: HL7v2ConfigInput): HL7v2ConfigInput {
  return config;
}
