---
"@glion/mllp": minor
---

Breaking: `serve()` takes Node's own listener options and passes them through unchanged, over exported socket defaults ([#907](https://github.com/rethinkhealth/glion/issues/907)).

- `tls` is Node's `TlsOptions`, passed to `tls.createServer()`. Mutual TLS is `requestCert: true` with `ca`: a remote system that presents no client certificate is refused during the handshake, and one with a certificate `ca` does not verify is disconnected before any message is read. Before, `tls` took only `cert`, `key`, `ca`, and `passphrase`, so Node never asked for a client certificate and `ca` verified nothing.
- On plain TCP, Node's `net.createServer()` options sit beside `serve()`'s own, so `keepAlive` and `keepAliveInitialDelay` are still accepted there, and `noDelay` can now be turned off. Over TLS they go inside `tls`; beside it they do not compile.
- `DEFAULT_SOCKET_OPTIONS` (`keepAlive: true`, `keepAliveInitialDelay: 60_000`, `noDelay: true`) is exported from `@glion/mllp/node`. These are the values the server used before; each one is replaced by name.

```ts
// Before
serve(app, { port: 2575, tls: { cert, key, ca }, keepAlive: true });
// After
serve(app, {
  port: 2575,
  tls: { cert, key, ca, requestCert: true, keepAlive: true },
});
```
