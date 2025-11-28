---
"@rethinkhealth/hl7v2-config": patch
---

- Add `defineConfig()` helper for type-safe configuration authoring with IDE autocomplete
- Add `delimiters` configuration option to customize HL7v2 message delimiters
- Export `HL7v2ConfigInput` type for config authoring
- Default delimiters are now always populated in settings (no longer undefined)
