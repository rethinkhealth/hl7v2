---
"@rethinkhealth/hl7v2": minor
---

Remove hl7v2-message-structure plugin from the default pipeline

The `hl7v2-message-structure` plugin has been removed. It previously inferred MSH-9.3 from MSH-9.1 + MSH-9.2 and mutated the AST, which broke round-trip serialization fidelity for messages without MSH-9.3 (e.g., v2.3 messages).

Consumers that read MSH-9.3 from the AST (segment-order lint rule, MLLP context) will now only see it when the original message includes it. Message structure resolution will be addressed separately via a shared utility function.
