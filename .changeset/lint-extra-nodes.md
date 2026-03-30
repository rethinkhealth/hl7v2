---
"@rethinkhealth/hl7v2-lint-profile-extra-fields": minor
"@rethinkhealth/hl7v2-lint-profile-extra-components": minor
"@rethinkhealth/hl7v2-lint-profile-table-values": patch
"@rethinkhealth/hl7v2-preset-lint-profile-recommended": minor
---

Add extra-fields and extra-components lint rules, fix table-values repetition bug

New packages:

- `@rethinkhealth/hl7v2-lint-profile-extra-fields` — warns when a segment has fields beyond the maximum sequence defined in its profile
- `@rethinkhealth/hl7v2-lint-profile-extra-components` — warns when a composite field has more components than its datatype profile defines

Bug fix:

- `@rethinkhealth/hl7v2-lint-profile-table-values` now validates all field repetitions instead of only the first

Both new rules are included in `@rethinkhealth/hl7v2-preset-lint-profile-recommended`.
