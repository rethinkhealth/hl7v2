# @rethinlhealth/hl7v2

A processor based on **[unified](https://github.com/unifiedjs/unified)** framework to parse from HL7v2 and serialize to JSON.

## What is this?

See [the monorepo readme][rehype] for info on what the rehype ecosystem is.

## When should I use this?

You can use this package when you want to use unified, have HL7v2 as input, and want JSON as output. This package is a shortcut for `unified().use(hl7v2Parser).use(hl7v2Jsonify)`

If you want to inspect and format HL7v2 files in a project on the command line, you can use [`@rethinkhealth/hl7v2-cli`](../hl7v2-cli/).

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 16+), install with [npm](https://docs.npmjs.com/cli/install):

```sh
npm install @rethinkhealth/hl7v2
```

## Use

```typescript
import { parseHL7v2 } from '@rethinkhealth/hl7v2';

const results = await rehype().process("PID|....")

console.error(String(file))
```

## Syntax tree

The syntax tree format used in `@rethinkhealth/hl7v2` is [@rethinkhealth/hl7v2-ast](../hl7v2-ast/).

## Types

This package is fully typed with [TypeScript](https://www.typescriptlang.org). It exports no additional types.

## Security

Use of `@rethinkhealth/hl7v2` plugins could open you up to some potential attacks. Carefully assess each plugin and the risks involved in using them.

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
