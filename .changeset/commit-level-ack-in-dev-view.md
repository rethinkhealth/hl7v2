---
"@glion/cli": patch
---

Read every HL7v2 Table 0008 acknowledgment code from a reply, with the field separator its MSH-1 declares. `glion dev` showed `?` for a reply whose MSA-1 is `CA`, `CE` or `CR`, or whose field separator is not `|`; it now shows the code, accepts in green and NAKs in red. The `ack` field of the `msg` event that `glion start` writes is now any of the six codes, or `null` (#1059).
