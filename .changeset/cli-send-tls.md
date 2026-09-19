---
"@glion/cli": minor
---

Send over TLS with `glion send` (#657).

- Add `client.tls` to `GlionConfig`: `true`, or `{ ca, cert, key, passphrase, pfx, servername, rejectUnauthorized }` with file paths resolved against the config file, passed to `nodeSocket`'s `tls`
- Dial a `--local` server whose config has a `tls` block over TLS, verifying it against the certificate the config says it presents (`tls.cert`) and, for a loopback address, under the name `localhost`, instead of refusing it
- Override the derived settings field by field with `client.tls` as an object, so `ca` can be replaced for a certificate an authority issued without restating the rest; `client.tls: true` dials against the runtime's CAs alone and `false` dials plain TCP
- Report a TLS file that cannot be read as the `invalid` outcome, before dialing, naming the target it was aimed at
- Mark a TLS connection with `TLS` on the `== connected` line
