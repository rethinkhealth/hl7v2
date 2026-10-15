---
"@glion/util-query": patch
---

`format()` returns `null` for a field, repetition, component, or subcomponent whose ancestors hold no segment or group, instead of a path starting with `null`. `parse()` rejects inherited object keys such as `__proto__` and `constructor` as invalid paths.
