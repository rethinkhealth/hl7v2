---
"@rethinkhealth/hl7v2-profiles": minor
"@rethinkhealth/hl7v2-lint-profile-events-segments-order": minor
"@rethinkhealth/hl7v2-preset-lint-recommended": minor
---

Add `resolveMessageStructure()` utility and remove `hl7v2-lint-message-structure-missing` rule.

- Add `resolveMessageStructure(version, messageCode, triggerEvent)` to `@rethinkhealth/hl7v2-profiles` for resolving canonical message structure IDs from event maps
- Resolve message structure from MSH-9.1 + MSH-9.2 via event maps when MSH-9.3 is absent in segment-order linting (wire value wins when present)
- Remove `hl7v2-lint-message-structure-missing` from `hl7v2-preset-lint-recommended` — it produced false positives for pre-v2.3.1 messages where MSH-9.3 does not exist in the spec
