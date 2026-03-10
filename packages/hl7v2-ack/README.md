# @rethinkhealth/hl7v2-ack

HL7v2 acknowledgment message builder and typed error classes — builds spec-compliant ACK/NAK response ASTs from parsed HL7v2 messages.

## Overview

This package provides:

1. **`acknowledge()`** — Builds a complete ACK/NAK `Root` AST from an original message's AST
2. **Error classes** — `AckError` (AE) and `AckReject` (AR) with HL7v2 error codes and severity
3. **`uid()`** — Generates unique MSH-10 control IDs via `nanoid`

**Key characteristics:**

- **AST in, AST out** — works with `@rethinkhealth/hl7v2-ast` trees, not raw strings
- **Spec-compliant** — produces MSH, MSA, and optional ERR segments per HL7v2 standard
- **Composable** — use standalone or with `@rethinkhealth/hl7v2-mllp-ack` middleware

## Installation

```bash
pnpm add @rethinkhealth/hl7v2-ack
```

## Usage

### Success (AA)

```typescript
import { acknowledge } from "@rethinkhealth/hl7v2-ack";
import { toHl7v2 } from "@rethinkhealth/hl7v2-to-hl7v2";

const ack = acknowledge(originalTree);
const raw = toHl7v2(ack);
// MSH|^~\&|RecvApp|RecvFac|SendApp|SendFac|20240115023000||ACK^A01|<auto-id>|P|2.5.1
// MSA|AA|MSG001
```

The ACK sender (MSH-3/MSH-4) is derived from the original message's MSH-5/MSH-6 by default.

### Error (AE)

```typescript
import { acknowledge, AckError } from "@rethinkhealth/hl7v2-ack";

const error = new AckError("Validation failed", {
  errorCode: "207",
  severity: "E",
});

const ack = acknowledge(originalTree, { error });
// MSA|AE|MSG001|Validation failed
// ERR|||207|E
```

### Reject (AR)

```typescript
import { acknowledge, AckReject } from "@rethinkhealth/hl7v2-ack";

const error = new AckReject("Unsupported message type", {
  errorCode: "200",
  severity: "E",
});

const ack = acknowledge(originalTree, { error });
// MSA|AR|MSG001|Unsupported message type
// ERR|||200|E
```

## API

### `acknowledge(origin, options?)`

Builds an ACK/NAK `Root` AST from the original message tree.

| Parameter                   | Type           | Description                                                        |
| --------------------------- | -------------- | ------------------------------------------------------------------ |
| `origin`                    | `Root`         | Parsed AST of the original HL7v2 message                           |
| `options.id`                | `string`       | Custom MSH-10 control ID. Auto-generated via `uid()` when omitted  |
| `options.sending`           | `SendingInfo`  | MSH-3/MSH-4 of the ACK. Defaults to original message's MSH-5/MSH-6 |
| `options.processingId`      | `string`       | MSH-11 processing ID. Defaults to original message's MSH-11        |
| `options.error`             | `AckException` | Sets AE/AR code and populates MSA-3 with the error message         |
| `options.includeErrSegment` | `boolean`      | Include ERR segment when error is provided. Defaults to `true`     |

Returns a `Root` node containing MSH, MSA, and optionally ERR segments.

### `AckError`

Error class for application errors (ACK code `AE`).

```typescript
new AckError(message, { errorCode, severity?, cause? })
```

### `AckReject`

Error class for application rejects (ACK code `AR`).

```typescript
new AckReject(message, { errorCode, severity?, cause? })
```

Both extend `AckException`, which extends `Error`. The `cause` option supports error chain debugging via standard `ErrorOptions`.

### `uid(options?)`

Generates a unique ID suitable for MSH-10 control IDs.

| Parameter        | Type     | Default | Description                      |
| ---------------- | -------- | ------- | -------------------------------- |
| `options.prefix` | `string` | —       | Optional prefix for the ID       |
| `options.size`   | `number` | `20`    | Total length of the generated ID |

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
