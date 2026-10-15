---
"@glion/util-visit": minor
---

Breaking: a visitor receives `(node, ancestors)`, as in `unist-util-visit-parents`. The third argument, `info` (`index`, `sequence`, `depth`, `metadata`), and the `VisitInfo` type are removed.

- `depth` is `ancestors.length + 1`, and a segment's or group's name is on the node.
- A node's position is its place in `ancestors.at(-1).children`. A visitor that removes the current node and returns its index to continue reads the index with `indexOf` before removing it.
