# MLLP Server Example

A TUI (Terminal User Interface) example demonstrating MLLP communication using the `@rethinkhealth/hl7v2-mllp` package.

## Features

- **Receiver CLI** (`mllp-receive`) - Starts an MLLP server and displays received HL7v2 messages
- **Sender CLI** (`mllp-send`) - Interactive TUI to compose and send HL7v2 messages

Both tools use [Ink](https://github.com/vadimdemedes/ink) (React for CLI) for a modern terminal interface.

## Installation

```bash
# Install dependencies
npm install

# Build the project
npm run build
```

## Usage

### Receiver

Start the MLLP receiver to listen for messages:

```bash
# Default port 2575
npx mllp-receive

# Custom port
npx mllp-receive --port 3000

# Custom host binding
npx mllp-receive --host 0.0.0.0 --port 2575
```

**Controls:**
- Press `q` to quit
- Press `c` to clear received messages

### Sender

Start the MLLP sender to compose and send messages:

```bash
# Default destination (localhost:2575)
npx mllp-send

# Custom destination
npx mllp-send --host server.local --port 2575
```

**Controls:**
- Press `Tab` to switch between fields
- Press `Enter` to send the message
- Press `Ctrl+T` to test connection
- Press `Ctrl+C` to quit

## Development

Run in development mode with hot reloading:

```bash
# Terminal 1: Start receiver
npm run dev:receive

# Terminal 2: Start sender
npm run dev:send
```

## Architecture

```
src/
├── receiver/
│   ├── App.tsx              # Main receiver application
│   ├── server.ts            # TCP server with MLLP decoding
│   └── components/
│       ├── StatusBar.tsx    # Server status display
│       ├── MessageList.tsx  # Scrollable message list
│       └── MessageCard.tsx  # Individual message display
├── sender/
│   ├── App.tsx              # Main sender application
│   ├── client.ts            # TCP client with MLLP encoding
│   └── components/
│       ├── StatusBar.tsx    # Connection status
│       ├── ConnectionForm.tsx  # Host/port input
│       ├── MessageInput.tsx # Message text area
│       └── SendStatus.tsx   # Send result display
├── shared/
│   ├── types.ts             # Shared TypeScript types
│   └── formatMessage.ts     # Message parsing utilities
└── bin/
    ├── receive.tsx          # CLI entry point for receiver
    └── send.tsx             # CLI entry point for sender
```

## Example Session

1. Start the receiver in one terminal:
   ```bash
   npm run dev:receive
   ```

2. Start the sender in another terminal:
   ```bash
   npm run dev:send
   ```

3. The sender comes pre-filled with a sample ADT^A01 message. Press Enter to send it.

4. Watch the message appear in the receiver terminal with parsed metadata.

## Dependencies

- `@rethinkhealth/hl7v2-mllp` - MLLP encoding/decoding
- `ink` - React for CLI
- `ink-text-input` - Text input component
- `react` - React core

## License

MIT
