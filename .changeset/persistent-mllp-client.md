---
"@glion/mllp-client": minor
"@glion/ack": minor
---

Persistent connections: `MllpClient` now owns a single long-lived TCP/TLS socket that opens lazily on the first `send()` and is reused across subsequent sends. Lifecycle is explicit:

- `client.connect()` — idempotent eager open.
- `client.close({ force?: boolean })` — graceful drain (default) or immediate teardown.
- `client[Symbol.asyncDispose]()` — `await using` releases the socket at scope exit.
- `client.state` — read-only state getter.

`send()` resolves with the first ACK whose MSA-2 matches the outbound MSH-10. In HL7v2 Enhanced mode that's the Commit ACK; the trailing Application ACK is delivered to listeners of the `'unmatched-ack'` event (or discarded silently if no listener is attached). The client holds no correlation state — callers persist control IDs themselves and reconcile against `event.controlId`.

MLLP is synchronous on the wire (HL7v2 Transport §2.3.1): one send per connection at a time. Overlapping `send()` calls reject synchronously with `MllpClientError(CONCURRENT_SEND)`. Dropped sockets transition back to Idle and the next send re-opens (lazy reconnect); the in-flight send rejects with `CONNECTION_CLOSED` rather than silently retrying.

**Breaking change for long-running services:** callers must call `client.close()` (or use `await using`) — failing to close keeps the socket open until process exit. One-shot scripts that exit after sending are unaffected; tests should track and close clients in their cleanup hook.

`@glion/ack`: `AckException` now carries a `controlId` property (the MSA-2 echo of the original MSH-10), populated by the client's NAK builder.
