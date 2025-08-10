---
"@rethinkhealth/hl7v2-parser": patch
---

Refactored to remove async management, as unified's processing pipeline is inherently synchronous and does not support asynchronous plugins or workflows.
