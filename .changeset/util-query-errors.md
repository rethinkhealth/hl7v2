---
"@glion/util-query": minor
---

Every function throws a `QueryError` for a path or a call it cannot serve, with a `code` naming the cause (`EMPTY_PATH`, `PADDED_PATH`, `DASH_SEPARATOR`, `ZERO_POSITION`, `INVALID_PATH`, `NOT_A_FIELD`, `NO_SEGMENT`, `NOT_IN_ANCESTORS`) and the path on `path`. The messages are new, one sentence per cause; branch on `code`, not on the text.
