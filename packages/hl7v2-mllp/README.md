# @rethinkhealth/hl7v2-mllp

Transport-agnostic MLLP (Minimal Lower Layer Protocol) engine for HL7v2 messaging.

## Overview

MLLP is the standard transport protocol for HL7v2 messages over TCP. This package provides encoding and decoding capabilities that can be "hooked" to any transport layer (TCP sockets, WebSockets, Express, etc.).

**Key characteristics:**

- **Universal** - works in Node.js, browsers, Deno, and edge runtimes
- **Transport-agnostic** - plug into any server or transport layer
- **Dual API** - simple functions for one-shot operations + streaming TransformStreams
- **Resilient** - skips malformed data and continues processing
- **Unified integration** - bridges to the unified processing ecosystem
- **ACK generation** - built-in utilities for HL7v2 acknowledgments

## Installation

```bash
npm install @rethinkhealth/hl7v2-mllp
# or
pnpm add @rethinkhealth/hl7v2-mllp
# or
yarn add @rethinkhealth/hl7v2-mllp
```

## MLLP Protocol

MLLP wraps HL7v2 messages with framing bytes:

```
<VT>message content<FS><CR>
```

| Byte | Hex | Name |
|------|-----|------|
| VT | `0x0B` | Vertical Tab (start byte) |
| FS | `0x1C` | File Separator (end byte 1) |
| CR | `0x0D` | Carriage Return (end byte 2) |

## Usage

### Simple API

For one-shot encoding/decoding operations:

```typescript
import { encode, decode, encodeMultiple, decodeMultiple, isValidFrame } from '@rethinkhealth/hl7v2-mllp';

// Encode a single message
const hl7Message = 'MSH|^~\\&|SENDING|FACILITY|RECEIVING|FACILITY|202301011200||ADT^A01|123|P|2.5.1';
const mllpFrame = encode(hl7Message);

// Decode a single frame
const decoded = decode(mllpFrame);
console.log(decoded.text);       // The HL7v2 message
console.log(decoded.byteLength); // Message size in bytes

// Encode multiple messages
const frames = encodeMultiple(['MSH|1', 'MSH|2', 'MSH|3']);

// Decode multiple concatenated frames
const messages = decodeMultiple(frames);
messages.forEach(msg => console.log(msg.text));

// Validate a frame
if (isValidFrame(data)) {
  const message = decode(data);
}
```

### Streaming API

For processing streams of MLLP data (TCP sockets, WebSockets, etc.):

```typescript
import { createEncoderStream, createDecoderStream } from '@rethinkhealth/hl7v2-mllp';

// Decode incoming MLLP stream
const decoder = createDecoderStream({
  onError: (error) => {
    console.warn('MLLP error:', error.code, error.message);
  }
});

// Use with any readable stream
tcpSocket.readable
  .pipeThrough(decoder)
  .pipeTo(new WritableStream({
    write(message) {
      console.log('Received:', message.text);
    }
  }));

// Encode outgoing messages
const encoder = createEncoderStream();

messageSource
  .pipeThrough(encoder)
  .pipeTo(tcpSocket.writable);
```

### Class-based Streams

For more control, use the class-based stream implementations:

```typescript
import { MLLPEncoderStream, MLLPDecoderStream } from '@rethinkhealth/hl7v2-mllp';

const encoder = new MLLPEncoderStream();
const decoder = new MLLPDecoderStream({
  maxMessageSize: 1024 * 1024, // 1MB limit
  onError: (error) => {
    // Handle errors
  }
});
```

### ACK Generation

Generate HL7v2 acknowledgment messages in response to received messages:

```typescript
import { generateAck, generateNak, AckCode, parseMsh } from '@rethinkhealth/hl7v2-mllp';

// Generate a simple ACK (Application Accept)
const ack = generateAck(originalMessage);

// Generate ACK with error code
const errorAck = generateAck(originalMessage, {
  code: AckCode.AE,
  textMessage: 'Invalid patient ID'
});

// Generate NAK (Application Reject)
const nak = generateNak(originalMessage, 'Message rejected: unknown segment');

// Parse MSH for custom handling
const msh = parseMsh(originalMessage);
console.log(msh.sendingApplication, msh.messageControlId);
```

### Unified Integration

Bridge MLLP to the unified processing ecosystem:

```typescript
import { createProcessorStream, createMLLPPipeline } from '@rethinkhealth/hl7v2-mllp';
import { parseHL7v2 } from '@rethinkhealth/hl7v2';

// Process messages through unified
tcpSocket.readable
  .pipeThrough(createDecoderStream())
  .pipeThrough(createProcessorStream(parseHL7v2))
  .pipeTo(new WritableStream({
    write(result) {
      console.log('Processed:', result.success);
      console.log('Warnings:', result.file.messages);
      console.log('AST:', result.file.data);
    }
  }));
```

### Complete Pipeline

For full message processing with automatic ACK generation:

```typescript
import { createMLLPPipeline } from '@rethinkhealth/hl7v2-mllp';
import { parseHL7v2 } from '@rethinkhealth/hl7v2';

// Create a complete pipeline: decode → process → ACK → encode
const pipeline = createMLLPPipeline({
  processor: parseHL7v2,
  onMessage: (msg) => console.log('Received:', msg.text),
  onProcessed: (result) => console.log('Processed:', result.success),
  onAck: (ack) => console.log('Sending ACK'),
});

// Connect to TCP socket (bidirectional)
tcpSocket.readable.pipeTo(pipeline.writable);
pipeline.readable.pipeTo(tcpSocket.writable);
```

