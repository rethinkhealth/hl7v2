---
"@glion/mllp": minor
---

Breaking: `serve()` takes `createServer` and `serverOptions`, as `@hono/node-server` does, and calls one with the other unchanged ([#907](https://github.com/rethinkhealth/glion/issues/907)).

- `createServer` creates the listener: `net.createServer` by default, `tls.createServer` for TLS. `serverOptions` are Node's options for it, typed by the one you pass.
- `tls`, `keepAlive`, and `keepAliveInitialDelay` are gone. The server no longer turns on keep-alive or turns off Nagle's algorithm on its own; pass `keepAlive`, `keepAliveInitialDelay`, and `noDelay` in `serverOptions`.
- Mutual TLS is `tls.createServer` with `requestCert: true` and `ca`. A remote system that presents no client certificate is refused during the handshake, and one with a certificate `ca` does not verify is disconnected before any message is read. Before, `tls` took only `cert`, `key`, `ca`, and `passphrase`, so Node never asked for a client certificate and `ca` verified nothing.
- `secure` on a connection is `true` when the accepted socket is a `tls.TLSSocket`.

```ts
// Before
serve(app, { port: 2575, tls: { cert, key, ca }, keepAlive: true });
// After
import { createServer } from "node:tls";
serve(app, {
  createServer,
  port: 2575,
  serverOptions: {
    cert,
    key,
    ca,
    requestCert: true,
    keepAlive: true,
    keepAliveInitialDelay: 60_000,
    noDelay: true,
  },
});
```
