# @glion/mllp-client

MLLP client for sending HL7v2 messages and receiving acknowledgments.

## What it does

`@glion/mllp-client` exports an `MllpClient` class that sends HL7v2 messages over MLLP/TCP and returns the parsed acknowledgment. Each client owns a single long-lived TCP/TLS connection: the first `send()` (or an explicit `connect()`) opens the socket, every subsequent send reuses it, and the caller releases it explicitly with `close()` or `Symbol.asyncDispose`. NAK responses (MSA-1 ∈ {AE, AR, CE, CR}) are thrown as the matching `AckException` subclass from `@glion/ack`, so callers catch the same exception types that `@glion/mllp-ack` produces on the receiver side. Each thrown exception carries the original raw ACK on its `raw` attribute, so callers can re-parse, log, or persist the wire payload without intercepting the response separately. Transport-level failures (connection refused, timeout, malformed frame) are thrown as `MllpClientError`, a subclass of `MllpError` from `@glion/mllp-transport`.

## Install

```bash
npm install @glion/mllp-client @glion/ack
```

`@glion/ack` is required because `client.send()` throws its `AckException` subclasses on NAK responses; install it alongside the client so application code can `import { AckApplicationError } from "@glion/ack"` directly.

## Runtime support

`@glion/mllp-client` runs on every JavaScript runtime that can open a raw TCP socket. Pick the import path that matches your runtime — the client API is identical in every case.

