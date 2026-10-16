---
"@glion/decode-escapes": patch
---

Decoding walks the tree with `@glion/util-visit`, and a message decodes about four times faster. `unist-util-visit` and `unist-util-visit-parents` are no longer dependencies.
