# @rethinkhealth/hl7v2-jsonify

**[unified](https://unifiedjs.com/)** plugin to transform HL7v2 message ASTs into a simplified JSON representation.

## What is this?

`@rethinkhealth/hl7v2-jsonify` is a [unified](https://unifiedjs.com/) plugin that takes an HL7v2 syntax tree (produced by a parser such as [`@rethinkhealth/hl7v2-ast`][https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-parser]) and compiles it to a clean, structured JSON format.

It strips away [unist](https://github.com/syntax-tree/unist) metadata and preserves only meaningful HL7v2 properties such as segment type, field indexes, and values.

## When should I use this?

Use this plugin when you need:

* A minimal JSON representation of HL7v2 messages for downstream processing.
* To serialize HL7v2 ASTs into a format suitable for APIs or storage.

If you need to parse raw HL7v2 messages first, use [`@rethinkhealth/hl7v2-ast`](https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-parser) before applying this plugin.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

In Node.js (version 16+), install with [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm):

```sh
npm install @rethinkhealth/hl7v2-jsonify
```

## Use

Say we have an HL7v2 message and want to convert it to JSON:

```js
import { unified } from 'unified'
import { hl7v2Parse } from '@rethinkhealth/hl7v2-ast'
import { hl7v2Jsonify } from '@rethinkhealth/hl7v2-jsonify'

const msg = `MSH|^~\\&|HIS|RIH|EKG|EKG|200202150930||ADT^A01|MSG00001|P|2.4\rPID|||555-44-4444||DOE^JOHN`

const file = await unified()
  .use(hl7v2Parse)
  .use(hl7v2Jsonify)
  .process(msg)

console.log(String(file))
```

Yields:

```json
{
  "type": "Message",
  "children": [
    {
      "type": "Segment",
      "name": "MSH",
      "children": [
        { "type": "Field", "name": "MSH-1", "value": "|" },
        { "type": "Field", "name": "MSH-2", "value": "^~\\&" },
        ...
      ]
    },
    {
      "type": "Segment",
      "name": "PID",
      "children": [
        { "type": "Field", "name": "PID-3", "value": "555-44-4444" },
        { "type": "Field", "name": "PID-5", "value": "DOE^JOHN" }
      ]
    }
  ]
}
```

## API

### `unified().use(hl7v2Jsonify)`

Transform an HL7v2 AST into JSON.

###### Parameters

There are no options.

###### Returns

Nothing (`undefined`). The unified compiler returns a stringified JSON document.

## JSON Schema

The output JSON has the following shape:

```ts
interface HL7v2JsonNode {
  type: string
  name?: string
  index?: number
  value?: string
  delimiter?: string
  children?: HL7v2JsonNode[]
}
```

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