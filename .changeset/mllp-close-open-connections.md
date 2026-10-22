---
"@glion/mllp": patch
---

`server.close()` resolves while a remote system holds its connection open ([#906](https://github.com/rethinkhealth/glion/issues/906)). It stops accepting connections and ends every open connection once the message it is handling, if any, has been answered. A connection whose remote system does not close its side within a second of the server's FIN is destroyed. A TLS connection whose handshake completes after `close()` started is ended without reaching the app. `close()` resolves once every connection has closed and its `onDisconnect` has settled. Before, it waited for remote systems to disconnect on their own, so a shutdown hung for as long as any trading partner stayed connected.
