# @rethinkhealth/hl7v2-lint-max-message-size

A [`unified`][github-unified] lint rule that warns when an HL7v2 message exceeds a configurable maximum size in bytes or number of segments.

- **Default max size:** 10,000,000 bytes (10MB)
- **Optional:** Limit the number of segments

## What is this?

This package validates the **maximum message size** in HL7v2 syntax trees produced by parsers like [`@rethinkhealth/hl7v2-parser`][github-hl7v2-parser].  

It reports a message when the HL7v2 message exceeds a configurable maximum size in bytes (default: 1,000,000 bytes) or, optionally, a maximum number of segments.

## When should I use this?

Use this rule to enforce a maximum HL7v2 message size (in bytes) and/or segment count, helping to prevent oversized messages that may cause downstream processing issues or violate system constraints.

This linter is useful for:
- Ensuring HL7v2 messages do not exceed a safe or expected size limit (default: 10MB).
- Optionally restricting the number of segments in a message to catch unusually large or malformed messages.
- Improving reliability and performance by catching messages that could cause resource exhaustion or be rejected by receivers.

Configure the rule to match your system's requirements for message size and segment count.

## Install

This package is **ESM only**. In Node.js (v16+), install with npm:

```sh
npm install @rethinkhealth/hl7v2-lint-max-message-size
````

## Use

On the API:

```js
import { unified } from 'unified'
import { hl7v2Parse } from '@rethinkhealth/hl7v2-parser'
import hl7v2LintMaxMessageSize from '@rethinkhealth/hl7v2-lint-max-message-size'
import { reporter } from 'vfile-reporter'

const msg = `MSH|^~\\&|...`
const file = await unified()
  .use(hl7v2Parse)
  .use(hl7v2LintMaxMessageSize)
  .process(msg)

console.error(reporter([file]))
```

## API

### `unified().use(hl7v2LintMaxMessageSize[, options])`

Warns when the HL7v2 message exceeds a configurable maximum size in bytes (default: 10,000,000 bytes) or, optionally, a maximum number of segments.  
Reports a message if the message is too large or has too many segments.

###### Returns

A `unified` Transformer that adds messages to the file.

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

[github-unified]: https://github.com/unifiedjs/unified
[github-hl7v2-parser]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-parser