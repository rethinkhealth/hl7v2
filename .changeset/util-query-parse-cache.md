---
"@glion/util-query": patch
---

`parse()` returns a frozen `PathParts`, with its segment and groups frozen too; writing to it throws a `TypeError` instead of changing every later query with the same path. The parse cache holds up to 1,000 paths and evicts the oldest when a new one is added; it had no limit.
