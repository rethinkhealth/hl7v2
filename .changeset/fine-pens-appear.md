---
"@rethinkhealth/hl7v2-parser": patch
---

Added `position` information to all nodes in the HL7v2 AST. Each node now includes a `position` property that indicates the start and end offsets (line, column, and character offset) of the node's value within the original HL7v2 message. This enables precise mapping between parsed data and the source message, supporting advanced features like error reporting, highlighting, and traceability.

