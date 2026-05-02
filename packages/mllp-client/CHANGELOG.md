# @glion/mllp-client

## 0.16.0

### Minor Changes

- 5e3d97e: Add `@glion/mllp-client`, an MLLP client for sending HL7v2 messages and receiving acknowledgments. Each `MllpClient.send()` call opens a one-shot TCP/TLS connection, MLLP-frames the message, awaits the ACK, and tears the connection down — analogous to a single HTTP request/response. NAK responses (MSA-1 ∈ {AE, AR, CE, CR}) are thrown as the matching `AckException` subclass from `@glion/ack`, so callers can catch the same exception types the receiver-side middleware uses. Each thrown exception carries the original wire-format ACK on its `raw` attribute. Transport-level failures throw `MllpClientError extends MllpError` with codes such as `CONNECTION_REFUSED`, `TIMEOUT`, `CONNECTION_CLOSED`, `MALFORMED_FRAME`, and `MALFORMED_ACK`.
- 5e3d97e: Bump `engines.node` from `>=18` to `>=20` across all `@glion/*` packages.

  Node 18 reaches end-of-life in April 2026; new code in this repo uses
  Node 20+ APIs (notably `AbortSignal.any()` in `@glion/mllp-client`),
  and standardising on a single supported Node line keeps the
  dependency matrix coherent across the monorepo.

  Downstream impact: applications that pin Node 18 will need to upgrade
  to Node 20 or later. Node 20 is itself in active LTS and remains
  supported until April 2026; Node 22 is the current LTS.

- 5e3d97e: Replace the `makeRunOnce` + `settle` racing pattern in `exchange()` with standard `AbortSignal`-driven cancellation.

  The old design imperatively guarded promise resolution with a "first call wins" flag and routed five concurrent code paths (deadline, frame-decode error, write, read, success) through five separate `settle(...)` callbacks. Correct, but reinventing what `AbortSignal` is built for, and forcing the body of `exchange()` into a `new Promise()` constructor with an inner `void (async () => {})()` IIFE.

  The new design:
  - `Deadline` is now just `{ signal: AbortSignal; cancel(): void }`. The timer aborts the controller with a typed `MllpClientError` as the reason; awaiters can re-throw `signal.reason` directly.
  - `exchange()` is a plain `async` function with top-down `try/catch/finally`. It composes the deadline's signal with a local `AbortController` (used only for the frame decoder's `onError`) via the standard `AbortSignal.any()`.
  - When the combined signal fires, an abort listener calls `writer.abort(reason)` and `reader.cancel(reason)` — standard Web Streams cancellation. Any pending `write()` / `read()` rejects with the same typed reason. No custom `Promise.race`, no `raceAbort` helper.
  - `makeRunOnce` is deleted; `internal/run-once.ts` is gone.
  - The IIFE is gone — `exchange()` itself is `async`.
  - Error handling consolidates into a single `catch` block (was duplicated across five `settle` callbacks).

  `engines.node` bumps from `>=18` to `>=20` because `AbortSignal.any()` requires Node 20+.

  The wire-level behaviour is unchanged: same error codes, same fields on thrown errors, same lifecycle (graceful FIN on success, hard close on failure). All 37 existing tests pass without modification, and the existing TIMEOUT test now also asserts that the typed `signal.reason` propagates verbatim through the abort path.