| Runtime                | Import path                  | Connector                          | Status                  |
| ---------------------- | ---------------------------- | ---------------------------------- | ----------------------- |
| **Node.js**            | `@glion/mllp-client/node`    | `node:net` / `node:tls`            | shipped                 |
| **Bun**                | `@glion/mllp-client/node`    | `node:net` / `node:tls` (compat)   | core verified[^2]       |
| **Deno**               | —                            | `Deno.connect` / `Deno.connectTls` | in progress (PR [#615]) |
| **Cloudflare Workers** | `@glion/mllp-client/workers` | `cloudflare:sockets`               | shipped                 |

[^2]: The runtime-free core (`@glion/mllp-client/core`) is exercised under Bun in CI via `pnpm test:bun`. The Node adapter is not currently part of the Bun test matrix; Bun's `node:net`/`node:tls` compatibility means it works in practice, but regressions are caught by Node CI rather than Bun CI.

Always import from the runtime-specific subpath (`@glion/mllp-client/workers`, `@glion/mllp-client/node`). Some bundlers honour the `workerd` key in this package's `exports` map and will resolve the bare specifier `@glion/mllp-client` to the Workers entry on a Workers target — but bundler support for `exports` conditions varies, so the subpath is the only path the package guarantees.

> **Heads-up.** The Deno adapter is being reviewed in a separate pull request and is not yet part of a release. The runtime-agnostic core is stable; you can wire your own `MllpConnect` against any transport (or a custom test harness) by importing from `@glion/mllp-client/core` until that adapter lands.

[#615]: https://github.com/rethinkhealth/glion/pull/615

**Browsers cannot run this client directly** — they have no API for raw TCP sockets.

## Use

```ts
import { MllpClient } from "@glion/mllp-client";

// TLS-on by default — see "Plain TCP" below for opt-out
const client = new MllpClient({ host: "mllp.example.com", port: 6661 });

try {
  const ack = await client.send(
    [
      "MSH|^~\\&|SendApp|SendFac|RecvApp|RecvFac|20240101120000||ADT^A01^ADT_A01|MSG001|P|2.5.1",
      "EVN|A01|20240101120000",
      "PID|1||12345^^^MRN||Doe^John",
    ].join("\r")
  );
  console.log(ack.code); // "AA"
  console.log(ack.controlId); // "MSG001"
} finally {
  await client.close();
}
```

The client owns a TCP/TLS socket from the first `send()` until you call `close()`. For scope-bounded clients, `await using` makes the release automatic:

```ts
await using client = new MllpClient({ host: "mllp.example.com", port: 6661 });
const ack = await client.send(message);
// client closes automatically at scope exit.
```

Catch a NAK from the receiver as a typed exception. The original raw ACK is available on `error.raw`:

```ts
import { AckApplicationError, AckApplicationReject } from "@glion/ack";
import { MllpClient, MllpClientError } from "@glion/mllp-client";

const client = new MllpClient({ host: "127.0.0.1", port: 2575 });

try {
  await client.send(rawMessage);
} catch (error) {
  if (error instanceof AckApplicationError) {
    // MSA-1 = AE — receiver returned an application-level error.
    // error.message holds MSA-3; error.errorCode holds ERR-3; error.severity holds ERR-4.
    // error.raw holds the wire-format ACK message.
  } else if (error instanceof AckApplicationReject) {
    // MSA-1 = AR — receiver rejected the message.
  } else if (error instanceof MllpClientError) {
    // Transport-level failure: error.code is one of CONNECTION_REFUSED,
    // TIMEOUT, CONNECTION_CLOSED, MALFORMED_FRAME, or MALFORMED_ACK.
  }
}
```

Send over plain TCP — opt out of the secure default. Use only when the wire is already protected (trusted hospital intranet, VPN tunnel, or a TLS terminator hop in front of the receiver):

```ts
const client = new MllpClient({
  host: "127.0.0.1",
  port: 2575,
  tls: false,
});

const ack = await client.send(rawMessage);
```

Send over TLS with explicit configuration (mutual TLS, custom CA, etc.):

```ts
import { readFileSync } from "node:fs";

const client = new MllpClient({
  host: "mllp.example.com",
  port: 6661,
  tls: {
    ca: readFileSync("ca.pem"),
    cert: readFileSync("client-cert.pem"),
    key: readFileSync("client-key.pem"),
  },
});

const ack = await client.send(rawMessage);
```

The same code on **Cloudflare Workers**:

```ts
import { MllpClient } from "@glion/mllp-client/workers";

const client = new MllpClient({ host: "127.0.0.1", port: 2575 });
const ack = await client.send(rawMessage);
```

The Workers runtime cannot honour programmatic TLS material. Passing any of `tls.ca`, `tls.cert`, `tls.key`, `tls.passphrase`, `tls.servername`, or `tls.insecure: true` to the Workers adapter throws `MllpClientError` with `code: "INVALID_INPUT"` **before any socket is opened**. Configure TLS material via the Cloudflare platform — Hyperdrive, Worker bindings, or terminate TLS upstream of the receiver. The error path:

```ts
import { MllpClient, MllpClientError } from "@glion/mllp-client/workers";

try {
  const client = new MllpClient({
    host: "mllp.example.com",
    port: 6661,
    tls: { ca: caPem }, // rejected on Workers
  });
  await client.send(rawMessage);
} catch (error) {
  if (error instanceof MllpClientError && error.code === "INVALID_INPUT") {
    // error.message names the rejected fields and points at the docs.
  }
}
```

## Options

`MllpClientOptions`:

| Option       | Type                              | Default | Description                                                                                                                                                                                                |
| ------------ | --------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `host`       | `string`                          | —       | Hostname or IP of the MLLP server.                                                                                                                                                                         |
| `port`       | `number`                          | —       | TCP port of the MLLP server.                                                                                                                                                                               |
| `timeout`    | `number`                          | `30000` | Per-send deadline in milliseconds. Bounds write-plus-ACK time; connect cost is amortised across sends once the socket is open.                                                                             |
| `maxAckSize` | `number`                          | —       | Maximum bytes accepted for an inbound ACK frame. No limit when omitted.                                                                                                                                    |
| `tls`        | `boolean \| MllpClientTlsOptions` | `true`  | TLS configuration. Defaults to `true` (TLS-on, system trust store, hostname verification). Pass an options object for custom config, or `false` to opt out into plain TCP.                                 |
| `queueLimit` | `number`                          | `1000`  | Maximum sends that may queue waiting for the connection to become ready (during connect, or while a dropped socket is being lazily re-opened by the next send). Overflow rejects with `CONNECTION_CLOSED`. |

`MllpClientTlsOptions`:

| Option       | Type               | Description                                                                                                                                                                 |
| ------------ | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ca`         | `string \| Buffer` | Trusted CA certificate(s) for verifying the server.                                                                                                                         |
| `cert`       | `string \| Buffer` | Client certificate for mutual TLS.                                                                                                                                          |
| `key`        | `string \| Buffer` | Client private key for mutual TLS.                                                                                                                                          |
| `passphrase` | `string`           | Passphrase for the private key.                                                                                                                                             |
| `servername` | `string`           | Server name for SNI and certificate verification. Defaults to `host`. Setting this to anything other than the real hostname disables strict hostname verification.          |
| `insecure`   | `true`             | **Test/dev only.** Disable server-certificate verification. Only the literal value `true` opts out — there is no `false` form because the secure default is non-negotiable. |

## API

### `new MllpClient(options)`

Construct a client bound to a host/port. The constructor does not open a connection — the first `send()` (or an explicit `connect()`) opens it lazily.

```ts
import { MllpClient } from "@glion/mllp-client";

const client = new MllpClient({ host: "127.0.0.1", port: 2575 });
client.host; // "127.0.0.1"
client.port; // 2575
client.state; // "idle"
```

`MllpClient` extends Node's `EventEmitter`:

| Event       | Fires when                                                      |
| ----------- | --------------------------------------------------------------- |
| `"connect"` | The underlying socket has just become ready to send.            |
| `"end"`     | `close()` has finished tearing down — the client cannot reopen. |

### `client.connect()`

Open the underlying socket. Idempotent — repeated calls share the same in-flight Promise. The first `send()` calls `connect()` implicitly, so explicit `connect()` is only needed when callers want the open phase to happen up-front (eager health check) rather than amortised into the first send.

Rejects with `MllpClientError` for any transport failure (`CONNECTION_REFUSED`, `TIMEOUT`, `TLS_HANDSHAKE_FAILED`, `CONNECTION_CLOSED`). After a failed first-connect the client returns to the Idle state and may be retried on the same instance.

```ts
await client.connect();
```

### `client.send(message, options?)`

Send a single HL7v2 message and resolve with the resolving accept ACK. Returns a `Promise<Acknowledgment>`. Accepts a `string` or `Uint8Array` payload. Writes the MLLP-framed bytes to the persistent socket, reads acknowledgment frames according to `options.mode`, and releases the connection slot for the next send when the resolving frame arrives.

On NAK (MSA-1 ∈ {AE, AR, CE, CR}) throws the matching `AckException` subclass with the original wire-format ACK on `error.raw`.

To observe each accept ACK as it arrives (e.g. seeing the intermediate `CA` frame in HL7v2 enhanced mode), use [`client.stream()`](#clientstreammessage-options) instead.

```ts
const ack = await client.send(rawHl7Message);
```

`options` is optional:

| Field    | Type                            | Default           | Description                                                                                                    |
| -------- | ------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------- |
| `signal` | `AbortSignal`                   | —                 | Cancel the in-flight send. Composed with the client's `timeout` via `AbortSignal.any` so either source aborts. |
| `mode`   | `"OnApplication" \| "OnCommit"` | `"OnApplication"` | Which HL7v2 acknowledgment level resolves the send. See [Acknowledgment modes](#acknowledgment-modes).         |

### `client.stream(message, options?)`

Send a single HL7v2 message and yield each accept ACK as it arrives. Returns an `AsyncIterable<Acknowledgment>`. Accepts the same `message` and `options` as `client.send()`.

The iterable completes after the resolving accept frame: in HL7v2 enhanced mode it yields `CA` then the application-level ACK; in basic mode it yields a single application-level ACK. NAK codes (`AE`/`AR`/`CE`/`CR`) throw the matching `AckException` from the iterator, exactly as they would from `await client.send(...)`. Breaking out of the loop releases the connection slot for the next send (any trailing frames the receiver still has for this send are drained in the background).

```ts
for await (const ack of client.stream(rawHl7Message)) {
  log.info({ code: ack.code }, "ack received");
}
```

### `Acknowledgment`

The HL7v2 acknowledgment returned by `client.send()`.

| Field         | Type                  | Description                                                           |
| ------------- | --------------------- | --------------------------------------------------------------------- |
| `raw`         | `string`              | The raw HL7v2 ACK message as received from the wire.                  |
| `tree`        | `Root`                | The ACK message AST.                                                  |
| `code`        | `string`              | MSA-1 acknowledgment code (`AA`, `AE`, `AR`, `CA`, `CE`, or `CR`).    |
| `controlId`   | `string`              | MSA-2 message control ID — references the original message's MSH-10.  |
| `textMessage` | `string \| undefined` | MSA-3 text message. Present on NAK; optional on ACK.                  |
| `errorCode`   | `string \| undefined` | ERR-3 HL7 error condition code (Table 0357). Present when ERR is set. |
| `severity`    | `string \| undefined` | ERR-4 severity (Table 0516). Present when ERR is set.                 |

### `MllpClientError`

A subclass of `MllpError` from `@glion/mllp-transport`, thrown for transport-level failures. The `code` property identifies the failure mode:

| `code`                 | Meaning                                                                                       |
| ---------------------- | --------------------------------------------------------------------------------------------- |
| `INVALID_INPUT`        | A constructor option or send payload was rejected before any socket was opened.               |
| `CONNECTION_REFUSED`   | The TCP connection could not be established (refused, DNS, routing).                          |
| `TLS_HANDSHAKE_FAILED` | TLS handshake failed (certificate, protocol, or trust-store mismatch). Node adapter only.[^1] |
| `CONNECTION_CLOSED`    | The peer closed the connection before a complete ACK arrived.                                 |
| `TIMEOUT`              | No ACK arrived within `timeout`.                                                              |
| `MALFORMED_FRAME`      | Bytes received did not form a valid MLLP frame.                                               |
| `MALFORMED_ACK`        | The ACK frame was received but could not be parsed as HL7v2.                                  |

[^1]: The Workers adapter cannot distinguish a TLS handshake failure from a TCP connect failure; both surface as `CONNECTION_REFUSED`. Cross-runtime callers switching on `error.code` should treat `CONNECTION_REFUSED` as the supertype.

### Application-level NAK exceptions

`MllpClient.send()` throws the same `AckException` subclasses that `@glion/mllp-ack` produces on the receiver side: `AckApplicationError` (AE), `AckApplicationReject` (AR), `AckCommitError` (CE), `AckCommitReject` (CR), and the abstract base `AckException`. They are not re-exported from this package — install `@glion/ack` and import them directly:

```ts
import { AckApplicationError, AckException } from "@glion/ack";
```

Keeping a single import path keeps `@glion/ack` as the authoritative source for the exception hierarchy across both client and server code paths.

## Behavior

### NAK to exception mapping

| MSA-1 | Thrown class           | Source fields                                                                |
| ----- | ---------------------- | ---------------------------------------------------------------------------- |
| `AA`  | — (resolves)           | —                                                                            |
| `CA`  | — (resolves)           | —                                                                            |
| `AE`  | `AckApplicationError`  | `message` ← MSA-3, `errorCode` ← ERR-3, `severity` ← ERR-4, `raw` ← wire ACK |
| `AR`  | `AckApplicationReject` | same                                                                         |
| `CE`  | `AckCommitError`       | same                                                                         |
| `CR`  | `AckCommitReject`      | same                                                                         |

Every thrown `AckException` carries the original raw ACK message on its `raw` attribute. When MSA-3 is empty, the thrown error's `message` defaults to `Acknowledgment <code> from receiver`. When ERR-3 is missing, `errorCode` defaults to `Hl7ErrorCode.ApplicationInternalError` (`207`). When ERR-4 is missing, `severity` defaults to `Severity.Error` (`E`).

### Acknowledgment modes

HL7v2 §2.9.2 defines two acknowledgment levels — the same wire protocol carries both. Each `send()` picks which one to wait for via the `mode` option:

- `mode: "OnApplication"` (default) — return when the application-level ACK arrives (`AA`/`AE`/`AR`). Intermediate `CA` (Commit Accept) frames sent by enhanced-mode receivers are surfaced via iteration but do not resolve the send. Use this when you need to know that the receiver successfully processed the message.
- `mode: "OnCommit"` — return on the first frame regardless of code, typically a commit-level ACK (`CA`). The send resolves as soon as the receiver confirms receipt; the client continues to consume any trailing application-level ACK in the background so the connection stays usable for the next send. Use this for receivers that only send commit-level ACKs (basic mode) or when the commit confirmation is what you need.

```ts
// Default — wait for application-level processing to complete.
const ack = await client.send(message); // resolves with AA, throws AckException on AE/AR

// Resolve as soon as the receiver acknowledges receipt.
const commit = await client.send(message, { mode: "OnCommit" }); // resolves with CA
```

### Streaming acknowledgments

`client.send()` resolves with the resolving accept ACK — the simple "give me the answer" path. `client.stream()` is the sibling method for real-time observation: it yields each accept ACK as it arrives and completes after the resolving frame. The intermediate `CA` is visible before the application-level frame in enhanced mode.

```ts
for await (const ack of client.stream(message)) {
  log.info({ code: ack.code }, "ack received");
  // stream completes itself after the resolving frame
}
```

NAK codes (`AE`/`AR`/`CE`/`CR`) throw the matching `AckException` from both `send()` and `stream()` — same exception, same `error.raw`. Streams that want to inspect a NAK can wrap the loop in `try/catch`.

`send()` and `stream()` share the same underlying connection. Concurrent calls serialise on the wire (one frame at a time); breaking out of `stream()` releases the slot for the next send.

### `client.close(options?)`

Tear the connection down. Returns a `Promise<void>` that resolves once teardown completes. Idempotent — concurrent callers share the same teardown Promise.

| Field   | Type      | Default | Description                                                                                                                                                                          |
| ------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `force` | `boolean` | `false` | Graceful by default — waits for the in-flight send to finish and rejects any sends still waiting for Ready. `true` rejects everything pending and tears the socket down immediately. |

After `close()` resolves the client is in the End state and cannot be reopened — construct a new instance. Failing to call `close()` (or use `await using`) keeps the socket open until the process exits.

```ts
await client.close(); // graceful — drains the in-flight send
await client.close({ force: true }); // immediate — rejects pending with CONNECTION_CLOSED
```

`MllpClient` implements `Symbol.asyncDispose`, so `await using` releases the socket at scope exit:

```ts
{
  await using client = new MllpClient({ host, port });
  await client.send(message);
} // close() runs here, automatically.
```

### `client.state`

Read-only getter returning one of: `"idle"`, `"connecting"`, `"ready"`, `"closing"`, `"end"`. Useful for diagnostics and metrics; not load-bearing for correctness.

### Connection lifecycle

`MllpClient` owns one TCP/TLS connection that opens lazily on the first send and is reused across all subsequent sends. Lifecycle states are observable via `client.state` and the `"connect"` / `"end"` events:

```
   idle ──connect()/send()──▶ connecting ──ok──▶ ready ──close()──▶ closing ──▶ end
                                  │                 │
                                  └─ fail ──┐       │
                                            ▼       ▼
                                          idle   idle  (peer drop: lazy reconnect on next send)
```

**Drops are lazy.** When the peer closes the socket, the in-flight send rejects with `CONNECTION_CLOSED`, the state returns to `Idle`, and the next `send()` opens a fresh connection. MLLP sends are not idempotent — the receiver may have processed a message before the ACK was lost — so the client does not silently replay; the caller decides whether to retry.

**Connect failures are loud.** A failed first `connect()` (explicit or via implicit-open) throws and returns the state to `Idle` so the caller can retry on the same instance.

### Concurrency

Concurrent `send()` calls on a single client serialise on the wire (lock-step — one send is in flight at a time). The client is safe to share across producers. Sends issued while the connection is opening queue in the offline queue (`queueLimit`, default 1000) and drain in FIFO order once the connection is ready. Pools of multiple connections are out of scope for this package; layer them above as needed.

## Limitations

Things `@glion/mllp-client` deliberately does **not** do — call them out explicitly so callers can decide whether the client fits their integration:

- **No connection pool.** One socket per client. High-throughput pipelines that need parallel writes can spin up multiple `MllpClient` instances (each owning its own connection) or layer their own pool above `send()`.
- **No auto-reconnect with backoff.** Drops return the client to Idle and the next `send()` re-opens. There is no proactive reconnect timer — failures during prolonged peer outages surface to the caller, who can retry on their own schedule.
- **No pipelining.** Sends are lock-step (write frame → consume ACKs → release the slot). Throughput is bounded by round-trip latency, not bandwidth.
- **No retry or backoff inside `send()`.** A failed send rejects once. Retry policy is the caller's responsibility — semantics vary too much across HL7v2 deployments to bake one in.
- **No outbound message-size limit.** The encoder will frame whatever you pass in. Use `maxAckSize` to cap inbound frames; cap outbound size in your application code if that matters.

## Errors and PHI

Thrown errors carry the full diagnostic context so callers can debug without reaching for additional state. **That context can include HL7v2 message content**:

- `AckException.raw` (from `@glion/ack`) holds the full wire-format ACK that triggered the exception. ACKs typically do not contain protected health information (PHI), but a NAK whose MSA-3 echoes input data can.
- `error.message` on a NAK exception is MSA-3 verbatim, which a misbehaving receiver may populate with patient identifiers, dates of birth, or free-text notes.
- `error.cause` on `MllpClientError(MALFORMED_ACK)` chains the underlying parser error, whose message may include a slice of the unparseable input.

If you log thrown errors to a destination that is not approved for PHI (general-purpose log aggregators, third-party error trackers, terminals shared with non-clinical staff), redact `error.raw`, `error.message`, and `error.cause` first. The package never logs these fields itself — propagation is entirely the caller's choice.

## Part of Glion

`@glion/mllp-client` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
