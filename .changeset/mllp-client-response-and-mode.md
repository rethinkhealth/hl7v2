---
"@glion/mllp-client": minor
---

`client.send()` now returns an `MllpClientResponse` — both awaitable (unchanged ergonomic) and async-iterable (real-time observation of each accept ACK). The `waitFor` option is renamed to `mode` with HL7v2-aligned values.

**`MllpClientResponse` — dual-shape return**

The same value can be consumed in either of two ways. Pick exactly one per call.

```ts
// Awaitable — same single line as before:
const ack = await client.send(message);

// Async-iterable — see each accept ACK as it arrives:
for await (const ack of client.send(message)) {
  log.info({ code: ack.code }, "ack received");
}
```

The iterable path is the answer to "how do I observe the intermediate `CA` frame in HL7v2 enhanced mode without losing it?" — every accept ACK is yielded in arrival order, the generator completes after the resolving frame.

NAK codes (`AE`/`AR`/`CE`/`CR`) throw the matching `AckException` whether the response is awaited or iterated. Mixing modes on the same response throws `MllpClientError(INVALID_INPUT)`.

`MllpClientResponse` is a structural interface (`PromiseLike<Acknowledgment>` + `AsyncIterable<Acknowledgment>` + `.catch` + `.finally`), built by an internal closure-based factory — no class. The interface is exported from every entry point.

**`waitFor` → `mode`, with HL7v2-aligned values**

| Was                 | Now                     | Meaning                                            |
| ------------------- | ----------------------- | -------------------------------------------------- |
| `waitFor: "final"`  | `mode: "OnApplication"` | Wait for application-level ACK (`AA`/`AE`/`AR`)    |
| `waitFor: "commit"` | `mode: "OnCommit"`      | Resolve on the first frame, typically commit-level |

`mode` reads as a property of the call (what acknowledgment level am I waiting for?) rather than leaking the implementation detail of "we're reading frames in a loop." The values mirror HL7v2 §2.9.2's two acknowledgment levels.

**Breaking changes**

- `SendOptions.waitFor` → `SendOptions.mode`. Values renamed: `"final"` → `"OnApplication"`, `"commit"` → `"OnCommit"`.
- `WaitFor` type → `SendMode` type.
- Return type of `client.send()`: `Promise<Acknowledgment>` → `MllpClientResponse`. `await client.send(...)` still types as `Acknowledgment` and behaves identically; explicit `Promise<Acknowledgment>` annotations on the return type need to become `MllpClientResponse` or be inferred.

**Tests**

`response.test.ts` (12 tests) verifies the `MllpClientResponse` factory in isolation: await/iterate consumption, multi-await caching, single-consumer guards, `.catch`/`.finally` delegation, and generator throw propagation.

`core.test.ts` (5 new tests) verifies end-to-end iteration: CA→AA observed in order, NAK throws via iteration with `error.raw` preserved, breaking out closes the duplex, double-consume throws, multi-await returns the cached resolving ack.

Existing 42 tests pass without modification beyond the option rename.
