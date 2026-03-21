---
"@rethinkhealth/hl7v2-util-query": minor
---

Add `format(node, ancestors)` function — the inverse of `select`. Given an AST node and its ancestor chain (from `visit` or `select`), returns the canonical path string that would select that node (e.g., `"PID-5.2"`, `"ORDER-ORC-1"`). Returns `null` if the chain contains no segment or group.
