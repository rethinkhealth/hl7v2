# @glion/encode-escapes

Unified plugin to encode special characters as HL7v2 escape sequences in literal values.

## What it does

Walks an HL7v2 AST and encodes delimiter characters found in `subcomponent` node values as HL7v2 escape sequences, so a tree that has been modified in memory can be safely serialized back to HL7v2 text without breaking the delimiter structure. It is the inverse of [`@glion/decode-escapes`](https://github.com/rethinkhealth/glion/tree/main/packages/decode-escapes): encode then decode round-trips to the original values.

## Install

```bash
npm install @glion/encode-escapes
```

## Use

```js
import { hl7v2EncodeEscapes } from "@glion/encode-escapes";
import { hl7v2ToHl7v2 } from "@glion/to-hl7v2";
import { unified } from "unified";

// After modifying AST values that may contain delimiters:
const file = await unified()
  .use(hl7v2EncodeEscapes) // encode special chars as escape sequences
  .use(hl7v2ToHl7v2) // serialize AST to HL7v2 text
  .stringify(tree);
```

Before encoding, a `subcomponent.value` might contain literal delimiters:

```json
{
  "type": "subcomponent",
  "value": "Patient allergic to |Peanuts| and \rSevere reaction"
}
```

After this plugin runs:

```json
{
  "type": "subcomponent",
  "value": "Patient allergic to \\F\\Peanuts\\F\\ and \\.br\\Severe reaction"
}
```

## API

### `unified().use(hl7v2EncodeEscapes[, options])`

A `unified` plugin that encodes delimiter and control characters as HL7v2 escape sequences in literal nodes.

**Parameters**

- `options.delimiters` (optional) — partial `Delimiters` override. When omitted, the plugin reads `file.data.delimiters` (set by `@glion/annotate-delimiters`). Falls back to the HL7 defaults (`| ^ ~ & \`).

**Returns**

`undefined`. Mutates the tree in place.

MSH-1 and MSH-2 are skipped: they define the delimiters and must not themselves be escaped.

## Behavior

The plugin visits every `subcomponent` node and rewrites `node.value`, substituting delimiter and control characters with their HL7v2 escape sequences:

| Input | Output                         |
| ----- | ------------------------------ |
| `\|`  | `\F\` (field separator)        |
| `^`   | `\S\` (component separator)    |
| `~`   | `\R\` (repetition separator)   |
| `&`   | `\T\` (subcomponent separator) |
| `\`   | `\E\` (escape character)       |
| `\r`  | `\.br\` (line break directive) |

Delimiter resolution order: `options.delimiters` → `file.data.delimiters` (set by `@glion/annotate-delimiters`) → HL7 defaults.

## Round-tripping

Encoding then decoding round-trips to the original values when both plugins use the same delimiter set. See [`@glion/decode-escapes`](https://github.com/rethinkhealth/glion/tree/main/packages/decode-escapes).

```js
import { hl7v2DecodeEscapes } from "@glion/decode-escapes";
import { hl7v2EncodeEscapes } from "@glion/encode-escapes";
import { unified } from "unified";

const encoded = await unified().use(hl7v2EncodeEscapes).run(tree);
const decoded = await unified().use(hl7v2DecodeEscapes).run(encoded);
// decoded values === original values
```

## Part of Glion

`@glion/encode-escapes` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
