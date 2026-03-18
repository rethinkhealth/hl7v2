# @rethinkhealth/hl7v2-encode-escapes

**[unified](https://unifiedjs.com/)** plugin to encode special characters as HL7v2 escape sequences in literal values.

## What is this?

`@rethinkhealth/hl7v2-encode-escapes` is a [unified](https://unifiedjs.com/) plugin that traverses an HL7v2 syntax tree and encodes delimiter characters in all literal values (`subcomponent` nodes) as HL7v2 escape sequences.

This is the inverse of [`@rethinkhealth/hl7v2-decode-escapes`](https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-decode-escapes), handling:

- Delimiter encoding (`|` → `\F\`, `^` → `\S\`, `~` → `\R\`, `&` → `\T\`)
- Escape character encoding (`\` → `\E\`)
- Line break encoding (`\r` → `\.br\`)

## When should I use this?

Use this plugin when you need to:

- Prepare an HL7v2 AST for serialization after modifying subcomponent values that may contain delimiter characters.
- Ensure values with special characters are safely encoded before converting the AST back to HL7v2 text with [`@rethinkhealth/hl7v2-to-hl7v2`](https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-to-hl7v2).

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

In Node.js (version 18+), install with [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm):

```sh
npm install @rethinkhealth/hl7v2-encode-escapes
```

## Use

```js
import { unified } from "unified";
import { hl7v2EncodeEscapes } from "@rethinkhealth/hl7v2-encode-escapes";
import { hl7v2ToHl7v2 } from "@rethinkhealth/hl7v2-to-hl7v2";

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

Encode special characters as HL7v2 escape sequences in literal nodes.

###### Parameters

- `options.delimiters` (optional) — Override delimiters. If omitted, the plugin reads them from `Root.data.delimiters` (set by the parser). Defaults to the HL7 standard (`| ^ ~ & \`).

###### Returns

Nothing (`undefined`). Mutates the AST in-place.

## Round-trip compatibility

This plugin is the inverse of `@rethinkhealth/hl7v2-decode-escapes`. Encoding then decoding restores the original value:

```js
import { hl7v2DecodeEscapes } from "@rethinkhealth/hl7v2-decode-escapes";
import { hl7v2EncodeEscapes } from "@rethinkhealth/hl7v2-encode-escapes";

// encode → decode round-trip
const encoded = await unified().use(hl7v2EncodeEscapes).run(tree);
const decoded = await unified().use(hl7v2DecodeEscapes).run(encoded);
// decoded values === original values
```

## Security

This plugin only transforms AST nodes and does not execute code. Ensure you trust the source of HL7v2 messages before processing.

## Contributing

We welcome contributions! Please see our [Contributing Guide][github-contributing] for more details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Code of Conduct

To ensure a welcoming and positive environment, we have a [Code of Conduct][github-code-of-conduct] that all contributors and participants are expected to adhere to.

## License

Copyright 2025 Rethink Health, SUARL. All rights reserved.

This program is licensed to you under the terms of the [MIT License](https://opensource.org/licenses/MIT). This program is distributed WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the [LICENSE][github-license] file for details.

[github-code-of-conduct]: https://github.com/rethinkhealth/hl7v2/blob/main/CODE_OF_CONDUCT.md
[github-license]: https://github.com/rethinkhealth/hl7v2/blob/main/LICENSE
[github-contributing]: https://github.com/rethinkhealth/hl7v2/blob/main/CONTRIBUTING.md
