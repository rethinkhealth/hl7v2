---
"@rethinkhealth/hl7v2-annotate-profile-context": minor
"@rethinkhealth/hl7v2-lint-profile-required-fields": patch
"@rethinkhealth/hl7v2-lint-profile-field-max-length": patch
"@rethinkhealth/hl7v2-lint-profile-field-repetition": patch
"@rethinkhealth/hl7v2-lint-profile-required-components": patch
"@rethinkhealth/hl7v2-lint-profile-table-values": patch
"@rethinkhealth/hl7v2-lint-profile-extra-fields": patch
"@rethinkhealth/hl7v2-lint-profile-extra-components": patch
"@rethinkhealth/hl7v2-annotate-profile-fields": patch
"@rethinkhealth/hl7v2-annotate-profile-datatypes": patch
"@rethinkhealth/hl7v2-preset-lint-profile-recommended": patch
"@rethinkhealth/hl7v2-preset-annotate-profile-recommended": patch
---

Centralize profile loading into a single context plugin

New package:

- `@rethinkhealth/hl7v2-annotate-profile-context` — unified plugin that loads all profile data (fields, datatypes, tables) once per pipeline run and attaches them to `file.data` for downstream consumers

Refactored packages (internal, no API changes):

- 7 lint rules and 2 annotation plugins now read profiles from `file.data` instead of loading them independently, eliminating duplicated async loading code from 9+ locations
- Both profile presets include the context plugin as the first entry to ensure `file.data` is populated before consumers run
