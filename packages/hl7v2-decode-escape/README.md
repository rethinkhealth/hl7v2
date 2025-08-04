# @rethinkhealth/hl7v2-decode-escapes

**[unified](https://unifiedjs.com/)** plugin to decode HL7v2 escape sequences in literal values.

## What is this?

`@rethinkhealth/hl7v2-decode-escapes` is a [unified](https://unifiedjs.com/) plugin that traverses an HL7v2 syntax tree (produced by a parser such as [`@rethinkhealth/hl7v2-ast`](https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-parser)) and decodes HL7v2 escape sequences in all literal values (`subcomponent` nodes).

It preserves the original raw value and replaces the `value` property with the decoded text, handling:

* HL7 delimiter escapes (`\F\`, `\S\`, `\R\`, `\T\`, `\E\`)
* Hexadecimal escapes (`\Xdddd\`)
* Line break directives (`\.br\`)
* Highlighting markers (`\H\`, `\N\`)

## When should I use this?

Use this plugin when you need:

* Human-readable HL7v2 values with escape sequences decoded.
* To process or display HL7v2 message content where `\F\` and similar escapes should be expanded.

If you need to parse HL7v2 messages first, use [`@rethinkhealth/hl7v2-ast`](https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-parser) before applying this plugin.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

In Node.js (version 16+), install with [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm):

```sh
npm install @rethinkhealth/hl7v2-decode-escapes
```

## Use

Say we have an HL7v2 message with escapes:

```js
import { unified } from 'unified'
import { hl7v2Parse } from '@rethinkhealth/hl7v2-ast'
import { hl7v2DecodeLiterals } from '@rethinkhealth/hl7v2-decode-escapes'

const msg = `OBX|1|TX|ID123||Patient allergic to \\F\\Peanuts\\F\\ and \\.br\\Severe reaction`

const file = await unified()
  .use(hl7v2Parse)
  .use(hl7v2DecodeLiterals)
  .process(msg)

console.log(String(file))
```

Before decoding, the `subcomponent.value` contains the raw HL7 text:

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
  "value": "Patient allergic to |Peanuts| and \rSevere reaction",
}
```

## API

### `unified().use(hl7v2DecodeLiterals[, options])`

Decode HL7v2 escape sequences in literal nodes.

###### Parameters

* `options.delimiters` (optional) — Override delimiters. If omitted, the plugin reads them from `Root.data.delimiters` (set by the parser). Defaults to the HL7 standard (`| ^ ~ & \`).

###### Returns

Nothing (`undefined`). Mutates the AST in-place.

## Behavior

* Preserves original text in `node.data.raw`.
* Decodes into `node.value`.
* Uses `Root.data.delimiters` (preferred) or `options.delimiters`.
* Falls back to defaults if neither is present.

## Security

This plugin only transforms AST nodes and does not execute code. Ensure you trust the source of HL7v2 messages before processing.

## Contributing

We welcome contributions! Please see our [Contributing Guide](../../CONTRIBUTING.md) for more details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Code of Conduct

To ensure a welcoming and positive environment, we have a [Code of Conduct](../../CODE_OF_CONDUCT.md) that all contributors and participants are expected to adhere to.

## License

Copyright 2025 Rethink Health, SUARL. All rights reserved.

This program is licensed to you under the terms of the [MIT License](https://opensource.org/licenses/MIT). This program is distributed WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the [LICENSE](../../LICENSE) file for details.