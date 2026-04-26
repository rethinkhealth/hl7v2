# @glion/mllp-transport

MLLP wire protocol primitives — framing, encoding, decoding, and base error types.

## What it does

`@glion/mllp-transport` implements the Minimal Lower Layer Protocol (MLLP) framing rules used to carry HL7v2 messages over a byte stream. It exports an `encode()` function that wraps a message in MLLP framing (`<VT> message <FS><CR>`), a `decode()` function for single-frame inputs, and a `createDecoderStream()` `TransformStream` that turns a chunked TCP byte stream into one decoded HL7v2 message per emitted value. It also exports the base `MllpError` class shared across the MLLP package family and the framing-specific `TransportError` subclass. This package has no transport implementation of its own — bring your own TCP, TLS, or WebSocket. `@glion/mllp` (server) and `@glion/mllp-client` build on top of it.

## Install

```bash
npm install @glion/mllp-transport
```

## Use

Encode a single HL7v2 message and write it to any byte sink:

```ts
import { encode } from "@glion/mllp-transport";

const message =
  "MSH|^~\\&|App|Fac|Recv|Fac|20240101120000||ADT^A01|MSG001|P|2.5.1\rPID|1||12345";

const frame = encode(message); // Uint8Array with VT prefix and FS CR suffix
socket.write(frame);
```

Decode a framed byte stream from a TCP socket:

```ts
import { Readable } from "node:stream";
import { createDecoderStream } from "@glion/mllp-transport";

const decoder = createDecoderStream({ maxMessageSize: 1_000_000 });
const reader = (Readable.toWeb(socket) as ReadableStream<Uint8Array>)
  .pipeThrough(decoder)
  .getReader();

while (true) {
  const { done, value: message } = await reader.read();
  if (done) {
    break;
  }
  console.log(message.text);
}
```

Catch transport-level framing errors:

```ts
import { ErrorCode, MllpError, TransportError } from "@glion/mllp-transport";

try {
  // ...
} catch (error) {
  if (error instanceof TransportError) {
    if (error.code === ErrorCode.MESSAGE_TOO_LARGE) {
      // Inbound frame exceeded maxMessageSize.
    }
  } else if (error instanceof MllpError) {
    // Some other MLLP-family error.
  }
}
```

## API

### `encode(message, options?)`

Encode a `string` or `Uint8Array` into an MLLP frame. Returns a `Uint8Array` with the start byte (`0x0B`) prefix and end sequence (`0x1C 0x0D`) suffix.

### `encodeMultiple(messages, options?)`

Encode an array of messages into a single concatenated `Uint8Array` of frames.

### `decode(frame, options?)`

Decode a single complete MLLP frame into a `DecodedMessage`. For chunked stream input, use `createDecoderStream()` instead.

### `createDecoderStream(options?)`

Create a `TransformStream<Uint8Array, DecodedMessage>` that extracts complete MLLP frames from an arbitrarily-chunked byte stream. Resilient by default — framing errors are reported via the `onError` callback and the stream continues scanning for the next valid frame.

### `MLLPDecoderStream`

Class-based variant of `createDecoderStream`, useful when a reusable instance is preferred over the factory.

### Constants

| Symbol            | Value  | Description                            |
| ----------------- | ------ | -------------------------------------- |
| `MLLP_START_BYTE` | `0x0B` | VT — frame start                       |
| `MLLP_END_BYTE_1` | `0x1C` | FS — first byte of frame end sequence  |
| `MLLP_END_BYTE_2` | `0x0D` | CR — second byte of frame end sequence |
| `MLLP_HEADER`     | —      | Header byte sequence as `Uint8Array`   |
| `MLLP_TRAILER`    | —      | Trailer byte sequence as `Uint8Array`  |

### Types

| Type             | Description                                                       |
| ---------------- | ----------------------------------------------------------------- |
| `DecodedMessage` | Result of decoding a frame: `{ data, text, byteLength }`.         |
| `DecoderOptions` | Options for the decoder: `maxMessageSize`, `encoding`, `onError`. |
| `EncoderInput`   | `string \| Uint8Array` — accepted input types for `encode`.       |
| `EncoderOptions` | Options for the encoder: `encoding`.                              |

### Errors

| Symbol             | Description                                                                   |
| ------------------ | ----------------------------------------------------------------------------- |
| `MllpError`        | Base class for all MLLP errors. Carries a string `code`.                      |
| `MllpErrorOptions` | Options accepted by `MllpError` (extends `ErrorOptions`).                     |
| `TransportError`   | `MllpError` subclass for framing failures. Carries `code` + `position`.       |
| `ErrorCode`        | Enum of transport error codes (`INVALID_START_BYTE`, `MESSAGE_TOO_LARGE`, …). |

## Part of Glion

`@glion/mllp-transport` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
