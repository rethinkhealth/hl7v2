HL7v2 client
=============

`@rethinkhealth/HL7v2` is a library for parsing, validating, and mapping HL7v2 messages. It is built on top of the [HL7v2 standard](https://www.hl7.org/implement/standards/product_section.cfm?section=13).

## Features

- Typescript-compatible.
- Built on top of the HL7v2 standard.
- Supports HL7v2 versions `2.5` and `2.8.1`.
- Provides robust schema validation using [Json Schema](https://json-schema.org/).
- Provides a simple API for parsing, validating, and mapping HL7v2 messages.

## What is HL7v2

HL7V2 is a standard for exchanging health information between systems. It is a text-based format that is human readable and machine parsable. HL7v2 is a standard that is used by many healthcare systems and is the standard for exchanging health information between systems.

## Getting Started

To get started, install the package using `npm`, `yarn`, or `pnpm`:

```bash
npm install @rethinkhealth/hl7v2
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

## HL7 Trademark

HL7® and HEALTH LEVEL SEVEN® are trademarks owned by Health Level Seven International. HL7® and HEALTH LEVEL SEVEN® are registered with the United States Patent and Trademark Office.

