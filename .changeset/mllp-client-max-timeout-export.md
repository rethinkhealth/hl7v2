---
"@glion/mllp-client": minor
---

Export `MAX_TIMEOUT_MS`, the `setTimeout` ceiling the client rejects any `connectTimeoutMs` or `sendTimeoutMs` above, so a caller that validates those options before constructing a client can read the bound instead of copying it.
