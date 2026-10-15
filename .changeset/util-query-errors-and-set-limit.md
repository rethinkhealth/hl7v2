---
"@glion/util-query": minor
---

Every function throws a `QueryError` for a path or a call it cannot serve, with a `code` naming the cause (`EMPTY_PATH`, `PADDED_PATH`, `DASH_SEPARATOR`, `ZERO_POSITION`, `INVALID_PATH`, `NOT_A_FIELD`, `NO_SEGMENT`, `POSITION_TOO_LARGE`, `NOT_IN_ANCESTORS`) and the values on `path`, `position`, and `limit`. The messages are new, one sentence per cause; branch on `code`, not on the text.

`set()` creates nodes only up to position 1,000 and throws `POSITION_TOO_LARGE` past it; before, a path such as `PID.2000000` created that many empty fields. A node that already exists is written at any position.
