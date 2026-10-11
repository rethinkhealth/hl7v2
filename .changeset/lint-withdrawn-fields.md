---
"@glion/lint-profile-withdrawn-fields": minor
"@glion/lint-profile-backward-compatible-fields": minor
"@glion/preset-lint-profile-recommended": minor
"@glion/hl7v2": minor
"@glion/profiles": minor
---

`@glion/lint-profile-withdrawn-fields` reports a value in a field whose optionality is `W` (withdrawn), such as v2.6 DG1-2 or v2.7 AL1-6. `@glion/lint-profile-backward-compatible-fields` reports a value in a field whose optionality is `B` (backward compatible), such as v2.5.1 DG1-4. Both accept an empty field and the explicit null `""`, and carry the field's value in `actual`.

`@glion/preset-lint-profile-recommended` includes `withdrawn-fields` as an error and `backward-compatible-fields` as a warning: a withdrawn field must be empty, while HL7v2 still allows a value in a backward-compatible field.

**Breaking:** through the preset, `parseHL7v2` from `@glion/hl7v2` now marks a message fatal when it values a withdrawn field, such as EVN-1, MSA-3 or PID-19 from v2.7, and warns on a valued backward-compatible field, such as EVN-1 in v2.5 or v2.5.1. To keep the old behavior, compose the profile rules without the preset, or turn a rule off after it: `.use(hl7v2LintWithdrawnFields, false)`.

`FieldDefinition` from `@glion/profiles` lists `backwardCompatibleSequences` and `withdrawnSequences`, the sequences of its `B` and `W` fields.
