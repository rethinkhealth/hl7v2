---
"@rethinkhealth/hl7v2-util-query": patch
---

Optimize `select()` and `value()` performance for common query patterns.

- Add pre-computed hot paths for MSH field reads (MSH-3 through MSH-12) — skips regex parsing and cache lookups entirely
- Add fast path in `locateSegment()` for first-occurrence top-level segments — scans `root.children` directly instead of `collectSegments()`
- Simplify parse cache by removing unnecessary LRU eviction overhead
