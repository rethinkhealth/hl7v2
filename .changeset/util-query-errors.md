---
"@glion/util-query": minor
---

Every function that takes a path throws a `QueryError` with `code` `INVALID_PATH` and the path on `path` when the path does not follow the grammar. Any string that does not follow the path grammar, including an empty one, one with spaces, a position `0`, or one written with `-`, is `INVALID_PATH`. The message is new; branch on `code`, not on the text.

Breaking: `set()` is removed. Read a node with `select()` and change it in place; build new nodes with `@glion/builder`.

`format()` returns `null` for a node its ancestors do not contain, as it does for a node with no segment or group above it; it threw before.
