---
"@glion/cli": patch
---

Refuse a source that is not one message instead of putting it on the wire.

`glion send` sends one message per invocation and does not split a source into messages: where one message ends and the next begins is a framing question that does not belong to this command. A source is now the `invalid` outcome, with a hint, unless it is a single message: it must begin with a message header segment (`MSH`) and carry only one. A source whose first segment is not `MSH` used to be sent as one malformed message, because the delimiters were read from whatever segment came first.
