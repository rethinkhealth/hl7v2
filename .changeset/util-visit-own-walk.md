---
"@glion/util-visit": patch
---

`visit` walks the tree itself instead of through `unist-util-visit-parents`, with the same visiting order, ancestors, and visitor results. A walk no longer creates a function per node, and the processors built on it run up to four times faster on large messages.

With a type test, the walk no longer enters a node that cannot contain that type in an HL7v2 tree: `visit(tree, "segment", …)` does not walk the fields of each segment. Nodes of a type `@glion/ast` does not define are still entered.
