---
"@glion/util-query": minor
---

Every function that takes a path throws a `QueryError` with the path on `path` when it cannot read the path. An empty path is `EMPTY_PATH`. Any other string that does not follow the path grammar, including one with spaces, a position `0`, or one written with `-`, is `INVALID_PATH`. The message is new; branch on `code`, not on the text.

Breaking: `set()` is removed. Read a node with `select()` and change it in place; build new nodes with `@glion/builder`.

`format()` returns `null` for a node its ancestors do not contain, as it does for a node with no segment or group above it; it threw before.
