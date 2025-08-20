# @rethinkhealth/hl7v2-to-hl7v2

**[unified](https://unifiedjs.com/)** plugin to transform HL7v2 message ASTs back into HL7v2 string format.

## What is this?

`@rethinkhealth/hl7v2-to-hl7v2` is a [unified](https://unifiedjs.com/) plugin that takes an HL7v2 syntax tree (produced by a parser such as [`@rethinkhealth/hl7v2-parser`](https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-parser)) and compiles it back to the standard HL7v2 string format.

This plugin is useful for transforming, sanitizing, or reconstructing HL7v2 messages while preserving their structure and delimiters.

## When should I use this?

Use this plugin when you need to:

* Transform HL7v2 ASTs back to HL7v2 string format for transmission or storage.
* Sanitize HL7v2 messages by parsing and rebuilding them.
* Apply transformations to HL7v2 messages using AST manipulation.
* Round-trip HL7v2 messages through parsing and compilation.

If you need to parse raw HL7v2 messages first, use [`@rethinkhealth/hl7v2-parser`](https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-parser) before applying this plugin.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

In Node.js (version 16+), install with [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm):

```sh
npm install @rethinkhealth/hl7v2-to-hl7v2
```

## Use

Say we have an HL7v2 AST and want to convert it back to HL7v2 string format:

```js
import { unified } from 'unified'
import { hl7v2Parse } from '@rethinkhealth/hl7v2-parser'
import { hl7v2ToHl7v2 } from '@rethinkhealth/hl7v2-to-hl7v2'

const msg = `MSH|^~\\&|HIS|RIH|EKG|EKG|200202150930||ADT^A01|MSG00001|P|2.4\rPID|||555-44-4444||DOE^JOHN`

const file = await unified()
  .use(hl7v2Parse)
  .use(hl7v2ToHl7v2)
  .process(msg)

console.log(String(file))
```

Yields:

```
MSH|^~\&|HIS|RIH|EKG|EKG|200202150930||ADT^A01|MSG00001|P|2.4
PID|||555-44-4444||DOE^JOHN
```

The plugin preserves the original HL7v2 delimiters and structure, making it perfect for round-trip processing.

## API

### `unified().use(hl7v2ToHl7v2)`

Transform an HL7v2 AST back into HL7v2 string format.

###### Parameters

There are no options.

###### Returns

Nothing (`undefined`). The unified compiler returns a stringified HL7v2 message.

### `toHl7v2(node, delimiters?)`

Convert any HL7v2 AST node to HL7v2 string format.

###### Parameters

* `node` (`Nodes`) — Any HL7v2 AST node (Root, Segment, Field, FieldRepetition, Component, or Subcomponent)
* `delimiters` (`Delimiters`, optional) — Custom delimiters to use. If not provided, will use delimiters from Root node data or defaults

###### Returns

HL7v2 string (`string`)

This function is highly flexible and can convert any level of the HL7v2 hierarchy:

```js
import { toHl7v2 } from '@rethinkhealth/hl7v2-to-hl7v2'

// Convert entire message
toHl7v2(rootNode) // "MSH|^~\&|...\rPID|..."

// Convert individual segment  
toHl7v2(segmentNode) // "PID|12345|DOE^JOHN"

// Convert individual field
toHl7v2(fieldNode) // "DOE^JOHN"

// Convert component
toHl7v2(componentNode) // "SUB1&SUB2"
```

## Features

* **Universal node support**: Can convert any HL7v2 AST node type (Root, Segment, Field, FieldRepetition, Component, Subcomponent)
* **Delimiter preservation**: Uses the original delimiters from Root AST metadata
* **Flexible delimiter handling**: Accepts custom delimiters or falls back to defaults
* **MSH segment handling**: Correctly handles the special MSH segment structure
* **Complete hierarchy support**: Supports all HL7v2 levels with proper delimiter usage
* **Empty value handling**: Properly handles empty fields and components
* **Error handling**: Provides clear error messages for unsupported node types

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