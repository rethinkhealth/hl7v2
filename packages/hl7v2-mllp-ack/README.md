# @rethinkhealth/hl7v2-mllp-ack

MLLP middleware for automatic HL7v2 acknowledgment generation — wraps handlers with ACK/NAK response building.

## Overview

This package provides `ackMiddleware()`, a [Hono](https://hono.dev)-style middleware for `@rethinkhealth/hl7v2-mllp` that automatically generates HL7v2 ACK/NAK responses based on handler outcomes:

- **No error** → AA (application accept)
- **`AckError`** → AE (application error) with ERR segment
- **`AckReject`** → AR (application reject) with ERR segment
- **Unknown `Error`** → AE with error code 207 (internal error)

If the handler sets its own response and doesn't throw, the middleware passes it through untouched.

## Installation

```bash
pnpm add @rethinkhealth/hl7v2-mllp-ack
```

This package has a peer dependency on `@rethinkhealth/hl7v2-mllp`.

## Usage

### Basic Setup

```typescript
import { Mllp } from "@rethinkhealth/hl7v2-mllp";
import { serve } from "@rethinkhealth/hl7v2-mllp/node";
import { ackMiddleware } from "@rethinkhealth/hl7v2-mllp-ack";

const app = new Mllp();

// Add ACK middleware — all routes get automatic ACK/NAK
app.use(ackMiddleware());

app.on("ADT^A01", async (ctx) => {
  // Process the message...
  // No return needed — middleware sends AA automatically
});

const server = serve(app, { port: 2575 });
```

### Throwing Errors

Use `AckError` and `AckReject` from `@rethinkhealth/hl7v2-ack` to control the NAK response:

```typescript
import { AckError, AckReject } from "@rethinkhealth/hl7v2-ack";

app.on("ADT^A01", async (ctx) => {
  const patient = await findPatient(ctx);

  if (!patient) {
    throw new AckError("Patient not found", {
      errorCode: "204", // Unknown key identifier
      severity: "E",
    });
  }
});

app.on("*", async () => {
  throw new AckReject("Unsupported message type", {
    errorCode: "200", // Unsupported message type
    severity: "E",
  });
});
```

Unknown errors (plain `Error` or non-Error throws) are wrapped as AE with error code 207.

### Options

```typescript
ackMiddleware({
  // Override MSH-3/MSH-4 of the ACK (defaults to original MSH-5/MSH-6)
  sending: { application: "MyApp", facility: "MyFac" },

  // Custom MSH-10 control ID generator (defaults to uid() from hl7v2-ack)
  generateId: () => `ACK-${Date.now()}`,
});
```

### Interaction with `onError`

The middleware catches errors from handlers and converts them into ACK responses. If ACK construction itself fails (e.g., malformed AST, serialization error), the error propagates to `Mllp`'s `onError` handler, which serves as the infrastructure-level safety net.

## API

### `ackMiddleware(options?)`

Returns a `Middleware` function for use with `Mllp.use()`.

| Option       | Type           | Description                                                        |
| ------------ | -------------- | ------------------------------------------------------------------ |
| `sending`    | `SendingInfo`  | MSH-3/MSH-4 of the ACK. Defaults to original message's MSH-5/MSH-6 |
| `generateId` | `() => string` | Custom ID generator for MSH-10. Uses `uid()` when omitted          |

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
