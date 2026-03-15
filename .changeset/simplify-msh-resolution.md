---
"@rethinkhealth/hl7v2-lint-profile-events-segments-order": patch
"@rethinkhealth/hl7v2-message-structure": minor
"@rethinkhealth/hl7v2": minor
"@rethinkhealth/hl7v2-ack": patch
"@rethinkhealth/hl7v2-mllp": patch
"@rethinkhealth/hl7v2-lint-message-version": patch
---

Remove tree.data.messageInfo from all packages. Delete hl7v2-annotate-message and hl7v2-util-message-info packages. Rename hl7v2-annotate-message-structure to hl7v2-message-structure. All packages now read MSH fields directly via value() from hl7v2-util-query.
