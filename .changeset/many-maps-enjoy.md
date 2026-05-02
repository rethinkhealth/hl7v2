---
"@glion/parser": patch
---

Fix round-trip data loss for trailing named-but-fieldless segments.
The parser previously dropped any trailing segment whose payload
contained no recognised delimiters under the active delimiter set
(common when the input uses custom delimiters but does not start with
`MSH`, so the `detectDelimiters` preprocessor does not fire). Once the
trailing segment was dropped, the segment immediately preceding it
shifted into the trailing position and got dropped on the next
parse — cascading data loss across round-trips. Trailing segments
with a name now survive; only lazily-opened nameless segments are
still pruned. Surfaced via the `@glion/qa` fuzz suite
(`round-trip.test.ts`).
