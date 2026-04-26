# @glion/mllp-client

MLLP client for sending HL7v2 messages and receiving acknowledgments.

## What it does

`@glion/mllp-client` exports an `MllpClient` class that sends HL7v2 messages over MLLP/TCP and returns the parsed acknowledgment. Each `send()` opens a one-shot TCP (or TLS) connection, MLLP-frames the message, awaits a single ACK frame, parses it, and tears the connection down — modeled after a single HTTP request/response. NAK responses (MSA-1 ∈ {AE, AR, CE, CR}) are thrown as the matching `AckException` subclass from `@glion/ack`, so callers catch the same exception types that `@glion/mllp-ack` produces on the receiver side. Each thrown exception carries the original raw ACK on its `raw` attribute, so callers can re-parse, log, or persist the wire payload without intercepting the response separately. Transport-level failures (connection refused, timeout, malformed frame) are thrown as `MllpClientError`, a subclass of `MllpError` from `@glion/mllp-transport`.

## Install

```bash
npm install @glion/mllp-client @glion/ack
```

`@glion/ack` is required because `client.send()` throws its `AckException` subclasses on NAK responses; install it alongside the client so application code can `import { AckApplicationError } from "@glion/ack"` directly.

## Use

```ts
import { MllpClient } from "@glion/mllp-client";

const client = new MllpClient({ host: "127.0.0.1", port: 2575 });

const ack = await client.send(
  [
    "MSH|^~\\&|SendApp|SendFac|RecvApp|RecvFac|20240101120000||ADT^A01^ADT_A01|MSG001|P|2.5.1",
    "EVN|A01|20240101120000",
    "PID|1||12345^^^MRN||Doe^John",
  ].join("\r")
);

console.log(ack.code); // "AA"
console.log(ack.controlId); // "MSG001"
```

Catch a NAK from the receiver as a typed exception. The original raw ACK is available on `error.raw`:

```ts
import { AckApplicationError, AckApplicationReject } from "@glion/ack";
import { MllpClient, MllpClientError } from "@glion/mllp-client";

const client = new MllpClient({ host: "127.0.0.1", port: 2575 });

try {
  await client.send(rawMessage);
} catch (error) {
  if (error instanceof AckApplicationError) {
    // MSA-1 = AE — receiver returned an application-level error.
    // error.message holds MSA-3; error.errorCode holds ERR-3; error.severity holds ERR-4.
    // error.raw holds the wire-format ACK message.
  } else if (error instanceof AckApplicationReject) {
    // MSA-1 = AR — receiver rejected the message.
  } else if (error instanceof MllpClientError) {
    // Transport-level failure: error.code is one of CONNECTION_REFUSED,
    // TIMEOUT, CONNECTION_CLOSED, MALFORMED_FRAME, or MALFORMED_ACK.
  }
}
```

Send over TLS:

```ts
import { readFileSync } from "node:fs";

const client = new MllpClient({
  host: "mllp.example.com",
  port: 6661,
  tls: {
    ca: readFileSync("ca.pem"),
    cert: readFileSync("client-cert.pem"),
    key: readFileSync("client-key.pem"),
  },
});

const ack = await client.send(rawMessage);
```

## Options

`MllpClientOptions`:

| Option       | Type               | Default | Description                                                             |
| ------------ | ------------------ | ------- | ----------------------------------------------------------------------- |
| `host`       | `string`           | —       | Hostname or IP of the MLLP server.                                      |
| `port`       | `number`           | —       | TCP port of the MLLP server.                                            |
| `timeout`    | `number`           | `30000` | Maximum total milliseconds for connect → send → ACK.                    |
| `maxAckSize` | `number`           | —       | Maximum bytes accepted for an inbound ACK frame. No limit when omitted. |
| `tls`        | `ClientTlsOptions` | —       | TLS configuration. The client connects via TLS when set, plain TCP.     |

`ClientTlsOptions`:

| Option               | Type               | Description                                                            |
| -------------------- | ------------------ | ---------------------------------------------------------------------- |
| `ca`                 | `string \| Buffer` | Trusted CA certificate(s) for verifying the server.                    |
| `cert`               | `string \| Buffer` | Client certificate for mutual TLS.                                     |
| `key`                | `string \| Buffer` | Client private key for mutual TLS.                                     |
| `passphrase`         | `string`           | Passphrase for the private key.                                        |
| `servername`         | `string`           | Server name override for certificate verification. Defaults to `host`. |
| `rejectUnauthorized` | `boolean`          | Reject the connection when the server certificate fails verification.  |

## API

