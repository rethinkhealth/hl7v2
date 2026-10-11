---
"@glion/lint-profile-withdrawn-fields": minor
"@glion/lint-profile-backward-compatible-fields": minor
"@glion/preset-lint-profile-recommended": minor
"@glion/profiles": minor
---

`@glion/lint-profile-withdrawn-fields` reports a value in a field whose optionality is `W` (withdrawn), such as v2.6 DG1-2 or v2.7 AL1-6. `@glion/lint-profile-backward-compatible-fields` reports a value in a field whose optionality is `B` (backward compatible), such as v2.5.1 DG1-4. Both accept an empty field and the explicit null `""`, and carry the field's value in `actual`.

`@glion/preset-lint-profile-recommended` includes `withdrawn-fields` as a warning. It does not include `backward-compatible-fields`, since HL7v2 still allows a value in a `B` field.

`FieldDefinition` from `@glion/profiles` lists `backwardCompatibleSequences` and `withdrawnSequences`, the sequences of its `B` and `W` fields.
