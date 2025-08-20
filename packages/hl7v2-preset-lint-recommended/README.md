# @rethinkhealth/hl7v2-preset-lint-recommended

**Preset of linting rules for HL7v2**, built on top of the [`unified`][github-unified] ecosystem.  

This preset is meant as a recommended baseline for catching common HL7v2 issues, such as segment structure, field length, and delimiter usage.

## What is this?

This package provides a **recommended set of HL7v2 linting rules**. It ensures a consistent baseline of message quality checks when processing HL7v2 messages with [`unified`][github-unified] and [`@rethinkhealth/hl7v2-parser`][github-hl7v2-parser].

Think of it like ESLint’s "recommended" rules, but for HL7v2.

## When should I use this?

Use this preset if you:

* Want a **sensible default** for linting HL7v2 messages
* Need a **starting point** for building custom HL7v2 lint configurations
* Are using the [`hl7v2-parser`][github-hl7v2-parser] and want to catch common mistakes

It is intended as a **minimum recommended set**. You can extend or override rules in your own configs.

## Install

```sh
npm install @rethinkhealth/hl7v2-preset-lint-recommended
```

## Use

```typescript
import { unified } from 'unified'
import parse from '@rethinkhealth/hl7v2-parser'
import lint from '@rethinkhealth/hl7v2-lint'
import recommended from '@rethinkhealth/hl7v2-preset-lint-recommended'

const file = await unified()
  .use(parse)
  .use(lint)
  .use(recommended)
  .process('MSH|^~\\&|...')
```

## Presets

This preset bundles a set of **recommended HL7v2 linting rules**.  
Each rule has a default severity and may expose configuration options.

| Rule                                                                 | Options         | Default Severity |
|----------------------------------------------------------------------|-----------------|------------------|
| [`hl7v2-lint-segment-header-length`](../hl7v2-lint-segment-header-length) | *none*          | `error`          |


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