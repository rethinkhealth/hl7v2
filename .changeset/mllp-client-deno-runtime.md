---
"@glion/mllp-client": minor
---

Add the **Deno** runtime adapter — `@glion/mllp-client/deno` — backed by `Deno.connect` and `Deno.connectTls`.

```ts
import { MllpClient } from "@glion/mllp-client/deno";

const client = new MllpClient({ host: "127.0.0.1", port: 2575 });
const ack = await client.send(rawHl7Message);
```

Bundlers that honour the `deno` key in `package.json` `exports` automatically pick this adapter when you import the bare `@glion/mllp-client` from a Deno target. The explicit subpath is available for monorepos that mix runtimes.

The user-facing API (`new MllpClient({ host, port }).send(message)`, `client.stream(...)`, `MllpClientError`, `AckException`) is identical to the Node adapter — only the import path changes.

**Adapter-specific behaviour**

- **TLS material accepted as `string` or `Uint8Array`.** A non-string CA/cert/key is decoded to a PEM string before being handed to `Deno.connectTls` (which expects `string` / `string[]`).
- **`tls.passphrase` rejected with `INVALID_INPUT`.** Deno's `connectTls` does not accept inline passphrases — decrypt the private key before passing it to the client.
- **`tls.insecure: true` rejected with `INVALID_INPUT`.** Deno has no runtime flag to disable certificate verification; for self-signed local-dev scenarios, run Deno with `--unsafely-ignore-certificate-errors=<host>` instead.
- **Permission failures route to `INVALID_INPUT`.** `Deno.errors.PermissionDenied` and `NotCapable` are mapped to `MllpClientError(INVALID_INPUT)` with a message naming the host:port the operator must add to `--allow-net=…`. (Previously these would have been miscategorised as `CONNECTION_REFUSED`.)
- **Caller-supplied `AbortSignal` honoured at connect-phase.** Pre-aborted signals short-circuit before `Deno.connect` runs (no socket allocated). A signal that fires during the open is mapped to `TIMEOUT` with the abort reason chained as `cause`.

**Tests**

`test/deno.test.ts` monkey-patches `globalThis.Deno` so the adapter's wiring is exercised in plain Node vitest. Coverage:

- TCP / TLS connect with parameter forwarding and PEM coercion.
- `tls.insecure: true` rejection.
- `tls.passphrase` rejection.
- `PermissionDenied` mapping with `--allow-net=…` hint.
- `Deno.connect` failure → `CONNECTION_REFUSED`.
- `conn.close()` runs after a successful exchange.
- Pre-aborted `AbortSignal` short-circuits before the runtime allocates a socket.

For end-to-end verification inside the actual Deno runtime, write a `*.deno.test.ts` file that runs via `deno test` against a real server. The MLLP exchange logic itself is already covered by the runtime-free `test/core.test.ts`.
