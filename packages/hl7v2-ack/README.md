# @rethinkhealth/hl7v2-ack

Opinionated ACK/NAK message generator for the `@rethinkhealth/hl7v2` ecosystem.

> [!WARNING]
> **Active Development:** This package is under active development and is not recommended for use in production workloads. APIs may change without notice.

## Overview

Generates HL7v2 acknowledgment (ACK) messages from inbound message ASTs. Given a parsed inbound message, `acknowledge` produces a spec-compliant ACK with properly swapped sender/receiver fields, a unique control ID, and optional error reporting via MSA and ERR segments.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 18+), install with your package manager:

```bash
npm install @rethinkhealth/hl7v2-ack
```

## Use

```typescript
import { parseHL7v2 } from "@rethinkhealth/hl7v2";
import { toHl7v2 } from "@rethinkhealth/hl7v2-to-hl7v2";
import { acknowledge, AckCode } from "@rethinkhealth/hl7v2-ack";

const inbound = parseHL7v2.parse(message);

// Positive acknowledgment (AA)
const ack = acknowledge(inbound);
const ackString = toHl7v2(ack);

// Negative acknowledgment with error details
const nak = acknowledge(inbound, {
  code: AckCode.Error,
  text: "Patient not found",
  error: {
    code: "204",
    severity: "E",
    location: "PID-3",
    message: "Unknown key identifier",
  },
});
```

## API

### `acknowledge(inbound, options?)`

Returns a new `Root` AST node representing the ACK message.

**Parameters:**

- `inbound` — The parsed inbound message AST (`Root`)
- `options` — Optional configuration:
  - `code` — Acknowledgment code (`"AA"`, `"AE"`, `"AR"`). Defaults to `"AA"`.
  - `text` — Human-readable text for MSA-3.
  - `error` — Structured error details for the ERR segment (`{ code, severity, location, message }`).
  - `id` — Override the generated message control ID (MSH-10).
  - `timestamp` — Override the ACK timestamp (MSH-7). Accepts a `Timestamp`, `Date`, or pre-formatted string.

### `AckCode`

Convenience constants for acknowledgment codes: `AckCode.Accept` (`"AA"`), `AckCode.Error` (`"AE"`), `AckCode.Reject` (`"AR"`).

### `AckSeverity`

Convenience constants for ERR-4 severity: `AckSeverity.Error` (`"E"`), `AckSeverity.Warning` (`"W"`), `AckSeverity.Information` (`"I"`).

## Design Decisions

This package takes an opinionated approach to ACK generation. The rationale and trade-offs are documented below.

### ACK structure: MSH + MSA + optional ERR

The generated ACK always contains MSH and MSA segments, with an optional ERR segment when error details are provided. This matches the universal ACK structure that works across all HL7v2 versions (2.1 through 2.9).

Version-specific optional segments (SFT in v2.5+, UAC in v2.6+) are **not** generated. These segments are rarely required by real-world systems and can be added by composing additional AST nodes onto the returned `Root` if needed.

### MSA segment is version-stable

The MSA segment core (MSA-1 acknowledgment code, MSA-2 message control ID) has been unchanged since HL7v2 version 2.1. Version differences in MSA are limited to fields that were _deprecated or removed_:

| Field                       | Status                           |
| --------------------------- | -------------------------------- |
| MSA-1 (Acknowledgment Code) | Stable across all versions       |
| MSA-2 (Message Control ID)  | Stable across all versions       |
| MSA-3 (Text Message)        | Deprecated v2.4, removed v2.7    |
| MSA-5 (Delayed Ack Type)    | Deprecated v2.2, removed v2.5    |
| MSA-6 (Error Condition)     | Replaced by ERR segment in v2.4+ |

This package populates MSA-1, MSA-2, and optionally MSA-3 (text). MSA-3 is technically deprecated in v2.4+, but remains widely accepted by production systems and is useful for human-readable diagnostics. We do not populate MSA-5 or MSA-6.

### ERR segment follows v2.5+ structure

The ERR segment uses the v2.5+ field layout (ERR-2 location, ERR-3 error code, ERR-4 severity, ERR-8 user message). Earlier versions used a simpler ERR-1 field which is not supported by this package. In practice, systems running pre-2.5 versions rarely use structured error reporting.

### Acknowledgment codes: original mode only

This package supports the original-mode acknowledgment codes (AA, AE, AR). The enhanced-mode commit-level codes (CA, CE, CR) — negotiated via MSH-15/MSH-16 — are not currently supported.

### Delimiters are copied from the inbound message

MSH-1 (field separator) and MSH-2 (encoding characters) are read directly from the inbound message AST and copied to the ACK. This ensures the ACK uses the same delimiters as the inbound message, which is the expected HL7v2 behavior.

The inbound `Root.data.delimiters` (if present) is also passed through to the ACK root for serializer compatibility.

### Message control ID generation

By default, a 20-character cryptographically random ID is generated using `nanoid`. The 20-character length fits within the MSH-10 limit for all HL7v2 versions (v2.5 allows 20 chars, v2.6+ allows 199 chars). The nanoid alphabet (`A-Za-z0-9_-`) avoids all HL7v2 delimiter characters. Use the `id` option to provide a custom ID.

## License

MIT
