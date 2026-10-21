---
"@glion/cli": minor
---

Remove `glion send --local`. The target is the one the invocation names.

`--local` was a second route to the same thing `--host`/`--port` already express, and it was the only reason the send command read a server's configuration: it took `hostname` and `port` from `glion.config.ts`, mapped a wildcard bind address to loopback, and refused a project whose port is `0` because an OS-assigned port is not in the config. All of that is gone. `glion send` is a client that sends to the system you point it at, and takes no part in what address a server of this project binds.

`glion send` now takes its whole target from the invocation: `--host` names the receiver and `--port` defaults to `2575`, the port MLLP standardizes on. A port outside `1`–`65535` is refused before the dial. The `--config` flag is gone from the subcommand, and the handler no longer takes a working directory: with `--local` removed, `glion send` reads no file but the message, so it needs neither a config file nor a project to run in.