- 5e3d97e: Polish the `AbortSignal` architecture and add caller-supplied cancellation to `MllpClient.send()`.

  **New: `client.send(message, { signal? })`**

  Mirrors the `fetch(url, { signal })` pattern. The caller's signal is composed with the client's internal timeout via the standard `AbortSignal.any` so either source aborts the exchange. Typical use: tie a batch of `send()`s to an app-shutdown `AbortController` so they all cancel cleanly when the process exits.

  ```ts
  const controller = new AbortController();
  process.on("SIGINT", () => controller.abort(new Error("shutting down")));

  await client.send(message, { signal: controller.signal });
  ```

  When the caller's signal aborts, the resulting `MllpClientError` has `code: "TIMEOUT"` and forwards the caller's `signal.reason` as its chained `cause`.

  **`subscribeAbort()` helper**

  Each runtime adapter previously had ~10 lines of `signal.aborted` / `addEventListener` / `removeEventListener` boilerplate. Extracted to a single `subscribeAbort(signal, onAbort): () => void` helper in `core/internal/`. Each adapter shrinks accordingly; the "aborted vs aborting" branching collapses into one shape.

  **`normaliseExchangeError` precedence is now explicit**

  Documented and tightened:
  1. Signal aborted with a typed `MllpClientError` reason → return verbatim
  2. Signal aborted with any other reason → wrap as `TIMEOUT` with the caller's reason chained as `cause` (caller cancellation conceptually IS a timeout from the protocol's perspective)
  3. Stream rejection that's already typed → return unchanged so adapter-specific failures are preserved
  4. Otherwise wrap as `CONNECTION_CLOSED`

  **New `SendOptions` type**

  Exported from every entry point (core, default, node) so callers can type the second argument to `send()` if they need to.

  **Tests (37 → 39)**

  Two new core tests:
  - Caller-supplied signal aborts mid-exchange → `TIMEOUT` with caller's reason chained as `cause`; round-trip resolves at ~50ms despite a 60s timeout (proves the caller's signal won the race).
  - Pre-aborted caller signal → `TIMEOUT` without the deadline ever firing.

  The wire-level behaviour is unchanged for callers that don't supply a signal — they get the same shape they had before. `engines.node` was already `>=20` (required for `AbortSignal.any`).

