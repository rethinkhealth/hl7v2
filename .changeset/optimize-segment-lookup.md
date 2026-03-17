---
"@rethinkhealth/hl7v2-util-query": patch
---

Add fast path for first-occurrence segment lookup in `select()` and `value()`.

- Skip `collectSegments()` traversal for top-level segment reads without group navigation
- Scan `root.children` directly for common cases like `value(tree, "MSH-12")`
