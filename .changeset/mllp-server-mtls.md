---
"@glion/mllp": minor
---

`serve()` takes Node's `tls.createServer()` options as `tls` and passes them unchanged ([#907](https://github.com/rethinkhealth/glion/issues/907)). Mutual TLS is `requestCert: true` with `ca`: a remote system that presents no client certificate, or one `ca` does not verify, is refused during the handshake. Before, `tls` took only `cert`, `key`, `ca`, and `passphrase`, so Node never asked for a client certificate and `ca` verified nothing.
