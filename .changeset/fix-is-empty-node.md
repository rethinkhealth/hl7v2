---
"@rethinkhealth/hl7v2-utils": patch
---

Fix `isEmptyNode` to check ALL children recursively. Previously returned `false` for multi-child nodes without checking if children were empty — e.g., `|^^|` (three empty components) was incorrectly treated as non-empty. Now aligns with HL7v2 spec: a node is empty only if no subcomponent in its subtree has a non-empty string value.
