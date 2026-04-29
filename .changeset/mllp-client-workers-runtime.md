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

**Test approach**

The adapter is verified end-to-end against a real `workerd` instance using the same pattern Hono uses for its multi-runtime testing (see `runtime-tests/workerd/` in [honojs/hono](https://github.com/honojs/hono)):

- A small **harness Worker** (`test/workers/harness.ts`) imports `MllpClient` and exposes a single `POST /send` endpoint. The endpoint takes a JSON body describing host, port, message, and TLS options, invokes `client.send(...)`, and returns the outcome (ACK code or typed error) as JSON.
- Node-side **vitest tests** (`test/workers/adapter.test.ts`) spawn the harness via `wrangler.unstable_dev`, send HTTP requests describing each scenario, and assert on the JSON response.
- A Node-side **`globalSetup`** runs a TCP ack server on `127.0.0.1:47575` so the spawned worker has something real to connect to for the happy-path test.

This deliberately replaces the earlier prototype that used `@cloudflare/vitest-pool-workers`. The pool's coverage-v8 instrumentation depends on `node:inspector/promises`, which `workerd` does not ship — a [documented limitation](https://developers.cloudflare.com/workers/testing/vitest-integration/known-issues/#module-resolution) that prevents the workers project from running under `pnpm test:coverage`. The pool also failed to boot reliably across CI runners. The Hono pattern sidesteps both problems by spawning workerd as a sibling process and exercising it through HTTP, which is the way real consumers run Workers code anyway.

**Test cases (6)**

- Happy-path round-trip: harness connects via `cloudflare:sockets`, writes the MLLP frame, parses the AA from the ack server, returns it over HTTP.
- `CONNECTION_REFUSED` mapping when the TCP target has no listener (port 1).
- `tls.ca`, `tls.cert`, `tls.key`, `tls.passphrase` each rejected with `INVALID_INPUT` before any socket is opened.

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
