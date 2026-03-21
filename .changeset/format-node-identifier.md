---
"@rethinkhealth/hl7v2-util-query": minor
---

Add `format` function that converts an AST node and its ancestor chain into a canonical HL7v2 path string (e.g., "PID-5.2", "ORDER-ORC-1"). This is the inverse of `select`: given a node and ancestors from `visit` or `select`, it produces the path string that would select that node.
