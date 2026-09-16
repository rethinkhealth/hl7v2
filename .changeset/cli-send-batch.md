---
"@glion/cli": minor
---

Send several messages with one `glion send`, over one connection.

- Accept several `<file>` arguments, `-` for stdin among them, read in order
- Split a source that holds several messages: a message starts at every line beginning with `MSH`; blank lines between messages are ignored
- Print one JSON line per message as each acknowledgment arrives, and on a TTY the exchange view per message followed by a tally
- Report a connection that cannot be opened for every message, and a connection lost mid-batch for every message not yet acknowledged; a NAK does not stop the batch
- Exit with the highest code over the messages sent: 0 all accepted, 1 any rejected, 2 any not delivered
- Report sources that hold no message as the `invalid` outcome
- Update `glion --help` to describe `send` as taking several files
