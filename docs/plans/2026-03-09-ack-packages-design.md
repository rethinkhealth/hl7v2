# ACK Packages Design

## Overview

Two new packages for HL7v2 acknowledgment message generation:

1. **`@rethinkhealth/hl7v2-ack`** — Standalone ACK builder and typed error classes
2. **`@rethinkhealth/hl7v2-mllp-ack`** — MLLP middleware that auto-generates ACK responses

## Package 1: `@rethinkhealth/hl7v2-ack`

### Purpose

Build ACK message ASTs from an original message tree. Provides typed error classes that carry structured ERR segment data. Zero coupling to MLLP.

### Dependencies

- `@rethinkhealth/hl7v2-ast` (types only)
- `@rethinkhealth/hl7v2-builder` (for `m()`, `s()`, `f()`, `c()`)

### API

#### `acknowledge(options): Root`

Builds an ACK `Root` AST node from the original message tree.

```typescript
interface SendingInfo {
  application: string;
  facility: string;
}

interface AcknowledgeOptions {
  tree: Root;
  sending: SendingInfo;
  error?: AckError | AckReject;
}

function acknowledge(options: AcknowledgeOptions): Root;
```

Behavior:

- Extracts `controlId` (MSH-10), `version` (MSH-12), `triggerEvent` (MSH-9.2) from the input tree
- Always builds MSH + MSA segments
- If no `error` provided: ack code is `AA`
- If `error` provided: ack code from error, adds ERR segment if error carries ERR data
- Returns a `Root` AST node (caller serializes with `toHl7v2()` if needed)

#### Error Classes

```typescript
class AckError extends Error {
  readonly code = "AE";
  readonly text?: string;
  readonly errorCode?: string; // ERR-3 (HL7 table 0357)
  readonly severity?: string; // ERR-4: E | W | I
  readonly location?: string; // ERR-2
  readonly userMessage?: string; // ERR-8
}

class AckReject extends Error {
  readonly code = "AR";
  readonly text?: string;
  readonly errorCode?: string;
  readonly severity?: string;
  readonly location?: string;
  readonly userMessage?: string;
}
```

#### Predefined Error Subclasses

Common errors with pre-filled error codes (HL7 table 0357):

| Class                         | Extends     | Error Code | Description                |
| ----------------------------- | ----------- | ---------- | -------------------------- |
| `UnknownPatientError`         | `AckError`  | 204        | Unknown key identifier     |
| `DuplicateMessageError`       | `AckError`  | 205        | Duplicate key identifier   |
| `InternalError`               | `AckError`  | 207        | Application internal error |
| `UnsupportedMessageTypeError` | `AckReject` | 200        | Unsupported message type   |

Small initial set. More can be added as needed.

## Package 2: `@rethinkhealth/hl7v2-mllp-ack`

### Purpose

MLLP middleware that intercepts handler outcomes and generates appropriate ACK responses using `hl7v2-ack`.

### Dependencies

- `@rethinkhealth/hl7v2-ack`
- `@rethinkhealth/hl7v2-to-hl7v2` (serialization)
- `@rethinkhealth/hl7v2-mllp` (types only)

### API

```typescript
function ack(options: { sending: SendingInfo }): Middleware;
```

### Middleware Behavior (onion model)

1. Calls `await next()` to run downstream handlers
2. Observes the outcome:
   - **No error, no response set** — calls `acknowledge({ tree, sending })` producing AA
   - **`AckError` thrown** — calls `acknowledge({ tree, sending, error })` producing AE + ERR
   - **`AckReject` thrown** — calls `acknowledge({ tree, sending, error })` producing AR + ERR
   - **Unknown error thrown** — wraps in `InternalError`, produces AE
   - **Handler already set `ctx.res`** — passes through untouched
3. Serializes the `Root` via `toHl7v2()` and sets `ctx.res = { raw: ... }`

### Usage

```typescript
import { ack } from "@rethinkhealth/hl7v2-mllp-ack";
import { UnknownPatientError } from "@rethinkhealth/hl7v2-ack";

const app = new Mllp();
app.use(ack({ sending: { application: "SERVER", facility: "EXAMPLE" } }));

app.on("ADT^A01", (ctx) => {
  // process message...
  // no return needed — middleware auto-sends AA
});

app.on("ORM^O01", (ctx) => {
  throw new UnknownPatientError("Patient 12345 not found");
  // middleware catches, builds AE with ERR segment
});
```

## Out of Scope

- Enhanced mode ack codes (`CA`, `CE`, `CR`) — deferred for later
- Exhaustive ERR field coverage — only ERR-2, ERR-3, ERR-4, ERR-8
- Exhaustive predefined error subclasses — starting with 4 common ones
- Receiving-side ACK validation/parsing