- 5e3d97e: Apply final security and quality review fixes:

  **Must-fix correctness**
  - **Deadline timer leak on connect failure.** `MllpClient.send()` now wraps `connect` in the same try/finally as `exchange`, so `deadline.cancel()` runs even when the connection itself rejects. Previously the underlying `setTimeout` would keep the event loop alive for the full timeout (default 30s) after a failed connect — visible in short-lived processes such as CLIs.
  - **Unhandled rejection from `duplex.close()`.** `MllpDuplexStream.close()` is typed as `void | Promise<void>`. Adapters that return a rejected Promise (Workers' `socket.close()` is one example) previously surfaced as `unhandledRejection` (a process crash on modern Node). Cleanup is now routed through a `closeDuplexSafely` helper that awaits and swallows the result.
  - **Test cleanup.** Removed dead `serve()` server in the "destroys the socket after a successful send" test (leftover from an earlier draft). Replaced the fixed `setTimeout(50)` with an event-based `socket.once("close" | "end", …)` wait so the test no longer flakes on slow CI.

  **Quality improvements**
  - **Constructor validation.** `MllpClient` now validates options at construction time and throws `MllpClientError(INVALID_INPUT)` for sharp edges that previously surfaced as confusing runtime symptoms: empty `host`, `port` outside `1..65535`, missing `connect`, non-positive `timeout`, non-positive `maxAckSize`.
  - **Consistent `releaseLock` warning.** Both the writer and reader release-lock blocks in `exchange()` now route failures through the same `warnReleaseLockOnce` helper so a real stream-state regression surfaces on first occurrence in either path.
  - **Signal propagation.** `MllpClient.send()` now exposes the deadline as an `AbortSignal` and forwards it to `connect`, so any future runtime adapter can honour a connect-phase deadline by reading from `params.signal`. Node already observed the signal.

  **New error code**
  - **`TLS_HANDSHAKE_FAILED`.** Added to `MllpClientErrorCode`. The Node adapter now routes TLS-specific Node error codes (`CERT_HAS_EXPIRED`, `DEPTH_ZERO_SELF_SIGNED_CERT`, `ERR_TLS_CERT_ALTNAME_INVALID`, `ERR_TLS_HANDSHAKE_TIMEOUT`, `SELF_SIGNED_CERT_IN_CHAIN`, `UNABLE_TO_GET_ISSUER_CERT`, `UNABLE_TO_GET_ISSUER_CERT_LOCALLY`, `UNABLE_TO_VERIFY_LEAF_SIGNATURE`) to it, plus a best-effort message-sniff for TLS errors that lack a stable `error.code`. Distinguishing TLS misconfiguration from generic "connection closed" is meaningful in healthcare deployments where TLS is a recurring incident class.

  **Documentation**
  - README's "custom transport" example is now a fully runnable inline implementation that wraps a browser `WebSocket` into `{ readable, writable, close }` over Web Streams (replaces the previous undefined `wrapWebSocketAsDuplex` placeholder).

  **Tests (35 → 37)**
  - New core test asserting `deadline.cancel()` runs when `connect` rejects — measures elapsed time as a proxy for the absence of a leaked timer.
  - New core test asserting no unhandled rejection surfaces when `duplex.close()` returns a rejected promise.

- 5e3d97e: Prepare `@glion/mllp-client` for public release with two structural changes:

  **Naming consistency**

  Rename two public symbols so every exported identifier is prefixed with `MllpClient` and reads unambiguously when imported in isolation:
  - `ClientTlsOptions` → `MllpClientTlsOptions`
  - `ClientErrorCode` → `MllpClientErrorCode`

  The class (`MllpClient`), the options (`MllpClientOptions`), and the error class (`MllpClientError`) already followed this convention; the two stragglers now match. `Acknowledgment` keeps its package-agnostic name because it describes the entity itself, not a `MllpClient`-bound configuration.

  **Internal/public separation**

  Split the 700-line `client.ts` into a small public layer and a focused `internal/` directory. `client.ts` now holds only the `MllpClient` class and its public option types; the socket lifecycle, exchange pipeline, deadline primitive, and run-once guard each live in their own internal module:

  ```
  src/
    index.ts              public exports
    client.ts             MllpClient + public option types        (~245 lines)
    errors.ts             MllpClientError + MllpClientErrorCode
    acknowledgment.ts     Acknowledgment + parseAck/throwOnNak
    internal/
      socket.ts           openConnection + mapSocketError + destroySocket
      exchange.ts         exchange + writeFrame + readFirstFrame + encodeOrThrow
      deadline.ts         Deadline + createDeadline
      run-once.ts         makeRunOnce
  ```

  The public package surface is unchanged in shape — the same set of symbols is still re-exported from `index.ts` — but the file layout makes it easier to evolve the internals without touching the public file, and makes it obvious which modules are not part of the API.

- 5e3d97e: `MllpClient` now exposes two sibling methods: `send()` for the simple case and `stream()` for real-time observation of every accept ACK. The `waitFor` option is renamed to `mode` with HL7v2-aligned values.

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

- 5e3d97e: Make `@glion/mllp-client` runtime-agnostic. The package now ships two entry points — a runtime-free core and a Node adapter:
  - `@glion/mllp-client` — Node and Bun (default; same DX as before)
  - `@glion/mllp-client/core` — runtime-free; supply your own `connect` (custom transports, browser-via-WebSocket bridges, in-memory test pipes)

  Deno and Cloudflare Workers adapters are landing in follow-up PRs against the same core; no API change is needed when those entry points become available.

  The user-facing API is identical across both entries — `new MllpClient({ host, port }).send(message)` — so application code stays unchanged when the future runtime adapters land.

  **Breaking change:** the package internals are restructured. The only public symbol that moved is the `MllpClient` class itself, and only for callers who reached into `@glion/mllp-client/dist/...` or `node:net`-specific options:
  - `MllpClientTlsOptions.ca | cert | key` is now `string | Uint8Array` instead of `string | Buffer`. `Buffer` extends `Uint8Array`, so existing Node callers still work without changes.
  - The Node socket plumbing is no longer exposed at module scope; if you imported `nodeConnect` for advanced use, it remains available from `@glion/mllp-client/node`.

  Internals: the core `exchange()` now operates on a Web-Streams `MllpDuplexStream` instead of a Node `Socket`, and `MllpClient.send()` accepts a pluggable `connect: MllpConnect` function.

  Tests:
  - `test/node.test.ts` — Node adapter tests against a real local TCP server, including TLS happy paths against a self-signed server, TLS handshake-failure mapping, and abort-during-connect.
  - `test/core.test.ts` — runtime-free tests using a fake in-memory connector to prove the core has no runtime coupling.

  Each adapter is verified in isolation; the core protocol logic is verified separately against an in-memory transport.

- 5e3d97e: Apply security and quality review fixes:

  **Security**
  - Replace `ClientTlsOptions.rejectUnauthorized: boolean` with `ClientTlsOptions.insecure: true`. Server-certificate verification is now non-negotiable by default — the only way to opt out is the literal value `insecure: true`. There is no `false` form, so a typo cannot silently disable TLS verification. Existing callers that did not set the flag are unaffected; callers that explicitly set `rejectUnauthorized: false` must rename to `insecure: true`.
  - Document on the `servername` option that overriding the SNI/cert hostname disables strict hostname verification. Use only when SNI multiplexing requires a different name from the connection target.
  - Validate the outbound payload **before** opening any socket. `MllpClient.send()` now MLLP-encodes the message synchronously up-front; a non-`string` / non-`Uint8Array` input throws `MllpClientError(INVALID_INPUT)` without consuming a TCP handshake. Encoder errors no longer mislabel as `CONNECTION_CLOSED`.
  - Add an "Errors and PHI" section to the README explaining that `error.message`, `error.cause`, and `AckException.raw` may contain HL7v2 message content and should be redacted before logging to non-PHI-safe destinations. The package never logs these fields itself.

  **Quality**
  - `MllpClientError.code` is now narrowed to `ClientErrorCode` via `declare readonly code: ClientErrorCode` on the subclass, so consumers get exhaustive `switch` checking on `error.code` without falling back to the inherited `string` type from `MllpError`.
  - `Acknowledgment.code` widens from `string` to `AckCodeValue | (string & {})`, preserving auto-completion for the standard MSA-1 codes (`AA`, `AE`, `AR`, `CA`, `CE`, `CR`) while still accepting vendor-specific values.
  - `reader.releaseLock()` failures inside `readFirstFrame` now log a one-time `console.warn` instead of being silently swallowed, so a real stream-state regression can't go undetected. The latch is module-scoped — exactly one warning per process.

  A follow-up change to preserve vendor-specific ERR-3 codes on the thrown `AckException.errorCode` (instead of coercing them to `ApplicationInternalError`) is tracked in #610 — that touches `@glion/ack` and is scoped separately.

- 5e3d97e: Add `waitFor: "final" | "commit"` option to `MllpClient.send()` and handle HL7v2 enhanced acknowledgment mode by default.

  **Background**

  HL7v2 §2.9.2 defines two acknowledgment modes:
  - **Basic mode** — the receiver sends a single final ACK (`AA`/`AE`/`AR`).
  - **Enhanced mode** — the receiver sends `CA` (Commit Accept) immediately to confirm receipt and follows up with a separate final ACK on the same connection after processing.

  Previously `send()` resolved on the first incoming frame, which meant enhanced-mode receivers caused callers to act on the commit confirmation rather than the final result.

  **New default — `waitFor: "final"`**

  `send()` now reads frames until one carries a final MSA-1 code (`AA`, `AE`, `AR`, `CE`, `CR`). Intermediate `CA` frames are consumed silently, so enhanced-mode and basic-mode receivers both produce the same shape of result without any caller-side branching.

  **New opt-in — `waitFor: "commit"`**

  ```ts
  const commit = await client.send(message, { waitFor: "commit" });
  // commit.code === "CA"
  ```

  Resolves on the first frame regardless of code. Use this when the receiver only sends commit-level ACKs, or when the caller wants the commit confirmation without waiting for the final result. The connection closes immediately after the resolving frame, so any later final ACK is not observed.

  **Implementation**
  - `core/acknowledgment.ts` exports `isFinalAckCode(code)` and a module-private `INTERMEDIATE_ACK_CODES` set (currently just `CA`).
  - `core/internal/exchange.ts` replaces `readFirstFrame()` with `readAck(reader, waitFor)`, which loops until the resolving frame arrives. `exchange()` now returns a parsed `Acknowledgment` rather than the raw ACK string — `client.send()` no longer needs a separate `parseAck()` call.
  - `SendOptions` gains `waitFor?: "final" | "commit"`. The type is exported from every entry point alongside `signal`.

  **Tests (39 → 42)**

  Three new core tests:
  - `waitFor='final'` (default) consumes a `CA` frame and resolves on the following `AA`.
  - `waitFor='commit'` resolves on the first frame even when it is a `CA`.
  - `waitFor='final'` (default) times out when only a `CA` arrives and the peer holds the connection.

  The `core.test.ts` fake connector now accepts `Uint8Array[]` so a single test can replay multiple frames in sequence.

  Behaviour for callers that do not pass `waitFor` is unchanged in basic mode (single final ACK arrives → same shape as before). Callers that previously relied on resolving on a `CA` frame in enhanced mode must now opt in with `waitFor: "commit"`.

- 07c48c4: Add the **Cloudflare Workers** runtime adapter — `@glion/mllp-client/workers` — backed by the `cloudflare:sockets` `connect()` API. Also reshapes the `tls` option across **all** runtimes (Node, Workers, future Deno) — see "BREAKING: TLS-on by default" below.

  ```ts
  import { MllpClient } from "@glion/mllp-client/workers";

  const client = new MllpClient({ host: "127.0.0.1", port: 2575 });
  const ack = await client.send(rawHl7Message);
  ```

  Bundlers that honour the `workerd` key in `package.json` `exports` automatically pick this adapter when you import the bare `@glion/mllp-client` from a Workers target. The explicit subpath is available for monorepos that mix runtimes.

  The user-facing API (`new MllpClient({ host, port }).send(message)`, `client.stream(...)`, `MllpClientError`, `AckException`) is identical to the Node adapter — only the import path changes.

  **BREAKING: TLS-on by default**

  `MllpClientOptions.tls` is now `boolean | MllpClientTlsOptions` (was `MllpClientTlsOptions | undefined`) and defaults to `true`. HL7v2 messages commonly carry PHI, so the secure default is TLS-on; callers who genuinely want plain TCP must opt out explicitly with `tls: false`.

  ```ts
  // TLS on, defaults (system trust, hostname verification)
  new MllpClient({ host, port });

  // TLS on, explicit form
  new MllpClient({ host, port, tls: true });

  // TLS on, with config (mutual TLS, custom CA, SNI, ...)
  new MllpClient({ host, port, tls: { servername: "h" } });

  // Plain TCP — caller takes the security trade-off explicitly
  new MllpClient({ host, port, tls: false });
  ```

  Migration: any call site previously relying on the implicit "no `tls` field → plain TCP" behaviour must now pass `tls: false` to keep using plain TCP. Existing call sites that already passed a `tls` object continue to work unchanged.

  **Adapter-specific behaviour**
  - **TLS activation is core-managed.** The core normalises `tls: true` to `tls: {}` before reaching the adapter, so adapters always see `MllpClientTlsOptions | undefined`. Adapters connect via TLS iff `params.tls` is set.
  - **`tls.ca | cert | key` rejected with `INVALID_INPUT`.** Workers does not accept programmatic TLS material — use the platform's TLS configuration (Hyperdrive, Worker bindings, or the destination service's certificate chain) instead.
  - **`tls.passphrase` rejected with `INVALID_INPUT`.** Workers does not accept inline passphrases — encrypted private keys are not configurable from the runtime.
  - **`tls.insecure: true` rejected with `INVALID_INPUT`.** On Node, `insecure` keeps TLS on but disables certificate verification. Workers does not expose a way to disable verification independently, and silently dropping to plain TCP would downgrade an explicitly TLS-typed configuration to plaintext — a runtime-dependent security regression. Operators wanting to bypass verification must do so via Cloudflare's platform TLS configuration (and accept the trade-off there).
  - **Caller-supplied `AbortSignal` honoured at connect-phase.** A signal that fires while `socket.opened` is pending closes the socket. A pre-aborted signal that arrives alongside a `socket.opened` rejection routes to `TIMEOUT` (not `CONNECTION_REFUSED`) so callers can distinguish a deadline-during-handshake from a real transport failure.
  - **`socket.close()` is async but `MllpDuplexStream.close()` is sync by contract.** The adapter schedules the close and silently swallows close-time rejections — the request lifecycle has already ended at that point and a close-time error is non-actionable. This prevents the Workers runtime from logging it as an unhandled rejection.

  **Test approach**

  The adapter is verified end-to-end against a real `workerd` instance using the same pattern Hono uses for its multi-runtime testing (see `runtime-tests/workerd/` in [honojs/hono](https://github.com/honojs/hono)):
  - A small **harness Worker** (`test/workers/harness.ts`) imports `MllpClient` and exposes a single `POST /send` endpoint. The endpoint takes a JSON body describing host, port, message, and TLS options, invokes `client.send(...)`, and returns the outcome (ACK code or typed error) as JSON.
  - Node-side **vitest tests** (`test/workers/adapter.test.ts`) spawn the harness via `wrangler.unstable_dev`, send HTTP requests describing each scenario, and assert on the JSON response.
  - A Node-side **`globalSetup`** runs a TCP ack server on `127.0.0.1:47575` so the spawned worker has something real to connect to for the happy-path test.

  This deliberately replaces the earlier prototype that used `@cloudflare/vitest-pool-workers`. The pool's coverage-v8 instrumentation depends on `node:inspector/promises`, which `workerd` does not ship — a [documented limitation](https://developers.cloudflare.com/workers/testing/vitest-integration/known-issues/#module-resolution) that prevents the workers project from running under `pnpm test:coverage`. The pool also failed to boot reliably across CI runners. The Hono pattern sidesteps both problems by spawning workerd as a sibling process and exercising it through HTTP, which is the way real consumers run Workers code anyway.

  **Test cases (11)**
  - Happy-path round-trip: harness connects via `cloudflare:sockets`, writes the MLLP frame, parses the AA from the ack server, returns it over HTTP.
  - Multi-chunk read: ack server splits the AA across two writes separated by a small delay; proves the framing transport buffers across chunk boundaries under workerd's stream semantics.
  - `TIMEOUT` mapping when the server accepts but never writes; client's send-deadline tears down the socket.
  - `CONNECTION_CLOSED` mapping when the server ends the socket mid-exchange after reading the request bytes.
  - `CONNECTION_REFUSED` mapping when the TCP target has no listener (port 1).
  - Connect-phase abort: a pre-aborted caller signal routes to `TIMEOUT` (not `CONNECTION_REFUSED`) so callers can distinguish a deadline-during-handshake from a real transport failure.
  - `tls.ca`, `tls.cert`, `tls.key`, `tls.passphrase`, `tls.servername`, `tls.insecure` each rejected with `INVALID_INPUT` before any socket is opened.

  NAK paths, malformed-frame handling, and other wire-protocol edge cases are covered by the runtime-free `core.test.ts` and don't need re-running per runtime.

  `wrangler` is added as a `devDependency`. `@cloudflare/vitest-pool-workers` is **not** required.

  **`package.json` test scripts**

  Per-runtime scripts, so each runtime can be exercised independently:
  - `pnpm test` / `pnpm test:node` — Node project (core + Node adapter tests).
  - `pnpm test:bun` — runs `test/core.test.ts` under Bun's native test runner to validate the runtime-free core (Web Streams, AbortSignal, exception flow) under Bun's runtime.
  - `pnpm test:cf` — runs the workerd integration tests via `wrangler.unstable_dev`.
  - `pnpm test:coverage` — Node project with coverage. Coverage of integration tests that run inside `workerd` is not currently produced; tracked separately in the multi-runtime coverage discussion.

  **Generic CI scaffolding**

  The CI workflow gains two generic per-runtime jobs that scale to any package which opts in:
  - `testing-bun` — runs `pnpm test:bun` (which delegates via turbo). Replaces the previous package-specific `e2e-bun` job.
  - `testing-cf` — runs `pnpm test:cf`. Uses `NODE_OPTIONS=--max_old_space_size=8192` (Cloudflare's recommendation when spawning multiple workerd processes).

  `turbo.json` declares `test:bun`, `test:cf`, and `test:deno` as tasks. Adding multi-runtime tests to a new package is just a matter of defining the matching script in that package's `package.json`; CI picks it up automatically.

  `@glion/cli`'s existing Bun e2e tests get a `test:bun` script so the new generic `testing-bun` job covers them.

  `test:deno` is not yet wired on any package; PR #615 (Deno adapter) will add it to mllp-client and the corresponding `testing-deno` CI job.

- 5e3d97e: Refactor `MllpClient` for clarity and stop re-exporting `@glion/ack`.

  The internals of `MllpClient.send()` are decomposed into focused, well-documented helpers (`openConnection`, `exchange`, `writeFrame`, `readFirstFrame`, `mapSocketError`, `createDeadline`) so each phase of the connect → write → read-ACK cycle is independently readable and testable. A unified `Deadline` covers all phases of a single `send()`, replacing the previous per-phase timers — the configured `timeout` is now a single budget for the whole round trip.

  `@glion/mllp-client` no longer re-exports the `AckException` hierarchy from `@glion/ack`. The single source of truth for those exception types is `@glion/ack` itself; install it alongside `@glion/mllp-client` and `import { AckApplicationError, AckException } from "@glion/ack"` directly. This removes drift risk and matches how `@glion/mllp-ack` already exposes the same hierarchy.

  The `parse-ack.ts` source file is renamed to `acknowledgment.ts` to match the entity it owns.

### Patch Changes

- 5e3d97e: Extract MLLP wire-protocol primitives into a new package, `@glion/mllp-transport`. The new package owns the framing constants, encoder, decoder, decoder stream, base `MllpError` class, and `TransportError` subclass — everything that is independent of whether you are building a server or a client.

  `@glion/mllp` (the server framework) now depends on `@glion/mllp-transport` and re-exports the same symbols from its top-level entry, so existing consumers see no API change. New code can import transport primitives directly from `@glion/mllp-transport`.

  `@glion/mllp-client` now depends on `@glion/mllp-transport` instead of `@glion/mllp`. The client no longer pulls in the server framework just to access the wire codec.

- 5e3d97e: Replace the custom `Deadline` interface with the standard `AbortSignal.timeout(ms)` + `AbortSignal.any([...])` pattern.

  `Deadline` had three jobs: provide a typed-reason `AbortSignal`, lazily build the timeout error message, and offer `cancel()` to clear the underlying timer. All three become unnecessary once you use the platform primitives correctly:
  - **Typed reason**: `AbortSignal.timeout(ms)` aborts with the standard `DOMException(name: "TimeoutError")`. We translate it into `MllpClientError(TIMEOUT)` at the single catch site (`normaliseExchangeError`).
  - **Lazy message**: the message is built only when the catch site sees the timeout — same effect, no factory function needed.
  - **`cancel()`**: `AbortSignal.timeout()` uses an **unref'd** timer in Node and Bun (per their respective specs and runtime implementations). The timer never holds the process alive after `send()` returns. The whole `cancel()` plumbing — the outer try/finally, the `Deadline` interface, the per-send disposable — was solving a problem that doesn't exist with the standard primitive.

  The new `MllpClient.send()` body is:

  ```ts
  const sources: AbortSignal[] = [AbortSignal.timeout(this.#timeout)];
  if (options.signal) sources.push(options.signal);
  const signal = AbortSignal.any(sources);
  ```

  Three lines. Standard primitives only. No custom interface.

  `normaliseExchangeError` gains a fourth precedence rule that recognises the `DOMException(TimeoutError)` reason produced by `AbortSignal.timeout()` and translates it to a typed `MllpClientError(TIMEOUT)` with the original budget in the message.

  `internal/deadline.ts` is deleted. All 39 tests still pass without modification — including the timeout-message assertion that verifies the typed error still says `MLLP round trip exceeded Nms`.

- 5e3d97e: Apply review feedback to `MllpClient`:
  - Switch the `exchange()` socket error handler from `socket.on` to `socket.once` for symmetry with `openConnection()` and to avoid keeping a phantom listener attached after the socket settles.
  - Spell out `rejectUnauthorized: options.tls.rejectUnauthorized ?? true` so the TLS verification posture is obvious at the call site and protected against future Node default changes.
  - Replace the wide `Hl7ErrorCodeValue` / `SeverityValue` casts in `buildAckException` with explicit `coerceErrorCode` / `coerceSeverity` helpers backed by `Object.values(...)` lookup sets. Unknown receiver codes still fall back to the documented defaults; the policy is now visible.
  - Map `socket.write` callback errors to `MllpClientError(CONNECTION_CLOSED)` with a `"Failed to write MLLP frame: …"` message instead of letting them fall through `mapSocketError`'s generic "Connection error" default.
  - Simplify the `once<Args>` generic into a focused `makeRunOnce()` helper that takes the work directly, removing the inner `(finalize) => finalize()` indirection at every call site.
  - Inline the single-use `readDecodedFrames` helper so the decoder pipeline lives next to its consumer.

  Add five new transport-error test cases covering `CONNECTION_CLOSED`, `MALFORMED_ACK`, `MALFORMED_FRAME` (`maxAckSize` enforcement), cross-package `instanceof MllpError` identity, and post-success socket cleanup. Tests use a small raw-TCP-server helper so each scenario sends exactly the bytes it needs.

  Document the client's deliberate omissions (no pooling, no retry, no queueing, no streaming response, no outbound size cap) in a new "Limitations" section of the README, and note that the `Acknowledgment.tree` AST type comes from `@glion/ast`.

- 5e3d97e: Internal cleanup — remove four code smells from `@glion/mllp-client` without changing behaviour:

  **1. Test fixture duplication**

  `SAMPLE_ADT`, `VALID_AA`, `VALID_AE`, the MLLP byte constants, and the `frame()` helper were copy-pasted across `core.test.ts` and `node.test.ts`. They now live in a single `test/fixtures.ts` and are imported from there. A fixture change in one place now covers every adapter (including future runtime adapters).

  **2. Four near-identical "swallow rejection" helpers**

  `closeDuplexSafely`, `abortWriterIgnoringErrors`, `cancelReaderIgnoringErrors`, and `closeWriterIgnoringErrors` all did the same thing — `await thenable, swallow the error`. They are replaced by one shared `ignoreErrors(promise)` in `internal/ignore-errors.ts`. Two source files (`client.ts`, `exchange.ts`) reference the single helper instead of declaring local copies.

  **3. Per-adapter option-type aliases**

  `NodeMllpClientOptions` was `Omit<MllpClientOptions, "connect">`. It is replaced by `BoundMllpClientOptions` exported from the core. The adapter constructor takes `BoundMllpClientOptions` directly. The shared name reflects the actual semantic ("the adapter has bound `connect` for you") and is reusable for the Deno and Workers adapters when they land.

  This is a public-API rename: callers who imported `NodeMllpClientOptions` should switch to `BoundMllpClientOptions`. The package has not been published yet, so this is free.

  **4. Verbose `InstanceType<typeof MllpClientError>` casts in tests**

  The `InstanceType<>` indirection has been replaced with `MllpClientError` directly. No value added by the indirection.

  Behaviour is identical — type-check is clean, lint is clean, all tests pass.

- 5e3d97e: Refactor `MllpClient.send()` onto a streams-native `socket → decoder → ack-parser` pipeline. Internal-only — no public API change.

  **What changed**
  - New internal `createAckParserStream()` — a `TransformStream<DecodedMessage, Acknowledgment>` that calls `parseAck` and either enqueues the parsed ACK or `controller.error()`s with the typed `MllpClientError(MALFORMED_ACK)`.
  - The decoder now runs in **fatal** mode: its `onError` callback throws a typed `MllpClientError(MALFORMED_FRAME)`, which propagates out of `transform()` and errors the readable. (See the matching `@glion/mllp-transport` changeset that documents this contract.)
  - `MllpClient.send()` consumes parsed acknowledgments directly from `reader.read()` — no inline `parseAck()`, no `localAbort` controller, no decoder `onError` → abort indirection.
  - `core/internal/exchange.ts` is deleted. The orchestration is inlined into `client.ts` as a private `readAck(duplex, frame, params)` function plus small focused helpers (`encodeOrThrow`, `normaliseSendError`, `releaseLockSafely`).
  - `WaitFor` moves from `internal/exchange.ts` to `client.ts` so it lives next to `SendOptions`.

  **Why**

  `exchange()` had grown into a god-function juggling two abort sources, a manual `reader.read()` loop, inline `parseAck`, a side-channel `AbortController` for decoder errors, and bespoke lock cleanup. Pushing decode + parse into `pipeThrough`'d transforms collapses all of that: the pipeline does the structural work, `send()` is left with one thing — read until the resolving frame.

  **Behaviour**

  Identical. All 42 tests pass without modification, including the timeout, caller-abort, MALFORMED_ACK, MALFORMED_FRAME, CONNECTION_CLOSED, NAK exception, and `waitFor` enhanced-mode cases. Bundle size dropped slightly (23.02 → 22.45 kB minified).

- Updated dependencies [5e3d97e]
- Updated dependencies [5e3d97e]
- Updated dependencies [5e3d97e]
- Updated dependencies [07c48c4]
- Updated dependencies [5e3d97e]
- Updated dependencies [b7bdd6a]
  - @glion/ack@0.16.0
  - @glion/ast@0.16.0
  - @glion/mllp-transport@0.16.0
  - @glion/parser@0.16.0
  - @glion/util-query@0.16.0
