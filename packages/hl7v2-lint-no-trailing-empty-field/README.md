# @rethinkhealth/hl7v2-lint-no-trailing-empty-field

A [`unified`][github-unified] lint rule that warns when an HL7v2 message contains a **trailing empty field** at the end of a segment.

## What is this?

This package validates HL7v2 syntax trees produced by parsers like [`@rethinkhealth/hl7v2-parser`][github-hl7v2-parser] and **warns if any segment ends with at least one empty trailing field or more**. HL7v2 segments should not end with an extra field separator (`|`). This rule helps ensure message conformance and prevents subtle bugs in message processing.

## When should I use this?

Use this rule to enforce HL7v2 message conformance and catch formatting mistakes that may cause interoperability issues. Trailing field separators are sometimes added by mistake and can lead to parsing errors or misinterpretation by strict receivers.

This linter is useful for:

- Ensuring HL7v2 segments do not end with unnecessary field separators.
- Improving message quality and interoperability.
- Catching formatting mistakes early in development or integration pipelines.

## Install

This package is **ESM only**. In Node.js (v16+), install with npm:

```sh
npm install @rethinkhealth/hl7v2-lint-no-trailing-empty-field
````

## Use

On the API:

```js
import { unified } from 'unified'
import { hl7v2Parse } from '@rethinkhealth/hl7v2-parser'
import hl7v2LintNoTrainingSeparator from '@rethinkhealth/hl7v2-lint-no-trailing-empty-field'
import { reporter } from 'vfile-reporter'

const msg = `MSH|^~\\&|...`
const file = await unified()
  .use(hl7v2Parse)
  .use(hl7v2LintNoTrainingSeparator)
  .process(msg)

console.error(reporter([file]))
```

## API


### `unified().use(hl7v2LintNoTrailingEmptyField)`

Warns when any HL7v2 segment ends with one or more trailing field separators (`|`).  
Reports a message for each segment that violates this rule.

#### Returns

A `unified` Transformer that adds warning messages to the file for each segment with a trailing field separator.

## Presets

This plugin is included in the following presets:

| Preset | Options |
| - | - |
| `@rethinkhealth/hl7v2-lint-recommended` | |

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

[github-unified]: https://github.com/unifiedjs/unified
[github-hl7v2-parser]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-parser