### `new MllpClient(options)`

Construct a client bound to a host/port. The constructor does not open a connection — every `send()` call opens its own.

```ts
import { MllpClient } from "@glion/mllp-client";

const client = new MllpClient({ host: "127.0.0.1", port: 2575 });
client.host; // "127.0.0.1"
client.port; // 2575
```

### `client.send(message)`

Send a single HL7v2 message and resolve with the parsed ACK. Accepts a `string` or `Uint8Array` payload. Opens a TCP/TLS connection, writes the MLLP-framed bytes, reads one complete ACK frame, parses it, and closes the connection. On NAK (MSA-1 ∈ {AE, AR, CE, CR}), throws the matching `AckException` subclass with the original wire-format ACK on `error.raw`.

```ts
const ack = await client.send(rawHl7Message);
```

### `Acknowledgment`

The HL7v2 acknowledgment returned by `client.send()`.

| Field         | Type                  | Description                                                           |
| ------------- | --------------------- | --------------------------------------------------------------------- |
| `raw`         | `string`              | The raw HL7v2 ACK message as received from the wire.                  |
| `tree`        | `Root`                | The ACK message AST.                                                  |
| `code`        | `string`              | MSA-1 acknowledgment code (`AA`, `AE`, `AR`, `CA`, `CE`, or `CR`).    |
| `controlId`   | `string`              | MSA-2 message control ID — references the original message's MSH-10.  |
| `textMessage` | `string \| undefined` | MSA-3 text message. Present on NAK; optional on ACK.                  |
| `errorCode`   | `string \| undefined` | ERR-3 HL7 error condition code (Table 0357). Present when ERR is set. |
| `severity`    | `string \| undefined` | ERR-4 severity (Table 0516). Present when ERR is set.                 |

### `MllpClientError`

A subclass of `MllpError` from `@glion/mllp-transport`, thrown for transport-level failures. The `code` property identifies the failure mode:

| `code`               | Meaning                                                              |
| -------------------- | -------------------------------------------------------------------- |
| `CONNECTION_REFUSED` | The TCP connection could not be established (refused, DNS, routing). |
| `CONNECTION_CLOSED`  | The peer closed the connection before a complete ACK arrived.        |
| `TIMEOUT`            | No ACK arrived within `timeout`.                                     |
| `MALFORMED_FRAME`    | Bytes received did not form a valid MLLP frame.                      |
| `MALFORMED_ACK`      | The ACK frame was received but could not be parsed as HL7v2.         |

### Application-level NAK exceptions

`MllpClient.send()` throws the same `AckException` subclasses that `@glion/mllp-ack` produces on the receiver side: `AckApplicationError` (AE), `AckApplicationReject` (AR), `AckCommitError` (CE), `AckCommitReject` (CR), and the abstract base `AckException`. They are not re-exported from this package — install `@glion/ack` and import them directly:

```ts
import { AckApplicationError, AckException } from "@glion/ack";
```

Keeping a single import path keeps `@glion/ack` as the authoritative source for the exception hierarchy across both client and server code paths.

## Behavior

### NAK to exception mapping

| MSA-1 | Thrown class           | Source fields                                                                |
| ----- | ---------------------- | ---------------------------------------------------------------------------- |
| `AA`  | — (resolves)           | —                                                                            |
| `CA`  | — (resolves)           | —                                                                            |
| `AE`  | `AckApplicationError`  | `message` ← MSA-3, `errorCode` ← ERR-3, `severity` ← ERR-4, `raw` ← wire ACK |
| `AR`  | `AckApplicationReject` | same                                                                         |
| `CE`  | `AckCommitError`       | same                                                                         |
| `CR`  | `AckCommitReject`      | same                                                                         |

Every thrown `AckException` carries the original raw ACK message on its `raw` attribute. When MSA-3 is empty, the thrown error's `message` defaults to `Acknowledgment <code> from receiver`. When ERR-3 is missing, `errorCode` defaults to `Hl7ErrorCode.ApplicationInternalError` (`207`). When ERR-4 is missing, `severity` defaults to `Severity.Error` (`E`).

### Connection lifecycle

`MllpClient` does not pool or reuse connections. Each `send()` opens a fresh TCP/TLS connection and closes it after the ACK frame is read. This trades TCP and TLS handshake overhead for a simpler API and isolates each request from the failure modes of the others. Receivers that require long-lived connections may need a different client.

### Concurrency

Each `send()` is independent. Concurrent calls open independent connections; there is no shared state between in-flight requests.

## Part of Glion

`@glion/mllp-client` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
