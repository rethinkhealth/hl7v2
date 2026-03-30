# HL7v2

[![npm version](https://badge.fury.io/js/@rethinkhealth%2Fhl7v2.svg)](https://badge.fury.io/js/@rethinkhealth%2Fhl7v2)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

> [!WARNING]
> **Active Development:** This project is under active development and is not recommended for use in production workloads. APIs and features may change without notice.

[@rethinkhealth/hl7v2](.) is a tool that transforms HL7v2 messages with plugins using the [`unified`][github-unified] framework. These plugins can inspect, transform, and validate the HL7v2 messages. You can use `@rethinkhealth/hl7v2` on the server, the client, deno, etc.

## Intro

`@rethinkhealth/hl7v2` is an ecosystem of plugins that work with HL7v2 as structured data, specifically ASTs (abstract syntax trees). ASTs make it easy for programs to deal with HL7v2. We call those programs plugins. Plugins inspect and change trees. You can use the many existing plugins or you can make your own.

The [`unified`][github-unified] framework is a powerful and proven tool for building parsers, transformers, and compilers for structured text formats. It is widely used in the JavaScript/TypeScript ecosystem for processing formats like Markdown, HTML, and more. HL7v2 messages, while unique to healthcare, share many characteristics with these formats: they are line-oriented, hierarchical, and benefit from being represented as abstract syntax trees (ASTs).

By leveraging `unified` for HL7v2 parsing, we gain:

- **Structured Parsing:** HL7v2 messages are notoriously difficult to work with as plain text. Parsing them into ASTs makes it much easier to analyze, transform, and validate messages programmatically.
- **Consistency:** `unified` provides a consistent interface for parsing, transforming, and serializing data, making it easier for developers to work with HL7v2 alongside other formats.
- **Interoperability:** The `unified` ecosystem is mature and well-documented, allowing HL7v2 tools to interoperate with a wide range of existing plugins and utilities.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 18+), install with [npm](https://docs.npmjs.com/cli/v11/commands/npm-install):

```bash
npm install @rethinkhealth/hl7v2
```

## Use

```typescript
import { parseHL7v2 } from "@rethinkhealth/hl7v2";
import { reporter } from "vfile-reporter";

const hl7v2 = `MSH|^~\\&|SendingApp|SendingFac|ReceivingApp|ReceivingFac|202406101200||ADT^A01|123456|P|2.5
PID|1||123456^^^Hospital^MR||Doe^John^^^^^L||19800101|M|||123 Main St^^Metropolis^NY^10001||555-1234`;

const file = await parseHL7v2.process(hl7v2);

console.error(reporter(file));
console.log(String(file));
```

## Packages

The `@rethinkhealth/hl7v2` ecosystem is organized as a set of modular packages, each focused on a specific aspect of HL7v2 message processing. These packages are designed to work together or independently, depending on your needs.

### Core Packages

- **[@rethinkhealth/hl7v2][github-hl7v2-core]**: main entry point for HL7v2 message parsing, transformation, and validation. It provides a unified interface for working with HL7v2 messages as ASTs.

- **[@rethinkhealth/hl7v2-parser][github-hl7v2-parser]**: a `unified`-compatible parser that converts HL7v2 message text into a structured AST. It handles delimiter detection, segment/field/component parsing, and position tracking. This package is used internally by `@rethinkhealth/hl7v2`, but can be used standalone for custom workflows.

- **[@rethinkhealth/hl7v2-ast][github-hl7v2-ast]**: defines the TypeScript types and interfaces for the HL7v2 AST structure. Ensures type safety and consistency across all packages in the ecosystem.

- **[@rethinkhealth/hl7v2-builder][github-hl7v2-builder]**: minimal helper functions for assembling HL7v2 AST nodes programmatically without hand-writing `unist` trees—ideal for tests, fixtures, and synthetic messages.

- **[@rethinkhealth/hl7v2-jsonify][github-hl7v2-jsonify]**: serializes HL7v2 ASTs to JSON. This is useful for integrating HL7v2 data with modern web APIs and applications.

- **[@rethinkhealth/hl7v2-to-hl7v2][github-hl7v2-to-hl7v2]**: converts HL7v2 AST nodes back to HL7v2 message text. Supports serializing any node type (Root, Segment, Field, etc.) and preserves delimiters. Useful for round-tripping, message editing, or custom serialization workflows.

- **[@rethinkhealth/hl7v2-cli][github-hl7v2-cli]**: a command-line tool for parsing, validating, and transforming HL7v2 messages. Useful for quick inspection, conversion, and automation in CI/CD pipelines.

### Plugins

Plugins are composable functions that extend or modify the behavior of the HL7v2 processor. Plugins can add support for new syntaxes, transform the abstract syntax tree (AST), or integrate with external tools.

- **[@rethinkhealth/hl7v2-decode-escapes][github-hl7v2-decode-escapes]**: decodes HL7v2 escape sequences (e.g., `\F\`, `\S\`, `\T\`, `\Xdd\`, `\.br\`) into their literal values, ensuring message content is interpreted correctly. Strips highlighting markers (`\H\`, `\N\`).

- **[@rethinkhealth/hl7v2-encode-escapes][github-hl7v2-encode-escapes]**: encodes delimiter characters in subcomponent values as HL7v2 escape sequences (`|` → `\F\`, `^` → `\S\`, etc.) before serialization. The inverse of `hl7v2-decode-escapes`, ensuring round-trip fidelity and preventing malformed messages.

- **[@rethinkhealth/hl7v2-annotate-message][github-hl7v2-annotate-message]**: annotates the AST with message metadata from `MSH` (version, message code, trigger event, structure) for downstream plugins to reuse without re-parsing.

- **[@rethinkhealth/hl7v2-message-structure][github-hl7v2-message-structure]**: infers `MSH-9.3` (message structure) from `MSH-9.1` and `MSH-9.2` when missing, using built-in event maps or custom mappings.

### Transport

Packages for sending and receiving HL7v2 messages over network protocols.

- **[@rethinkhealth/hl7v2-mllp][github-hl7v2-mllp]**: MLLP (Minimal Lower Layer Protocol) transport for HL7v2. Includes frame encoding/decoding, a streaming decoder for chunked TCP data, and an Express-style routing engine with pattern-based message routing (`"ADT^A01"`, `"ADT^*"`, wildcards) and middleware composition.

- **[@rethinkhealth/hl7v2-ack][github-hl7v2-ack]**: generates HL7v2 acknowledgment (ACK) messages from inbound messages. Supports AA (Application Accept), AE (Application Error), and AR (Application Reject) codes with proper MSA/ERR segment construction.

- **[@rethinkhealth/hl7v2-mllp-ack][github-hl7v2-mllp-ack]**: MLLP middleware that automatically generates ACK/NAK responses. Catches handler exceptions and maps them to appropriate acknowledgment codes.

### Linting

The `@rethinkhealth/hl7v2` ecosystem includes custom linting rules to help ensure message quality, conformance, and best practices. These lint rules are designed to catch common mistakes and enforce consistency in HL7v2 messages. Each rule is implemented as a `unified` plugin and can be used independently or in combination.

#### Lint Presets

- **[@rethinkhealth/hl7v2-preset-lint-recommended][github-hl7v2-preset-lint-recommended]**
  Bundles all core HL7v2 lint rules, providing a comprehensive set of checks for message quality, conformance, and best practices.

- **[@rethinkhealth/hl7v2-preset-lint-profile-recommended][github-hl7v2-preset-lint-profile-recommended]**
  Bundles all profile-based lint rules that validate messages against HL7v2 version-specific profiles (field definitions, data types, table values, and segment ordering).

#### Core Lint Rules

- **[@rethinkhealth/hl7v2-lint-required-message-header][github-hl7v2-lint-required-message-header]**
  Ensures that every HL7v2 message includes a required message header segment (such as `MSH`).

- **[@rethinkhealth/hl7v2-lint-max-message-size][github-hl7v2-lint-max-message-size]**
  Reports when an HL7v2 message exceeds a configurable maximum size (in bytes or number of segments).

- **[@rethinkhealth/hl7v2-lint-no-trailing-empty-field][github-hl7v2-lint-no-trailing-empty-field]**
  Detects and warns about empty fields at the end of a segment, which can cause ambiguity or interoperability issues.

- **[@rethinkhealth/hl7v2-lint-segment-header-length][github-hl7v2-lint-segment-header-length]**
  Validates that all segment headers are exactly three characters long, as required by the HL7v2 specification.

- **[@rethinkhealth/hl7v2-lint-message-version][github-hl7v2-lint-message-version]**
  Warns when an HL7v2 message's version is not supported or does not match expected constraints.

#### Profile-Based Lint Rules

These rules validate messages against HL7v2 version-specific profile definitions, loaded automatically based on the version in `MSH-12`.

- **[@rethinkhealth/hl7v2-lint-profile-required-fields][github-hl7v2-lint-profile-required-fields]**
  Validates that required fields per the HL7v2 profile are present and non-empty.

- **[@rethinkhealth/hl7v2-lint-profile-field-max-length][github-hl7v2-lint-profile-field-max-length]**
  Enforces field value maximum lengths as defined in the HL7v2 profile.

- **[@rethinkhealth/hl7v2-lint-profile-field-repetition][github-hl7v2-lint-profile-field-repetition]**
  Flags non-repeatable fields that contain multiple repetitions.

- **[@rethinkhealth/hl7v2-lint-profile-required-components][github-hl7v2-lint-profile-required-components]**
  Validates that required components within composite data types are present.

- **[@rethinkhealth/hl7v2-lint-profile-table-values][github-hl7v2-lint-profile-table-values]**
  Validates coded values against HL7v2 table definitions (UTG).

- **[@rethinkhealth/hl7v2-lint-profile-events-segments-order][github-hl7v2-lint-profile-events-segments-order]**
  Validates segment ordering per the message structure definition.

### Utilities

Utilities are supporting packages that provide common helper functions and low-level tools used throughout the HL7v2 ecosystem.

- **[@rethinkhealth/hl7v2-utils](./packages/hl7v2-utils)**: shared utilities for delimiter detection, normalization, and other HL7v2-specific helpers.

- **[@rethinkhealth/hl7v2-util-visit][github-hl7v2-visitor]**: lightweight visitor pattern for traversing HL7v2 AST trees with full path context, metadata extraction, and control flow actions (skip, exit).

- **[@rethinkhealth/hl7v2-util-query][github-hl7v2-util-query]**: canonical path querying utilities for navigating HL7v2 ASTs. Supports `select()`, `selectAll()`, `value()`, `set()`, and `matches()` with path syntax like `MSH-9.3` or `ORDER-ORC-1`.

- **[@rethinkhealth/hl7v2-util-semver][github-hl7v2-util-semver]**: tiny, fast HL7v2 version and range utilities (basic comparators only).

- **[@rethinkhealth/hl7v2-util-message-info][github-hl7v2-util-message-info]**: extract HL7v2 message metadata (version, type, structure) from MSH segments.

- **[@rethinkhealth/hl7v2-util-timestamp][github-hl7v2-util-timestamp]**: HL7v2 timestamp handling with configurable precision (second, millisecond, microsecond).

- **[@rethinkhealth/hl7v2-profiles][github-hl7v2-profiles]**: HL7v2 version-specific profile definitions (fields, data types, tables, segments) with LRU-cached loading. Used by profile-based lint rules.

- **[@rethinkhealth/hl7v2-config][github-hl7v2-config]**: configuration schema and loader for HL7v2 processing (`.hl7v2rc.json`).

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

Copyright 2026 Rethink Health, SUARL. All rights reserved.

This program is licensed to you under the terms of the [MIT License](https://opensource.org/licenses/MIT). This program is distributed WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the [LICENSE](LICENSE) file for details.

[github-unified]: https://github.com/unifiedjs/unified
[github-hl7v2-ast]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-ast#readme
[github-hl7v2-builder]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-builder#readme
[github-hl7v2-core]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2#readme
[github-hl7v2-cli]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-cli#readme
[github-hl7v2-parser]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-parser#readme
[github-hl7v2-jsonify]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-jsonify#readme
[github-hl7v2-decode-escapes]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-decode-escapes#readme
[github-hl7v2-encode-escapes]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-encode-escapes#readme
[github-hl7v2-annotate-message]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-annotate-message#readme
[github-hl7v2-message-structure]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-message-structure#readme
[github-hl7v2-mllp]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-mllp#readme
[github-hl7v2-ack]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-ack#readme
[github-hl7v2-mllp-ack]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-mllp-ack#readme
[github-hl7v2-lint-required-message-header]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-required-message-header#readme
[github-hl7v2-lint-max-message-size]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-max-message-size#readme
[github-hl7v2-lint-no-trailing-empty-field]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-no-trailing-empty-field#readme
[github-hl7v2-lint-segment-header-length]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-segment-header-length#readme
[github-hl7v2-lint-message-version]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-message-version#readme
[github-hl7v2-lint-profile-required-fields]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-profile-required-fields#readme
[github-hl7v2-lint-profile-field-max-length]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-profile-field-max-length#readme
[github-hl7v2-lint-profile-field-repetition]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-profile-field-repetition#readme
[github-hl7v2-lint-profile-required-components]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-profile-required-components#readme
[github-hl7v2-lint-profile-table-values]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-profile-table-values#readme
[github-hl7v2-lint-profile-events-segments-order]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-profile-events-segments-order#readme
[github-hl7v2-preset-lint-recommended]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-preset-lint-recommended#readme
[github-hl7v2-preset-lint-profile-recommended]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-preset-lint-profile-recommended#readme
[github-hl7v2-profiles]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-profiles#readme
[github-hl7v2-utils]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-utils#readme
[github-hl7v2-util-query]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-util-query#readme
[github-hl7v2-to-hl7v2]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-to-hl7v2#readme
[github-hl7v2-visitor]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-util-visit#readme
[github-hl7v2-util-semver]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-util-semver#readme
[github-hl7v2-util-message-info]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-util-message-info#readme
[github-hl7v2-util-timestamp]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-util-timestamp#readme
[github-hl7v2-config]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-config#readme
