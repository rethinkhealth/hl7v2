---
"@glion/util-query": patch
---

`parse()` no longer caches: it returns a new `PathParts` on every call, so writing to one result no longer changes later queries with the same path, and the module keeps no state between calls. The MSH paths that plugins and lint rules read on every message, now including `MSH.12.1`, skip the grammar. The README no longer documents `clearParseCache()` and `getParseCacheSize()`, which the package never exported.
