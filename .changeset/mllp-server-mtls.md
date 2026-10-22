---
"@glion/mllp": minor
---

Breaking: `serve()` takes the listener as `server`, a `net.Server` or `tls.Server` created with Node's options, and no longer creates or configures one from its own options ([#907](https://github.com/rethinkhealth/glion/issues/907)).

- Without `server`, `serve()` creates `net.createServer()`. It listens on the server it is given, and `close()` closes it. The server must not be listening yet, and must have no connection listener of its own.
- On a `tls.Server`, each connection reaches the app once its TLS handshake completes. `secure` on a connection is `true` when the socket is a `tls.TLSSocket`.
- `tls`, `keepAlive`, and `keepAliveInitialDelay` are gone. The server no longer turns on keep-alive or turns off Nagle's algorithm on its own; pass `keepAlive`, `keepAliveInitialDelay`, and `noDelay` to `net.createServer()` or `tls.createServer()`.
- Mutual TLS is a `tls.Server` with `requestCert: true` and `ca`. A remote system that presents no client certificate is refused during the handshake, and one with a certificate `ca` does not verify is disconnected before any message is read. Before, `tls` took only `cert`, `key`, `ca`, and `passphrase`, so Node never asked for a client certificate and `ca` verified nothing.

```ts
// Before
serve(app, { port: 2575, tls: { cert, key, ca }, keepAlive: true });
// After
import { createServer } from "node:tls";
serve(app, {
  port: 2575,
  server: createServer({
    cert,
    key,
    ca,
    requestCert: true,
    keepAlive: true,
    keepAliveInitialDelay: 60_000,
    noDelay: true,
  }),
});
```
