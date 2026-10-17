---
"@glion/cli": patch
---

Refuse a source that holds more than one message instead of putting it on the wire as one.

`glion send` sends one message per invocation and does not split a source into messages: where one message ends and the next begins is a framing question that belongs to whatever reads a batch — tracked in #505 — not to this command. A source carrying more than one message header segment (`MSH`), including an HL7v2 batch file wrapped in `FHS`/`BHS`, is now the `invalid` outcome with a hint, rather than a single malformed message the receiver has to reject.
