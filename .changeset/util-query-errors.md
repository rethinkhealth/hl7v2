---
"@glion/util-query": minor
---

Every function throws a `QueryError` for a path or a call it cannot serve, with a `code` naming the cause (`INVALID_PATH`, `NOT_IN_ANCESTORS`) and the path on `path`. Any string that does not follow the path grammar, including an empty one, one with spaces, a position `0`, or one written with `-`, is `INVALID_PATH`. The messages are new, one sentence per cause; branch on `code`, not on the text.

Breaking: `set()` is removed. Read a node with `select()` and change it in place; build new nodes with `@glion/builder`.
