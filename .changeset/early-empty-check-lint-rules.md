---
"@rethinkhealth/hl7v2-lint-profile-field-max-length": patch
"@rethinkhealth/hl7v2-lint-profile-required-fields": patch
---

Move empty field check before profile lookups to skip unnecessary Map accesses for empty fields.

- Add `isEmptyNode()` guard before `bySequence.get()` in field-max-length rule
- Replace local `hasValue()` with `isEmptyNode()` from `hl7v2-utils` in required-fields rule
- Remove redundant `utils.ts` from required-fields package
