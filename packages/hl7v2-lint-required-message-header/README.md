# @rethinkhealth/hl7v2-lint-required-message-header

A [`unified`][github-unified] lint rule for HL7v2 that warns when the message header segment (`MSH`) is missing or not the first segment in a message. This helps ensure all HL7v2 messages begin with the required header, improving interoperability and data quality.

HL7v2 messages must always begin with a message header segment, known as `MSH`. This rule checks that the first segment in a message is `MSH` and warns if it is missing or replaced by another segment.

## What is this?

This package validates the **segment header** in HL7v2 syntax trees produced by parsers like [`@rethinkhealth/hl7v2-parser`][github-hl7v2-parser].  

It reports a message when the first segment of an HL7v2 message is not a segment header (MSH).

## When should I use this?

Use this rule to enforce canonical HL7v2 segment identifiers across messages, catch typos (e.g., `PID1`, `Obx`, `MS`), and improve downstream processing reliability.

## Presets

This plugin is included in the following presets:

| Preset | Options |
| - | - |
| `@rethinkhealth/hl7v2-lint-recommended` | |

## Install

This package is **ESM only**. In Node.js (v16+), install with npm:

```sh
npm install @rethinkhealth/hl7v2-lint-required-message-header
````


## Use

On the API:

```js
import { unified } from 'unified'
import { hl7v2Parse } from '@rethinkhealth/hl7v2-parser'
import hl7v2LintRequiredMessageHeader from '@rethinkhealth/hl7v2-lint-required-message-header'
import { reporter } from 'vfile-reporter'

const msg = `MSH|^~\\&|...`
const file = await unified()
  .use(hl7v2Parse)
  .use(hl7v2LintRequiredMessageHeader)
  .process(msg)

console.error(reporter([file]))
```


## API

### `unified().use(hl7v2LintSegmentHeaderLength[, options])`

Warn when a segment header is not a three-letter uppercase code.

###### Returns

A `unified` Transformer that adds messages to the file.

## Recommendation

This helps ensure that HL7v2 messages are well-formed and can be reliably parsed and processed by downstream systems. If the message does not start with `MSH`, a warning is reported indicating which segment was found instead.

**Why is this important?**

- The `MSH` segment contains metadata required for routing and interpreting the message.
- Missing or misplaced `MSH` segments can cause interoperability issues and data loss.

**When to disable:**  

You should only disable this rule if you are intentionally working with non-standard HL7v2 messages that do not require a message header segment, which is rare in practice.


It’s recommended to enable this rule in most pipelines.

## Examples

##### `ok.hl7`

###### In

```hl7
MSH|^~\&|... 
PID|1||12345^^^HOSP^MR||DOE^JANE||...
OBX|1|TX|...
```

###### Out

No messages.

##### `not-ok.hl7`

###### In

```hl7
PID|1||12345||DOE^JANE||...
```

###### Out

```text
Message header (MSH) segment is required. Received PID instead.
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

[github-unified]: https://github.com/unifiedjs/unified
[github-hl7v2-parser]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-parser