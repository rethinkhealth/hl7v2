---
"@rethinkhealth/hl7v2-lint-profile-events-segments-order": patch
"@rethinkhealth/hl7v2-util-message-info": patch
---

Simplify MSH field resolution by always reading directly from the AST. Remove the annotated tree.data.messageInfo fallback path. Add benchmarks comparing MSH read vs annotated data performance.
