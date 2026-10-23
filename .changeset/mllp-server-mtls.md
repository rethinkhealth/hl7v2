---
"@glion/mllp": minor
---

Breaking: `serve()` passes `tls` to `tls.createServer()` unchanged, as Node's `TlsOptions` ([#907](https://github.com/rethinkhealth/glion/issues/907)).

- Mutual TLS is `requestCert: true` with `ca`. A remote system that presents no client certificate is refused during the handshake, and one with a certificate `ca` does not verify is disconnected before any message is read. Before, `tls` took only `cert`, `key`, `ca`, and `passphrase`, so Node never asked for a client certificate and `ca` verified nothing.
- `keepAlive` and `keepAliveInitialDelay` are no longer options. Every connection has keep-alive, with the first probe after 60 s idle, and Nagle's algorithm off, as before. Over TLS, a socket option set in `tls` replaces the server's.

```ts
// Before
serve(app, { port: 2575, tls: { cert, key, ca }, keepAlive: true });
// After
serve(app, { port: 2575, tls: { cert, key, ca, requestCert: true } });
```
