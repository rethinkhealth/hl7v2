---
"@rethinkhealth/hl7v2-utils": minor
---

Add `getLength` and `getByteLength` utility functions for efficiently calculating node lengths:

- `getLength`: Returns JavaScript string length (UTF-16 code units) - useful for display, string operations, and character counting
- `getByteLength`: Returns UTF-8 byte length - useful for wire protocol, size constraints, and memory allocation

Both functions recursively compute the total serialized length including all children and separators, with clean functional implementations using `reduce` for consistency and elegance
