---
"@glion/parser": patch
"@glion/util-query": patch
"@glion/to-hl7v2": patch
"@glion/encode-escapes": patch
"@glion/hl7v2": patch
---

Read and write a batch file (FHS and BHS around messages, HL7v2 §2.10) and a stream of more than one message as they are. MSH, FHS, and BHS are header segments wherever they start a segment: the parser reads field 1 as the field separator and field 2 as the encoding characters, up to the next field separator, as it already did for an MSH at the start of the input. An input that starts with FHS or BHS takes its delimiters from that segment.

`delimiters()` reads fields 1 and 2 of the first header segment, so `FHS|^~\&|LAB` gives `^~\&`, where it read the encoding characters from MSH-3 of the batch's first message. `toHl7v2` writes FHS and BHS the way it writes MSH, and `@glion/encode-escapes` leaves their fields 1 and 2 unescaped.

`FHS|^~\&|LAB␍BHS|^~\&|LAB␍MSH|^~\&|LAB|…`, parsed and serialized, comes out unchanged, where it came out as `FHS|LA\&|LAB␍BHS|LA\&|LAB␍MSH|LAB|…`. A second MSH in a stream keeps MSH-2.
