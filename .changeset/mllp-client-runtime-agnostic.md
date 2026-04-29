---
"@glion/mllp-client": minor
---

Make `@glion/mllp-client` runtime-agnostic. The package now ships two entry points — a runtime-free core and a Node adapter:

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
