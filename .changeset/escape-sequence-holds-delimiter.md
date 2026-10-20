---
"@glion/utils": minor
"@glion/to-hl7v2": patch
---

Fix `encodeEscapes` writing an escape sequence that holds a delimiter, which made a message whose delimiters include an escape code grow on every parse and serialize round trip (#1051).

- Write a character whose escape code holds a delimiter, such as `\E\` when `E` is the component separator, as `\Xdd\`, with lowercase digits when an uppercase digit is a delimiter
- Add `EscapeSequenceError`, thrown by `encodeEscapes` and `toHl7v2` for a character that no escape sequence can write with the message's delimiters
