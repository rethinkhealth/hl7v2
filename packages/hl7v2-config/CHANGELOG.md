# @rethinkhealth/hl7v2-config

## 0.4.1

### Patch Changes

- 7a8ad97: - Add `defineConfig()` helper for type-safe configuration authoring with IDE autocomplete
  - Add `delimiters` configuration option to customize HL7v2 message delimiters
  - Export `HL7v2ConfigInput` type for config authoring
  - Default delimiters are now always populated in settings (no longer undefined)
- 7a8ad97: Minor bug fixes
  - @rethinkhealth/hl7v2-utils@0.4.1

## 0.4.0

### Patch Changes

- 5c1aa60: Implemented the `@rethinkhealth/hl7v2-config` package that extends unified-args configuration with hl7v2-specific settings.
