# HL7v2

[![npm version](https://badge.fury.io/js/@rethinkhealth%2Fhl7v2.svg)](https://badge.fury.io/js/@rethinkhealth%2Fhl7v2)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)


[@rethinlhealth/hl7v2](.) is a tool that transforms HL7v2 messages with plugins using the [`unified`](https://unifiedjs.com/) framework. These plugins can inspect, transform, and validate the HL7v2 messages. You can use `@rethinkhealth/hl7v2` on the server, the client, deno, etc.

## Intro

`@rethinlhealth/hl7v2` is an ecosystem of plugins that work with HL7v2 as structured data, specifically ASTs (abstract syntax trees). ASTs make it easy for programs to deal with HL7v2. We call those programs plugins. Plugins inspect and change trees. You can use the many existing plugins or you can make your own.

The [`unified`](https://unifiedjs.com/) framework is a powerful and proven tool for building parsers, transformers, and compilers for structured text formats. It is widely used in the JavaScript/TypeScript ecosystem for processing formats like Markdown, HTML, and more. HL7v2 messages, while unique to healthcare, share many characteristics with these formats: they are line-oriented, hierarchical, and benefit from being represented as abstract syntax trees (ASTs).

By leveraging `unified` for HL7v2 parsing, we gain:

- **Structured Parsing:** HL7v2 messages are notoriously difficult to work with as plain text. Parsing them into ASTs makes it much easier to analyze, transform, and validate messages programmatically.
- **Consistency:** `unified` provides a consistent interface for parsing, transforming, and serializing data, making it easier for developers to work with HL7v2 alongside other formats.
- **Interoperability:** The `unified` ecosystem is mature and well-documented, allowing HL7v2 tools to interoperate with a wide range of existing plugins and utilities.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 16+), install with [npm](https://docs.npmjs.com/cli/v11/commands/npm-install):

```bash
npm install @rethinkhealth/hl7v2
```

## Use

```typescript
import { parseHL7v2 } from '@rethinkhealth/hl7v2';

const hl7v2 = `MSH|^~\\&|SendingApp|SendingFac|ReceivingApp|ReceivingFac|202406101200||ADT^A01|123456|P|2.5
PID|1||123456^^^Hospital^MR||Doe^John^^^^^L||19800101|M|||123 Main St^^Metropolis^NY^10001||555-1234`;

const tree = parseHL7v2.parse(hl7v2);

console.error(reporter(file))
console.log(String(file)));
```

The results should be

```
no issues found
```

```json
[
  {
    "segment": "MSH",
    "fields": [
      "|",
      "^~\\\\",
      "",
      "SendingApp",
      "SendingFac",
      "ReceivingApp",
      "ReceivingFac",
      "202406101200",
      "",
      [
        "A01"
      ],
      "123456",
      "P",
      "2.5"
    ]
  },
  {
    "segment": "PID",
    "fields": [
      "1",
      "",
      [
        "",
        "",
        "Hospital",
        "MR"
      ],
      "",
      [
        "John",
        "",
        "",
        "",
        "",
        "L"
      ],
      "",
      "19800101",
      "M",
      "",
      "",
      [
        "",
        "Metropolis",
        "NY",
        "10001"
      ],
      "",
      "555-1234"
    ]
  }
]
```

## Packages

The `@rethinkhealth/hl7v2` ecosystem is organized as a set of modular packages, each focused on a specific aspect of HL7v2 message processing. These packages are designed to work together or independently, depending on your needs.

### Core Packages

- **[@rethinkhealth/hl7v2](./packages//hl7v2/README.md)**
  - The main entry point for HL7v2 message parsing, transformation, and validation.
  - Provides a unified interface for working with HL7v2 messages as ASTs.
  - Supports both Node.js and browser environments.

- **[@rethinkhealth/hl7v2-parser](./packages/hl7v2-parser/README.md)**
  - A `unified`-compatible parser that converts HL7v2 message text into a structured AST.
  - Handles delimiter detection, segment/field/component parsing, and position tracking.
  - Used internally by `@rethinkhealth/hl7v2`, but can be used standalone for custom workflows.

- **[@rethinkhealth/hl7v2-jsonify](./packages/hl7v2-jsonify/README.md)**
  - Serializes HL7v2 ASTs to JSON.
  - Useful for integrating HL7v2 data with modern web APIs and applications.

- **[@rethinkhealth/hl7v2-ast](./packages/hl7v2-ast/README.md)**
  - Defines the TypeScript types and interfaces for the HL7v2 AST structure.
  - Ensures type safety and consistency across all packages in the ecosystem.

- **[@rethinkhealth/hl7v2-cli](./packages/hl7v2-cli/README.md)**
  - A command-line tool for parsing, validating, and transforming HL7v2 messages.
  - Useful for quick inspection, conversion, and automation in CI/CD pipelines.

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Code of Conduct

To ensure a welcoming and positive environment, we have a [Code of Conduct](CODE_OF_CONDUCT.md) that all contributors and participants are expected to adhere to.

## License

Copyright 2025 Rethink Health, SUARL. All rights reserved.

This program is licensed to you under the terms of the [MIT License](https://opensource.org/licenses/MIT). This program is distributed WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the [LICENSE](LICENSE) file for details.
