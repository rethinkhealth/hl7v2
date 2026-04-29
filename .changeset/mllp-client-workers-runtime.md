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

`test/workers.test.ts` mocks `cloudflare:sockets` via `vi.mock()` so the adapter's wiring is exercised in plain Node vitest. Coverage:

- TCP / TLS connect with parameter forwarding (`hostname`/`port`, `secureTransport: "on" | "off"`).
- `tls.ca | cert | key` rejection.
- `tls.passphrase` rejection.
- `socket.opened` failure → `CONNECTION_REFUSED`.
- `socket.close()` runs after a successful exchange.
- Connect failure under an aborted signal maps to `TIMEOUT` (not `CONNECTION_REFUSED`).

For end-to-end verification inside the actual Workers runtime, `@cloudflare/vitest-pool-workers` is the standard tool, but it is heavyweight and only meaningful when you're testing Workers-specific platform behaviour. The MLLP exchange logic itself is already covered by the runtime-free `test/core.test.ts`.
