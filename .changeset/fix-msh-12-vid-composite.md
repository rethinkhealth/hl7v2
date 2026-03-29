---
"@rethinkhealth/hl7v2-util-query": patch
"@rethinkhealth/hl7v2-ack": patch
"@rethinkhealth/hl7v2-annotate-profile-fields": patch
"@rethinkhealth/hl7v2-annotate-profile-datatypes": patch
"@rethinkhealth/hl7v2-lint-message-version": patch
"@rethinkhealth/hl7v2-lint-profile-required-fields": patch
"@rethinkhealth/hl7v2-lint-profile-field-max-length": patch
"@rethinkhealth/hl7v2-lint-profile-field-repetition": patch
"@rethinkhealth/hl7v2-lint-profile-required-components": patch
"@rethinkhealth/hl7v2-lint-profile-table-values": patch
"@rethinkhealth/hl7v2-lint-profile-events-segments-order": patch
"@rethinkhealth/hl7v2-message-structure": patch
"@rethinkhealth/hl7v2-mllp": patch
---

Fix composite VID handling in MSH-12. `value()` now drills to the first child for composite fields, and all packages explicitly use `MSH-12.1` for version extraction. Also removes redundant "missing version" messages from profile lint rules — `lint-message-version` is the single authority. Changes `file.fail()` to `file.message()` in `lint-message-version` so user configuration controls severity.