## API Reference

### Constants

```typescript
import {
  MLLP_START_BYTE,  // 0x0B
  MLLP_END_BYTE_1,  // 0x1C
  MLLP_END_BYTE_2,  // 0x0D
  MLLP_HEADER,      // Uint8Array([0x0B])
  MLLP_TRAILER,     // Uint8Array([0x1C, 0x0D])
} from '@rethinkhealth/hl7v2-mllp';
```

### Types

```typescript
// Input for encoding
type MLLPInput = string | Uint8Array;

// Decoded message result
interface MLLPMessage {
  data: Uint8Array;  // Raw message bytes
  text: string;      // UTF-8 decoded text
  byteLength: number;
}

// Decoder options
interface MLLPDecoderOptions {
  maxMessageSize?: number;  // Optional size limit
  encoding?: string;        // Default: 'utf-8'
  onError?: (error: MLLPError) => void;
}

// Error codes
const MLLPErrorCode = {
  INVALID_START_BYTE: 'INVALID_START_BYTE',
  INVALID_END_SEQUENCE: 'INVALID_END_SEQUENCE',
  MESSAGE_TOO_LARGE: 'MESSAGE_TOO_LARGE',
  INCOMPLETE_MESSAGE: 'INCOMPLETE_MESSAGE',
} as const;
```

### Simple API Functions

| Function | Description |
|----------|-------------|
| `encode(message, options?)` | Encode a single message to MLLP frame |
| `encodeMultiple(messages, options?)` | Encode multiple messages to concatenated frames |
| `decode(frame, options?)` | Decode a single MLLP frame |
| `decodeMultiple(data, options?)` | Decode multiple concatenated frames |
| `isValidFrame(data)` | Check if data is a valid MLLP frame |

### Streaming API Functions

| Function | Description |
|----------|-------------|
| `createEncoderStream(options?)` | Create a TransformStream that encodes messages |
| `createDecoderStream(options?)` | Create a TransformStream that decodes frames |
| `MLLPEncoderStream` | Class-based encoder stream |
| `MLLPDecoderStream` | Class-based decoder stream |

### ACK Functions

| Function | Description |
|----------|-------------|
| `generateAck(message, options?)` | Generate an ACK message |
| `generateNak(message, error, code?)` | Generate a NAK (rejection) message |
| `parseMsh(message)` | Parse MSH segment fields |
| `AckCode` | Acknowledgment codes (AA, AE, AR, CA, CE, CR) |

### Unified Integration Functions

| Function | Description |
|----------|-------------|
| `createProcessorStream(processor, options?)` | Bridge to unified processing |
| `MLLPProcessorStream` | Class-based processor stream |
| `createMLLPPipeline(options)` | Complete decode → process → ACK → encode pipeline |

## Error Handling

The streaming decoder delegates error handling to the consumer via the `onError` callback:

```typescript
const decoder = createDecoderStream({
  onError: (error) => {
    console.warn(`[${error.code}] ${error.message} at position ${error.position}`);

    // The decoder will skip malformed data and continue
    // To abort, throw from the callback:
    // throw error;
  }
});
```

**Default behavior:** Logs errors to `console.warn`, skips malformed data, and continues processing.

## Integration Examples

### With Node.js TCP Server

```typescript
import { createServer } from 'net';
import { createDecoderStream, createEncoderStream } from '@rethinkhealth/hl7v2-mllp';
import { Readable, Writable } from 'stream';

const server = createServer((socket) => {
  // Convert Node.js streams to Web streams
  const readable = Readable.toWeb(socket);
  const writable = Writable.toWeb(socket);

  readable
    .pipeThrough(createDecoderStream())
    .pipeTo(new WritableStream({
      write(message) {
        console.log('Received:', message.text);
        // Process message...
      }
    }));
});

server.listen(2575);
```

### With @rethinkhealth/hl7v2-parser

```typescript
import { createDecoderStream } from '@rethinkhealth/hl7v2-mllp';
import { unified } from 'unified';
import { hl7v2Parser } from '@rethinkhealth/hl7v2-parser';

const processor = unified().use(hl7v2Parser);

tcpSocket.readable
  .pipeThrough(createDecoderStream())
  .pipeTo(new WritableStream({
    write(message) {
      const ast = processor.parse(message.text);
      // Work with the HL7v2 AST...
    }
  }));
```

### Bidirectional Communication

```typescript
import { createDecoderStream, createEncoderStream, encode } from '@rethinkhealth/hl7v2-mllp';

// Receiving
tcpSocket.readable
  .pipeThrough(createDecoderStream())
  .pipeTo(new WritableStream({
    write(message) {
      // Process message and send ACK
      const ack = generateAck(message.text);
      sendMessage(ack);
    }
  }));

// Sending
const encoder = createEncoderStream();
const writer = encoder.writable.getWriter();

async function sendMessage(hl7Message: string) {
  await writer.write(hl7Message);
}

encoder.readable.pipeTo(tcpSocket.writable);
```

## Performance

- **Streaming decoder** uses a state machine with efficient buffer management
- **Zero-copy** where possible using Uint8Array views
- **Pull-based** design avoids backpressure issues
- **Single-pass** parsing for minimal overhead

## Browser Support

This package uses WHATWG Streams and TextEncoder/TextDecoder APIs, which are available in:
- Node.js 18+
- All modern browsers
- Deno
- Cloudflare Workers
- Other edge runtimes

## License

MIT
