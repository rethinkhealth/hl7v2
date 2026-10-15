---
"@glion/lint-max-message-size": patch
---

Fix the size `@glion/lint-max-message-size` measures for a file with no value or a `Uint8Array` value.

- Measure a file with no value as 0 bytes, not 9
- Measure a `Uint8Array` value by its bytes, not by its numbers written out with commas
