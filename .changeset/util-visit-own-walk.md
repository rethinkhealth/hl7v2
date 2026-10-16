---
"@glion/util-visit": patch
---

`visit` walks the tree itself instead of through `unist-util-visit-parents`, with the same visiting order, ancestors, and visitor results. A walk no longer creates a function per node, and the processors built on it run up to four times faster on large messages.
