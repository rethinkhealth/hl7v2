---
"@glion/mllp-client": minor
---

Add the **Cloudflare Workers** runtime adapter — `@glion/mllp-client/workers` — backed by the `cloudflare:sockets` `connect()` API.

```ts
import { MllpClient } from "@glion/mllp-client/workers";

const client = new MllpClient({ host: "127.0.0.1", port: 2575 });
const ack = await client.send(rawHl7Message);
```

Bundlers that honour the `workerd` key in `package.json` `exports` automatically pick this adapter when you import the bare `@glion/mllp-client` from a Workers target. The explicit subpath is available for monorepos that mix runtimes.

The user-facing API (`new MllpClient({ host, port }).send(message)`, `client.stream(...)`, `MllpClientError`, `AckException`) is identical to the Node adapter — only the import path changes.

**Adapter-specific behaviour**

- **TLS is opt-in via `tls`.** When `tls` is set, the adapter requests `secureTransport: "on"`. When `tls.insecure: true`, it requests `secureTransport: "off"` so the connection runs as plain TCP and the caller takes the security trade-off explicitly.
- **`tls.ca | cert | key` rejected with `INVALID_INPUT`.** Workers does not accept programmatic TLS material — use the platform's TLS configuration (Hyperdrive, Worker bindings, or the destination service's certificate chain) instead.
- **`tls.passphrase` rejected with `INVALID_INPUT`.** Workers does not accept inline passphrases — encrypted private keys are not configurable from the runtime.
- **Caller-supplied `AbortSignal` honoured at connect-phase.** A signal that fires while `socket.opened` is pending closes the socket. A pre-aborted signal that arrives alongside a `socket.opened` rejection routes to `TIMEOUT` (not `CONNECTION_REFUSED`) so callers can distinguish a deadline-during-handshake from a real transport failure.
- **`socket.close()` is async but `MllpDuplexStream.close()` is sync by contract.** The adapter schedules the close and silently swallows close-time rejections — the request lifecycle has already ended at that point and a close-time error is non-actionable. This prevents the Workers runtime from logging it as an unhandled rejection.

**Tests**

The Workers adapter is tested **inside a real `workerd` runtime** via `@cloudflare/vitest-pool-workers`. The package's `vitest.config.ts` defines two projects:

- `hl7v2-mllp-client (node)` — runs the existing `core.test.ts` and `node.test.ts` in plain Node.
- `hl7v2-mllp-client (workers)` — runs `test/workers/adapter.test.ts` inside `workerd` against the actual `cloudflare:sockets` API. A Node-side `globalSetup` spins up a TCP "ack server" on `127.0.0.1:47575` for the worker to connect to.

Coverage of the runtime-validated tests:

- Happy-path round-trip: client successfully connects via `cloudflare:sockets`, writes the MLLP frame, and parses the AA from the ack server.
- `CONNECTION_REFUSED`: connecting to a closed loopback port routes through the typed error mapping.
- `tls.ca | cert | key` rejected with `INVALID_INPUT` (no socket required).
- `tls.passphrase` rejected with `INVALID_INPUT` (no socket required).

This replaces the previous `vi.mock("cloudflare:sockets")` approach. Wiring assertions ("we passed `secureTransport: 'on'` to `connect()`") are inherently mock-based and don't translate to runtime tests; the happy-path test proves the basic plain-TCP wiring works end-to-end. NAK paths, malformed-frame handling, and other wire-protocol edge cases are already covered by the runtime-free `core.test.ts` and don't need re-running per runtime.

`@cloudflare/vitest-pool-workers` is added as a `devDependency`. The pool boots `workerd` from `test/workers/wrangler.toml` and runs the worker tests in isolation from the Node tests.

**`package.json` test scripts**

The split into Node vs Workers projects gets matching scripts, so each runtime can be exercised independently:

- `pnpm test:node` — runs only `hl7v2-mllp-client (node)` (the Node adapter + runtime-free core tests).
- `pnpm test:cf` — runs only `hl7v2-mllp-client (workers)` (the workerd-based tests).
- `pnpm test` — unchanged, runs both projects via plain `vitest run`.

`test:deno` and `test:bun` are intentionally not added on this PR. The Deno adapter PR (#615) will add `test:deno` once it converts its mocked tests to run inside actual Deno; Bun support is currently exercised via `test:node` because the Node adapter is what Bun uses, but a dedicated `test:bun` can be added once Bun is part of the standard tooling.
