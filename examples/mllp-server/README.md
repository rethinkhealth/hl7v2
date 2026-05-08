# MLLP Server for Node

A basic HL7v2 MLLP server with route handlers and ACK/NAK responses.

## Prerequisites

- Node.js ≥ 20
- pnpm

```bash
pnpm install
```

## Run

```bash
# For development.
# TUI with file-watching and hot reload
pnpm dev

# For production
# with JSON-lines log output, no watcher
pnpm start
```

## What's in it

- `glion.config.ts` — entry path, port (`2575`), optional TLS / watch.
- `src/app.ts` — the `Mllp` instance, exported as the default. The CLI picks it up automatically.

The app:

- Registers routes for `ADT^A01`, `ORM^O01`, and `ORU^R01`, plus a catch-all (`*`) that rejects unknown message types.
- Uses `ackMiddleware()` from `@glion/mllp-ack` to turn handler return values into `AA` ACKs and handler throws into the matching NAK (`AE`/`AR`/`CE`/`CR`).
- Adds a small logging middleware to show the onion model: log on entry, `await next()`, log the result.
- Throws `AckApplicationError` from the `ORU^R01` route to demonstrate a typed NAK end-to-end.

## Send a test message

The companion [`mllp-client`](../mllp-client) example sends bundled samples:

```bash
cd ../mllp-client
pnpm send --sample adt-a01     # → AA
pnpm send --sample oru-r01     # → AE · Patient not available · ERR 200
```

Or wrap a raw HL7v2 string in MLLP framing with `nc`:

```bash
printf '\x0bMSH|^~\&|SENDER|SENDER|GLION|NODE|20240101120000||ADT^A01|MSG001|P|2.5.1\rEVN||20240101120000\rPID|||123456^^^MRN||Doe^John\r\x1c\x0d' \
  | nc 127.0.0.1 2575
```

## See also

- [`@glion/mllp`](../../packages/mllp) — server API and routing reference.
- [`@glion/mllp-ack`](../../packages/mllp-ack) — ACK middleware.
- [`@glion/ack`](../../packages/ack) — `AckException` hierarchy.
- [`glion-server-bun`](../glion-server-bun) — same app under Bun, zero-config.
- [`mllp-client`](../mllp-client) — companion client example.
