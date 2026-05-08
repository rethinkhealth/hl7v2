# MLLP server (Node)

A basic HL7v2 MLLP server with route handlers and ACK/NAK responses, run via the [`glion`](https://github.com/rethinkhealth/glion/tree/main/packages/glion) CLI on Node.js.

## How to use

Clone this example into a new directory:

```bash
npx degit rethinkhealth/glion/examples/mllp-server my-mllp-server
cd my-mllp-server
```

Install dependencies and run:

```bash
pnpm install
pnpm dev      # development: TUI, file-watching, hot reload
pnpm start    # production: JSON-lines logs, no watcher
```

The server listens on `127.0.0.1:2575` by default.

## What's in it

- `glion.config.ts` — entry path, port (`2575`), optional TLS / watch.
- `src/app.ts` — the `Mllp` instance, exported as the default. The CLI picks it up automatically.

The app:

- Registers routes for `ADT^A01`, `ORM^O01`, and `ORU^R01`, plus a catch-all (`*`) that rejects unknown message types.
- Uses `ackMiddleware()` from `@glion/mllp-ack` to turn handler return values into `AA` ACKs and handler throws into the matching NAK (`AE`/`AR`/`CE`/`CR`).
- Adds a small logging middleware to show the onion model: log on entry, `await next()`, log the result.
- Throws `AckApplicationError` from the `ORU^R01` route to demonstrate a typed NAK end-to-end.

## Send a test message

The companion [`mllp-client`](https://github.com/rethinkhealth/glion/tree/main/examples/mllp-client) example sends bundled samples:

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

## Notes

- Requires Node.js ≥ 20.
- [`@glion/mllp`](https://github.com/rethinkhealth/glion/tree/main/packages/mllp) — server API and routing reference.
- [`@glion/mllp-ack`](https://github.com/rethinkhealth/glion/tree/main/packages/mllp-ack) — ACK middleware.
- [`@glion/ack`](https://github.com/rethinkhealth/glion/tree/main/packages/ack) — `AckException` hierarchy.
- [`mllp-server-bun`](https://github.com/rethinkhealth/glion/tree/main/examples/mllp-server-bun) — same app under Bun.
- [`mllp-client`](https://github.com/rethinkhealth/glion/tree/main/examples/mllp-client) — companion client example.
