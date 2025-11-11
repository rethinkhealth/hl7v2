---
"@rethinkhealth/hl7v2-utils": patch
---

Add `getByteLength` utility function for efficiently calculating the byte length of any HL7v2 AST node. This new function recursively computes the total serialized length including all children and separators (1 byte each), making it useful for validating field/message size constraints, memory allocation planning, and message size analytics without requiring full serialization
