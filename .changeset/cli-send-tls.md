---
"@glion/cli": minor
---

Send over TLS with `glion send` (#657).

- Add `--tls`, `--ca`, `--cert`, `--key`, and `--insecure`. Naming any certificate file asks for TLS, so `--tls` is only needed when the invocation names none
- Verify the receiver against the authority `--ca` names, or against its own certificate when it signed itself, as a development server does; `--tls` alone verifies against the runtime's trusted authorities
- `--insecure` dials over TLS without verifying the receiver's certificate
- Report a certificate file that cannot be read as the `invalid` outcome, before dialing, naming the target the send was aimed at
- Mark a TLS connection with `TLS` on the `== connected` line, and `TLS unverified` when verification was turned off, so the line never claims a certificate was checked when it was not
