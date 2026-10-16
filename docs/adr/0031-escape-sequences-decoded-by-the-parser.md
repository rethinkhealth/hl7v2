# ADR 0031: Escape Sequences Are Decoded by the Parser and Encoded by the Serializer

## Status

Proposed (2026-10-16)

Answers #1000.

## Context

HL7v2 §2.7 writes a delimiter that occurs inside a value as an escape sequence: `\F\` for the field separator, `\S\`, `\R\`, `\T\` for the component, repetition, and subcomponent separators, `\E\` for the escape character itself, `\.br\` for a line break, and `\Xdd\` for a character given by its hexadecimal code. A value has two forms: the sequence of characters on the wire, and the content those characters stand for. `DOE\T\SMITH` on the wire is the content `DOE&SMITH`.

Until now `@glion/parser` put the wire form in each subcomponent's `value`, and `@glion/decode-escapes`, a transform in the default pipeline, replaced it with the content by walking every node of the tree. `@glion/to-hl7v2` wrote `value` back as it was, and a caller that wanted the content written as escape sequences again added `@glion/encode-escapes` before it. The arrangement had three costs:

- **A second pass over the tree.** Decoding walked every node to reach each subcomponent, on every message, while the tokenizer had already looked at every character and knew which values held an escape character. On a message without escape sequences the walk cost about 2.5 times the parse (#1000).
- **A silent corruption on the way out.** A tree from the default pipeline holds content. Written by `@glion/to-hl7v2` without the encoding transform, a value `a|b` becomes two fields, and a value holding a carriage return ends the segment. Nothing reports it. Whether the output is right depends on the caller remembering a plugin.
- **Two meanings for one property.** Before the transform ran, `value` held the wire form; after it, the content. A lint rule that measures a value's length or checks it against a table reads one or the other depending on where it sits in the pipeline.

The parsers that this project measures itself against put the content in the tree. micromark decodes character references while parsing, so an mdast text node holds `&` for `&amp;`, and remark-stringify writes the reference again. HAPI's `PipeParser` unescapes a value as it parses and escapes it as it encodes. An HL7v2 escape sequence is to a value what a character reference is to text.

## Decision

1. **A subcomponent's `value` is the content.** `@glion/parser` decodes escape sequences as it tokenizes: a TEXT token whose characters include the escape character is decoded with the delimiters the message declares, and every other token is taken as it is. The encoding characters in MSH-2 are never decoded. A node's `position` is the span of the source text, so a decoded value is shorter than its span.

2. **`@glion/to-hl7v2` writes the content as it must appear on the wire.** Each subcomponent value is written with the field, component, repetition, subcomponent, and escape delimiters as `\F\`, `\S\`, `\R\`, `\T\`, and `\E\`, the segment delimiter as `\.br\`, and any other character below U+0020 as `\Xdd\`. MSH-1 and MSH-2 are written as they are.

3. **Both are the default, and each can be turned off.** `hl7v2Parser` takes `decodeEscapes: false` to keep the wire form in the tree, and `hl7v2ToHl7v2` takes `encodeEscapes: false` to write values as they are. The two options exist for a tree that must hold the wire form, such as one inspected for malformed escape sequences; a pipeline that turns one off and not the other writes a different message than it read.

4. **One pair of functions.** `decodeEscapes(value, delimiters)` and `encodeEscapes(value, delimiters)` live in `@glion/utils`, and `decodeEscapes(encodeEscapes(value, d), d)` is `value` for every string. The parser, the serializer, `@glion/decode-escapes`, and `@glion/encode-escapes` call them. The two plugins remain for trees handled with the options off; the default pipeline in `@glion/hl7v2` no longer runs `@glion/decode-escapes`.

5. **What decoding means does not change.** The parser decodes exactly what the transform decoded: the five delimiter sequences, `\.br\`, and `\Xdd\`. `\H\` and `\N\` are removed. Any other sequence, and an escape character without a closing one, stays in the value as it is.

## Consequences

- A message without escape sequences is parsed in one pass, with one comparison per character added to the scan the tokenizer already runs. Parsing costs the same as before, and the default pipeline does the decoding transform's work for nothing.
- A message read and written back is the same text when its escape sequences are the standard ones. A `\X0D\` is written back as `\.br\`, since both decode to the segment delimiter.
- A decoded tree MUST NOT be decoded again. `\E\F\E\` on the wire is the content `\F\`; decoding it a second time gives `|`. `@glion/decode-escapes` documents this, and a pipeline that parses with the default and adds the transform is wrong.
- `\H\` and `\N\` are lost when a message is read and written back, as they were lost by the transform. A sequence the parser does not know, such as a locally defined `\Zdddd\` or the character set switches `\Cxxyy\` and `\Mxxyyzz\`, stays in the value with its escape character and is written back as `\E\Z…\E\`. Keeping those sequences through a round trip is a separate change, tracked in its own issue.
- Lint rules read content. A length is the number of characters the value holds, and a table value is compared as written in the table.
- `@glion/jsonify` and every consumer of a parsed tree see content, as they did after the transform ran. A consumer that read the wire form from a tree before the transform ran, or serialized a parsed tree expecting the wire form back, passes the option that keeps it.
