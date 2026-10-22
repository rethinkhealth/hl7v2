---
"@glion/mllp": minor
---

`serve()` takes Node's `tls.createServer()` options as `tls` and passes them unchanged ([#907](https://github.com/rethinkhealth/glion/issues/907)). Mutual TLS is `requestCert: true` with `ca`: a remote system that presents no client certificate is refused during the handshake, and one with a certificate `ca` does not verify is disconnected before any message is read. Before, `tls` took only `cert`, `key`, `ca`, and `passphrase`, so Node never asked for a client certificate and `ca` verified nothing.
