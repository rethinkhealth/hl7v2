# @glion/decode-escapes

Unified plugin to decode HL7v2 escape sequences in literal values.

## What it does

Walks an HL7v2 AST and decodes escape sequences found in `subcomponent` nodes, replacing `node.value` with the decoded text. It handles the HL7 delimiter escapes (`\F\`, `\S\`, `\R\`, `\T\`, `\E\`), hexadecimal escapes (`\Xdddd\`), line-break directives (`\.br\`), and strips the highlighting markers (`\H\`, `\N\`). The original raw text is preserved on `node.data.raw` so the transformation is non-destructive.

## Install

```bash
npm install @glion/decode-escapes
```

## Use

```js
import { hl7v2DecodeEscapes } from "@glion/decode-escapes";
import { hl7v2Parser } from "@glion/parser";
import { unified } from "unified";

const msg = `OBX|1|TX|ID123||Patient allergic to \\F\\Peanuts\\F\\ and \\.br\\Severe reaction`;

const file = await unified()
  .use(hl7v2Parser)
  .use(hl7v2DecodeEscapes)
  .process(msg);
```

Before decoding, `subcomponent.value` contains the raw HL7 text:

```json
{
  "type": "subcomponent",
  "index": 1,
  "value": "Patient allergic to \\F\\Peanuts\\F\\ and \\.br\\Severe reaction"
}
```

After this plugin runs:

```json
{
  "type": "subcomponent",
  "index": 1,
  "value": "Patient allergic to |Peanuts| and \rSevere reaction"
}
```

## API

### `unified().use(hl7v2DecodeEscapes[, options])`

Decode HL7v2 escape sequences in literal nodes.

###### Parameters

- `options.delimiters` (optional) — Override delimiters. If omitted, the plugin reads them from `Root.data.delimiters` (set by the parser). Defaults to the HL7 standard (`| ^ ~ & \`).

###### Returns

Nothing (`undefined`). Mutates the AST in-place.

## Behavior

The plugin visits every `subcomponent` node and rewrites `node.value`. The original text is preserved on `node.data.raw` so downstream plugins can recover it.

Each escape sequence is decoded as follows:

| Input     | Output                                         |
| --------- | ---------------------------------------------- |
| `\F\`     | field separator (default `\|`)                 |
| `\S\`     | component separator (default `^`)              |
| `\R\`     | repetition separator (default `~`)             |
| `\T\`     | subcomponent separator (default `&`)           |
| `\E\`     | escape character (default `\`)                 |
| `\Xdddd\` | character(s) for the given hexadecimal code(s) |
| `\.br\`   | carriage return (`\r`)                         |
| `\H\`     | stripped (highlight-on marker, no output)      |
| `\N\`     | stripped (normal-text marker, no output)       |

Delimiter resolution order: `Root.data.delimiters` (preferred, set by the parser) → `options.delimiters` → HL7 defaults.

The plugin only transforms AST nodes and does not execute code. The inverse operation is provided by [`@glion/encode-escapes`](https://github.com/rethinkhealth/glion/tree/main/packages/encode-escapes).

## Part of Glion

`@glion/decode-escapes` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
