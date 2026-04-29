---
"@glion/mllp-client": minor
---

`MllpClient` now exposes two sibling methods: `send()` for the simple case and `stream()` for real-time observation of every accept ACK. The `waitFor` option is renamed to `mode` with HL7v2-aligned values.

**Two methods, real types**

```ts
// Simple — resolving accept ACK as a real Promise<Acknowledgment>:
const ack = await client.send(message);

// Streaming — yields each accept ACK as it arrives:
for await (const ack of client.stream(message)) {
  log.info({ code: ack.code }, "ack received");
}
```

`client.send()` returns `Promise<Acknowledgment>` (a real Promise — `instanceof Promise` works for tracing tools). `client.stream()` returns `AsyncIterable<Acknowledgment>`. Each call opens its own connection; there is no shared response object and no single-consumer constraint.

In HL7v2 enhanced mode the stream yields `CA` then the application-level ACK; in basic mode it yields a single application-level ACK. NAK codes (`AE`/`AR`/`CE`/`CR`) throw the matching `AckException` from both `send()` and `stream()`, with the wire-format ACK on `error.raw`.

The shape mirrors mainstream Node clients (MongoDB `find`/`findOne`, AWS SDK paginators, OpenAI's `stream: true` flag pattern) — two entry points with familiar return types, rather than a custom dual-shape value.

**`waitFor` → `mode`, with HL7v2-aligned values**

| Was                 | Now                     | Meaning                                            |
| ------------------- | ----------------------- | -------------------------------------------------- |
| `waitFor: "final"`  | `mode: "OnApplication"` | Wait for application-level ACK (`AA`/`AE`/`AR`)    |
| `waitFor: "commit"` | `mode: "OnCommit"`      | Resolve on the first frame, typically commit-level |

`mode` reads as a property of the call (what acknowledgment level am I waiting for?) rather than leaking the implementation detail of "we're reading frames in a loop." The values mirror HL7v2 §2.9.2's two acknowledgment levels.

**Breaking changes**

- `SendOptions.waitFor` → `SendOptions.mode`. Values renamed: `"final"` → `"OnApplication"`, `"commit"` → `"OnCommit"`.
- `WaitFor` type → `SendMode` type.
- `client.send()` return type: `Promise<Acknowledgment>` (was a custom `MllpClientResponse` interface in pre-release iterations; the public 0.x release shipped `Promise<Acknowledgment>` so this matches what callers already expected).
- New: `client.stream(message, options?)` for real-time iteration.
- New: `MllpDuplexStream.close()` is sync-only by contract (was `() => void | Promise<void>`). All shipping adapters were already sync; the contract now matches.

**Tests**

`core.test.ts` adds three streaming tests (CA→AA observed in order, NAK throws via the iterator with `error.raw` preserved, breaking out closes the duplex), and updates the existing acknowledgment-modes tests for the `mode` rename. 44 tests pass.
