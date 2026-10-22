---
"@glion/cli": patch
---

`glion send` opens its connection itself, now that `@glion/mllp-client`'s `nodeSocket` takes a dial function. It sends the host as the TLS server name (SNI) unless the host is an IP address, and turns Nagle's algorithm off, as before. It no longer sets TCP keepalive, which a single send under its own timeout does not use.
