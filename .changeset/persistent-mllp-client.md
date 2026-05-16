---
"@glion/mllp-client": minor
---

Persistent connections: `MllpClient` now owns a single long-lived TCP/TLS socket that opens lazily on the first `send()` and is reused across subsequent sends. Lifecycle is explicit:

- `client.connect()` — idempotent eager open.
- `client.close({ force?: boolean })` — graceful drain (default) or immediate teardown.
- `client[Symbol.asyncDispose]()` — `await using` releases the socket at scope exit.
- `client.state` — read-only state getter.
- `"connect"` and `"end"` events on the client.

Concurrent `send()` calls serialise on the wire (lock-step). Sends issued while the socket is opening queue in the offline queue, bounded by `queueLimit` (default 1000). Dropped sockets transition back to Idle and the next send re-opens (lazy reconnect); the in-flight send rejects with `CONNECTION_CLOSED` rather than silently retrying.

**Breaking change for long-running services:** callers must call `client.close()` (or use `await using`) — failing to close keeps the socket open until process exit. One-shot scripts that exit after sending are unaffected; tests should track and close clients in their cleanup hook.

Public-API additions: `queueLimit` option.
