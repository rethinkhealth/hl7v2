---
"@glion/utils": minor
"@glion/to-hl7v2": minor
"@glion/encode-escapes": patch
"@glion/lint-profile-withdrawn": patch
"@glion/lint-profile-backward-compatible": patch
"@glion/cli": patch
---

Fix `encodeEscapes` writing an escape sequence that holds a delimiter, which made a message whose delimiters include an escape code grow on every parse and serialize round trip (#1051).

- Write a character whose escape code holds a delimiter, such as `\E\` when `E` is the component separator, as `\Xdd\`, with a hexadecimal digit `A`–`F` in lowercase when its uppercase form is a delimiter
- Add `EscapeSequenceError`, thrown by `encodeEscapes`, `toHl7v2`, and `hl7v2EncodeEscapes` for a character that no escape sequence can write with the message's delimiters, and export it from `@glion/to-hl7v2`
- Report `glion send` of such a message as an `invalid` outcome instead of exiting with an unexpected error
- Report a withdrawn or backward-compatible field without `actual` when the message's delimiters cannot write it, instead of rejecting the lint run
