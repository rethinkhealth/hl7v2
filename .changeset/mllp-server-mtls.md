---
"@glion/mllp": minor
---

Breaking: `serve()` passes `tls` to `tls.createServer()` unchanged, as Node's `TlsOptions`, and sets no socket options of its own ([#907](https://github.com/rethinkhealth/glion/issues/907)).

- Mutual TLS is `requestCert: true` with `ca`. A remote system that presents no client certificate is refused during the handshake, and one with a certificate `ca` does not verify is disconnected before any message is read. Before, `tls` took only `cert`, `key`, `ca`, and `passphrase`, so Node never asked for a client certificate and `ca` verified nothing.
- `keepAlive` and `keepAliveInitialDelay` are gone, and the server no longer turns off Nagle's algorithm. Over TLS, set `keepAlive`, `keepAliveInitialDelay`, and `noDelay` in `tls`; plain TCP uses Node's defaults.

```ts
// Before
serve(app, { port: 2575, tls: { cert, key, ca }, keepAlive: true });
// After
serve(app, {
  port: 2575,
  tls: { cert, key, ca, requestCert: true, keepAlive: true },
});
```
