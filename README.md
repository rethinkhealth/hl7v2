HL7v2 client
=============

[![codecov](https://codecov.io/gh/rethinkhealth/hl7v2/branch/main/graph/badge.svg?token=LNUMY9MIZC)](https://codecov.io/gh/rethinkhealth/hl7v2) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

[![npm version](https://badge.fury.io/js/%40rethinkhealth%2Fhl7v2.svg)](https://badge.fury.io/js/%40rethinkhealth%2Fhl7v2) [![npm downloads](https://img.shields.io/npm/dm/%40rethinkhealth%2Fhl7v2.svg)](https://www.npmjs.com/package/%40rethinkhealth%2Fhl7v2) [![GitHub issues](https://img.shields.io/github/issues/rethinkhealth/hl7v2)](https://img.shields.io/github/issues/rethinkhealth/hl7v2) [![GitHub stars](https://img.shields.io/github/stars/rethinkhealth/hl7v2)](https://img.shields.io/github/stars/rethinkhealth/hl7v2) [![GitHub license](https://img.shields.io/github/license/rethinkhealth/hl7v2)](https://img.shields.io/github/license/rethinkhealth/hl7v2)

`@rethinkhealth/HL7v2` is a library for parsing, validating, and mapping HL7v2 messages. It is built on top of the [HL7v2 standard](https://www.hl7.org/implement/standards/product_section.cfm?section=13) and is designed to be used in conjunction with the [HL7v2 standard](https://www.hl7.org/implement/standards/product_section.cfm?section=13).

## What is HL7v2

HL7V2 is a standard for exchanging health information between systems. It is a text-based format that is human readable and machine parsable. HL7v2 is a standard that is used by many healthcare systems and is the standard for exchanging health information between systems.

## Features

- Built on top of the HL7v2 standard.
- Supports HL7v2 versions `2.5` and `2.8.1`.
- Provides robust schema validation using [Json Schema](https://json-schema.org/).
- Provides a simple API for parsing, validating, and mapping HL7v2 messages.

## Getting Started

To get started, install the package using `npm`, `yarn`, or `pnpm`:

- [npm](https://www.npmjs.com/)

```bash
npm install @rethinkhealth/hl7v2
```

- [yarn](https://yarnpkg.com/)

```bash
yarn add @rethinkhealth/hl7v2
```

- [pnpm](https://pnpm.io/)

```bash
pnpm i @rethinkhealth/hl7v2
```

## Usage

### Parsing

To parse an HL7v2 message, use the `toJson` function:

```typescript
import { Message } from '@rethinkhealth/hl7v2';

const message = new Message('MSH|^~\&|...');

console.log(message.toJson());
```

### Validation

To validate an HL7v2 message, use the `validate` function:

```typescript
import { Message } from '@rethinkhealth/hl7v2';

const message = new Message('MSH|^~\&|...');

console.log(message.validate());
```

## COPYRIGHT AND LICENSE

Copyright 2023 Rethink Health, SUARL. All rights reserved. This program is licensed to you under the terms of the [MIT License](https://opensource.org/licenses/MIT). This program is distributed WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the [LICENSE](LICENSE) file for details.