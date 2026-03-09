# MLLP Send & Receive Example

A minimal HL7v2 MLLP server and client demonstrating message routing, ACK generation, and MLLP framing using `@rethinkhealth/hl7v2-mllp`.

## Prerequisites

- Node.js 18+
- pnpm

## Setup

From the repository root:

```bash
pnpm install
```

## Usage

### Start the server

```bash
pnpm server:start
pnpm server:start --port 2575 --hostname 0.0.0.0
```

The server registers handlers for `ADT^A01`, `ORM^O01`, and `ORU^R01` message types, with a catch-all for anything else. Each handler returns an ACK response built with `@rethinkhealth/hl7v2-builder`.

### Send a message

Using a bundled sample:

```bash
pnpm client:send --sample adt-a01
pnpm client:send --sample orm-o01 --port 2575
```

From a file:

```bash
pnpm client:send --file path/to/message.hl7
```

From stdin:

```bash
cat message.hl7 | pnpm client:send --port 2575
```

**Client options:**

| Flag       | Default     | Description            |
| ---------- | ----------- | ---------------------- |
| `--port`   | `2575`      | Server port            |
| `--host`   | `127.0.0.1` | Server hostname        |
| `--sample` | -           | Bundled sample name    |
| `--file`   | -           | Path to an `.hl7` file |

### Available samples

| Name      | Message Type | Description        |
| --------- | ------------ | ------------------ |
| `adt-a01` | ADT^A01      | Patient admit      |
| `orm-o01` | ORM^O01      | Lab order          |
| `oru-r01` | ORU^R01      | Observation result |

## Example session

**Terminal 1 -- server:**

```
$ pnpm server:start
 MLLP Server listening on 0.0.0.0:2575

ℹ ADT^A01 from 127.0.0.1:54321
ℹ   Control ID: MSG00001
✔ Patient Admit processed
```

**Terminal 2 -- client:**

```
$ pnpm client:send --sample adt-a01
ℹ Loaded sample: adt-a01
ℹ Connecting to 127.0.0.1:2575...
ℹ Sending message (210 bytes)
✔ Response received (144 bytes):
  MSH|^~\&|MLLP_SERVER|EXAMPLE|||20260309120000||ACK^A01|ACKMSG00001|P|2.5.1
  MSA|AA|MSG00001
```

## Key concepts

**MLLP framing** -- The Minimal Lower Layer Protocol wraps each HL7v2 message with a start byte (`0x0B`), end byte (`0x1C`), and a trailing carriage return (`0x0D`). The `encode()` function and `createDecoderStream()` handle this transparently.

**ACK responses** -- After processing a message, the server responds with an ACK containing an acknowledgment code: `AA` (accepted), `AE` (application error), or `AR` (application reject).

**Message routing** -- `Mllp.on()` registers handlers by message type (e.g., `ADT^A01`). Middleware registered with `Mllp.use()` runs before every handler. A wildcard route (`*`) catches unregistered message types.

## Further reading

See the [`@rethinkhealth/hl7v2-mllp`](../../packages/hl7v2-mllp) package for the full API documentation.
