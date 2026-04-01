# @rethinkhealth/hl7v2-config

## 0.14.0

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.14.0

## 0.13.2

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.13.2

## 0.13.1

### Patch Changes

- c9fe3ee: Migrate build toolchain from tsup to tsdown
  - Switched JS bundler from tsup (esbuild) to tsdown (Rolldown) across all packages
  - `hl7v2-profiles` now uses Rolldown's `codeSplitting` to merge ~10,800 tiny chunks into ~170 larger ones, significantly improving install and build performance
  - No public API changes — this is a build internals change only

- Updated dependencies [c9fe3ee]
  - @rethinkhealth/hl7v2-utils@0.13.1

## 0.13.0

### Patch Changes

- Updated dependencies [575978f]
  - @rethinkhealth/hl7v2-utils@0.13.0

## 0.12.0

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.12.0

## 0.11.0

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.11.0

## 0.10.1

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.10.1

## 0.10.0

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.10.0

## 0.9.0

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.9.0

## 0.8.0

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.8.0

## 0.7.1

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.7.1

## 0.7.0

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.7.0

## 0.6.0

### Patch Changes

- Updated dependencies [95e32f2]
  - @rethinkhealth/hl7v2-utils@0.6.0

## 0.5.0

### Patch Changes

- Updated dependencies [514f3dc]
  - @rethinkhealth/hl7v2-utils@0.5.0

## 0.4.2

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.4.2

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
