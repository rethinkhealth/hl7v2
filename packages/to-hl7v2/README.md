# @glion/to-hl7v2

Compile HL7v2 ASTs back to HL7v2 text — as a `unified` plugin or a standalone helper for any node in the tree.

## What it does

`@glion/to-hl7v2` serializes an HL7v2 AST — typically produced by `@glion/parser` — into the original HL7v2 wire format. Delimiters are read from the Root node's data when present, so a parse-then-serialize round trip preserves the message byte-for-byte (modulo intentional edits to the tree in between). The standalone `toHl7v2()` helper works on any subtree, not just the Root, and produces the corresponding text fragment for a single segment, field, or component.

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

### `unified().use(hl7v2ToHl7v2[, options])`

Registers the plugin as the compiler of a `unified` processor. Serializes the AST back to HL7v2 text and sets it as the file contents.

### `toHl7v2(node, delimiters?, options?)`

Standalone serializer. Converts any HL7v2 AST node — `Root`, `Segment`, `Field`, `FieldRepetition`, `Component`, or `Subcomponent` — to its HL7v2 text representation.

- `node` (`Nodes`) — the node to serialize.
- `delimiters` (`Partial<Delimiters>`, optional) — custom delimiter set. When omitted, derives delimiters from `Root.data` (set by `@glion/annotate-delimiters` or by hand) and falls back to the HL7v2 defaults (`|`, `^`, `~`, `\`, `&`, `\r`).
- `options` (`Hl7v2ToHl7v2Options`, optional) — see [Options](#options).

Returns the serialized `string`.

```ts
import { toHl7v2 } from "@glion/to-hl7v2";

toHl7v2(rootNode); // "MSH|^~\&|...\rPID|..."
toHl7v2(segmentNode); // "PID|12345|DOE^JOHN"
toHl7v2(fieldNode); // "DOE^JOHN"
toHl7v2(componentNode); // "SUB1&SUB2"
```

## Options

| Option              | Type      | Default | Description                                                                  |
| ------------------- | --------- | ------- | ---------------------------------------------------------------------------- |
| `trailingDelimiter` | `boolean` | `false` | When `true`, appends a field delimiter after the last field of each segment. |

## Round-trip guarantees

- **Delimiter preservation** — custom delimiters set on `Root.data` (by the parser or by hand) carry through to the output. Messages that do not use the defaults round-trip correctly.
- **MSH handling** — the special case where `MSH-1` is the field separator and `MSH-2` carries the encoding characters is encoded correctly on serialization.
- **Empty fields and components** — preserved in position so field indexes remain stable.
- **Every node type supported** — serializing a partial subtree produces the exact fragment you would expect to find embedded inside the full message.

## See also

- [`@glion/parser`](../parser/) — parses HL7v2 text into an AST.
- [`@glion/encode-escapes`](../encode-escapes/) — encodes delimiter characters appearing in content values.
- [`@glion/decode-escapes`](../decode-escapes/) — decodes escape sequences back into raw text.

## Part of Glion

`@glion/to-hl7v2` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
