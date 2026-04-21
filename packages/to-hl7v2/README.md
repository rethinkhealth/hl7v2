# @glion/to-hl7v2

Compile HL7v2 ASTs back to HL7v2 text — as a `unified` plugin or a standalone helper for any node in the tree.

## What it does

`@glion/to-hl7v2` serializes an HL7v2 AST — typically produced by `@glion/parser` — into the original HL7v2 wire format. Delimiters are read from the Root node's data when present, so a parse-then-serialize round trip preserves the message byte-for-byte (modulo intentional edits to the tree in between). The standalone `toHl7v2()` helper works on any subtree, not just the Root, which makes it useful for extracting a single segment, field, or component as text.

## Install

```bash
npm install @glion/to-hl7v2
```

## Use

```ts
import { hl7v2Parser } from "@glion/parser";
import { hl7v2ToHl7v2 } from "@glion/to-hl7v2";
import { unified } from "unified";

const msg = `MSH|^~\\&|HIS|RIH|EKG|EKG|200202150930||ADT^A01|MSG00001|P|2.4\rPID|||555-44-4444||DOE^JOHN`;

const file = await unified().use(hl7v2Parser).use(hl7v2ToHl7v2).process(msg);

console.log(String(file));
// MSH|^~\&|HIS|RIH|EKG|EKG|200202150930||ADT^A01|MSG00001|P|2.4
// PID|||555-44-4444||DOE^JOHN
```

## API

### `unified().use(hl7v2ToHl7v2)`

Register the plugin as the compiler of a `unified` processor. Serializes the AST back to HL7v2 text and sets it as the file contents. No options.

### `toHl7v2(node, delimiters?)`

Standalone serializer. Converts any HL7v2 AST node — `Root`, `Segment`, `Field`, `FieldRepetition`, `Component`, or `Subcomponent` — to its HL7v2 text representation.

- `node` (`Nodes`) — the node to serialize.
- `delimiters` (`Delimiters`, optional) — custom delimiter set. When omitted, reads from the Root node's `data` or falls back to the HL7v2 defaults (`|`, `^`, `~`, `\`, `&`, `\r`).

Returns the serialized `string`.

```ts
import { toHl7v2 } from "@glion/to-hl7v2";

toHl7v2(rootNode); // "MSH|^~\&|...\rPID|..."
toHl7v2(segmentNode); // "PID|12345|DOE^JOHN"
toHl7v2(fieldNode); // "DOE^JOHN"
toHl7v2(componentNode); // "SUB1&SUB2"
```

## Round-trip guarantees

- **Delimiter preservation** — custom delimiters set on `Root.data` (by the parser or by hand) carry through to the output. Messages that do not use the defaults round-trip correctly.
- **MSH handling** — the special case where `MSH-1` is the field separator and `MSH-2` carries the encoding characters is encoded correctly on serialization.
- **Empty fields and components** — preserved in position so field indexes remain stable.
- **Every node type supported** — serializing a partial subtree produces the exact fragment you would expect to find embedded inside the full message.

Pair with `@glion/parser` to read HL7v2 in and `@glion/to-hl7v2` to write it back out; layer `@glion/encode-escapes` and `@glion/decode-escapes` in between to handle delimiter characters that appear in content values.

## Part of Glion

`@glion/to-hl7v2` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
