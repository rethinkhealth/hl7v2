---
"@rethinkhealth/hl7v2-lint-profile-events-segments-order": patch
"@rethinkhealth/hl7v2-annotate-message": minor
"@rethinkhealth/hl7v2-annotate-message-structure": minor
"@rethinkhealth/hl7v2": minor
"@rethinkhealth/hl7v2-util-message-info": patch
---

Remove tree.data.messageInfo from all packages. hl7v2-annotate-message is now a no-op. hl7v2-annotate-message-structure reads MSH fields directly and writes resolved structure back into the AST as MSH-9.3. All packages now read message metadata directly from MSH fields.
