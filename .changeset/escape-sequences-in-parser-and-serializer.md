---
"@glion/parser": minor
"@glion/to-hl7v2": minor
"@glion/hl7v2": minor
"@glion/utils": minor
"@glion/decode-escapes": minor
"@glion/encode-escapes": minor
"@glion/mllp-client": minor
---

Breaking: decode HL7v2 escape sequences while parsing and encode them while serializing, so a subcomponent `value` is always the content and a parsed message writes back as the same text.

- `hl7v2Parser` decodes `\F\`, `\S\`, `\R\`, `\T\`, `\E\`, `\.br\`, and `\Xdd\` in every value as it tokenizes, leaving MSH-2 as it is; pass `decodeEscapes: false` to keep the wire form in the tree
- `hl7v2ToHl7v2` and `toHl7v2` write delimiters, the escape character, the segment delimiter, and other control characters in a value as escape sequences, leaving MSH-1 and MSH-2 as they are; pass `encodeEscapes: false` to write values as they are
- `parseHL7v2` from `@glion/hl7v2` no longer runs `hl7v2DecodeEscapes`; its output is unchanged
- Add `decodeEscapes(value, delimiters)` and `encodeEscapes(value, delimiters)` to `@glion/utils`
- `hl7v2DecodeEscapes` and `hl7v2EncodeEscapes` are for trees handled with those options off; a parsed tree must not be decoded again
- `hl7v2EncodeEscapes` now writes a control character other than the segment delimiter as `\Xdd\`
- `MllpClient` sends a message whose value holds a control character, written as `\Xdd\`, instead of rejecting it with `INVALID_MESSAGE`
