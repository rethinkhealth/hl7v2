---
"@glion/mllp-client": minor
---

`client.send()` now returns an `MllpClientResponse` that is **awaitable** by default and exposes a **`.cursor()`** method for real-time observation of each accept ACK. The `waitFor` option is renamed to `mode` with HL7v2-aligned values.

**`MllpClientResponse` — awaitable, with an opt-in cursor**

```ts
// Average dev — identical to today, awaitable resolves to the resolving ACK:
const ack = await client.send(message);

// Power user — opt into streaming via .cursor():
for await (const ack of client.send(message).cursor()) {
  log.info({ code: ack.code }, "ack received");
}
```

The cursor path is the answer to "how do I observe the intermediate `CA` frame in HL7v2 enhanced mode without losing it?" — every accept ACK is yielded in arrival order, the cursor completes after the resolving frame.

NAK codes (`AE`/`AR`/`CE`/`CR`) throw the matching `AckException` whether the response is awaited or consumed via `.cursor()`. Awaiting and calling `.cursor()` on the same response throws `MllpClientError(INVALID_INPUT)` — the underlying generator is single-consumer.

`MllpClientResponse` is a structural interface (`PromiseLike<Acknowledgment>` + `.catch` + `.finally` + `cursor()`), built by an internal closure-based factory — no class. The interface is exported from every entry point. The `.cursor()` shape mirrors Mongoose's `Query.cursor()` pattern, which makes the streaming opt-in explicit and discoverable.

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

`response.test.ts` (12 tests) verifies the `MllpClientResponse` factory in isolation: await/cursor consumption, multi-await caching, single-consumer guards, `.catch`/`.finally` delegation, and generator throw propagation.

`core.test.ts` (5 new tests) verifies end-to-end cursor consumption: CA→AA observed in order, NAK throws via the cursor with `error.raw` preserved, breaking out of the cursor closes the duplex, double-consume throws, multi-await returns the cached resolving ack.

Existing 42 tests pass without modification beyond the option rename.
