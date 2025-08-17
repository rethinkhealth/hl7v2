# @rethinkhealth/hl7v2-lint-segment-header-length

A [`unified`][github-unified] lint rule for HL7v2 that warns when a segment **header** (segment ID) is not exactly three uppercase ASCII letters (e.g., `MSH`, `PID`, `OBX`).

## What is this?

This package validates the **segment header** in HL7v2 syntax trees produced by parsers like [`@rethinkhealth/hl7v2-parser`][github-hl7v2-parser].  

It reports a message when the header before the first field delimiter is not a 3-letter uppercase code.

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
npm install @rethinkhealth/hl7v2-lint-segment-header-length
````


## Use

On the API:

```js
import { unified } from 'unified'
import { hl7v2Parse } from '@rethinkhealth/hl7v2-parser'
import hl7v2LintSegmentHeaderLength from '@rethinkhealth/hl7v2-lint-segment-header-length'
import { reporter } from 'vfile-reporter'

const msg = `MSH|^~\\&|...`
const file = await unified()
  .use(hl7v2Parse)
  .use(hl7v2LintSegmentHeaderLength)
  .process(msg)

console.error(reporter([file]))
```


## API

### `unified().use(hl7v2LintSegmentHeaderLength[, options])`

Warn when a segment header is not a three-letter uppercase code.

###### Parameters

* `options.allow` (optional, `string[]`) — an allowlist of additional 3-letter codes (e.g., private segments such as `ZAD`). Values must still be 3 uppercase letters.

###### Returns

A `unified` Transformer that adds messages to the file.

## Recommendation

HL7v2 segments are identified by **exactly three uppercase letters**. Deviations often indicate malformed input, private extensions used incorrectly, or typos that can break routing and transformations.

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

##### `not-ok-too-long.hl7`

###### In

```hl7
PID1|1||12345||DOE^JANE||...
```

###### Out

```text
1:1-1:4: Invalid segment header `PID1`: expected exactly 3 uppercase letters (e.g., `PID`)
```

##### `not-ok-too-short.hl7`

###### In

```hl7
MS|^~\&|...
```

###### Out

```text
1:1-1:3: Invalid segment header `MS`: expected 3 uppercase letters
```

##### `not-ok-lowercase.hl7`

###### In

```hl7
obx|1|TX|...
```

###### Out

```text
1:1-1:4: Invalid segment header `obx`: expected uppercase `OBX`
```

##### `ok-with-allowlist.hl7`

###### In

```hl7
ZAD|1|...
```

With:

```js
.unified().use(hl7v2LintSegmentHeaderLength, { allow: ['ZAD'] })
```

###### Out

No messages.

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