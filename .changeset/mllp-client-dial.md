---
"@glion/mllp-client": minor
---

Breaking: the runtime adapters take a function that opens the connection, and pass the runtime's own options through unchanged ([#814](https://github.com/rethinkhealth/glion/issues/814)).

- `nodeSocket(dial, { gracefulCloseMs })` calls `dial` for a fresh `net.Socket` or `tls.TLSSocket` on every connect, so every `net.connect()` and `tls.connect()` option applies, `minVersion`, `ciphers`, and `checkServerIdentity` among them. `host`, `port`, `tls`, and `keepAliveIdleMs` are gone, with `NodeTlsOptions` and `DEFAULT_KEEPALIVE_IDLE_MS`.
- The adapter no longer sets `TCP_NODELAY` or keepalive, nor sends `host` as the TLS server name. Call `setNoDelay(true)` and `setKeepAlive(true, 30_000)` on the socket `dial` returns, and pass `servername`, to keep them.
- `workersSocket(dial)` calls `dial` for a fresh socket from `connect()` in `cloudflare:sockets`, or from a binding's `connect()`. `WorkersSocketOptions` is gone.
- `dial` receives the attempt's signal, and may return a promise of the socket. Both adapters throw `MllpInvalidOptionError` when `dial` is not a function, so a call in the old shape (`nodeSocket({ host, port })`) fails at once.

```ts
// Before
nodeSocket({ host: "hl7.example.org", port: 2575, tls: { ca } });
// After
nodeSocket(() =>
  tls
    .connect({
      host: "hl7.example.org",
      port: 2575,
      ca,
      servername: "hl7.example.org",
    })
    .setNoDelay(true)
    .setKeepAlive(true, 30_000)
);
```
