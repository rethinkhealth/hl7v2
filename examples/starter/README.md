# Starter Glion

The minimal HL7v2 MLLP server: one route, ACK middleware, run via the [`glion`](https://github.com/rethinkhealth/glion/tree/main/packages/glion) CLI on Node.js. This is the default scaffold produced by `pnpm create glion`.

## How to use

Scaffold this example into a new directory:

```bash
pnpm create glion my-glion-app
cd my-glion-app
```

Install dependencies and run:

```bash
pnpm install
pnpm dev      # development: TUI, file-watching, hot reload
pnpm start    # production: JSON-lines logs, no watcher
```

The server listens on `127.0.0.1:2575` by default.

## What's in it

- `glion.config.ts` — entry path and port.
- `src/app.ts` — the `Mllp` instance, exported as the default. The CLI picks it up automatically.

The app:

- Registers a single `ADT^A01` route that accepts and ACKs the message.
- Uses `ackMiddleware()` from `@glion/mllp-ack` to turn handler return values into `AA` ACKs and throws into the matching NAK.
- Adds a catch-all route that rejects unknown message types with an `AR` NAK.

## Send a test message

Wrap a raw HL7v2 string in MLLP framing with `nc`:

```bash
printf '\x0bMSH|^~\&|SENDER|SENDER|GLION|NODE|20240101120000||ADT^A01|MSG001|P|2.5.1\rEVN||20240101120000\rPID|||123456^^^MRN||Doe^John\r\x1c\x0d' \
  | nc 127.0.0.1 2575
```

## Next steps

- Add more routes (e.g. `ORM^O01`, `ORU^R01`) — see [`mllp-server`](https://github.com/rethinkhealth/glion/tree/main/examples/mllp-server) for a richer example with logging middleware and typed NAKs.
- Send sample messages from the [`mllp-client`](https://github.com/rethinkhealth/glion/tree/main/examples/mllp-client) example.

## Notes

- Requires Node.js ≥ 20.
- [`@glion/mllp`](https://github.com/rethinkhealth/glion/tree/main/packages/mllp) — server API and routing reference.
- [`@glion/mllp-ack`](https://github.com/rethinkhealth/glion/tree/main/packages/mllp-ack) — ACK middleware.
- [`@glion/ack`](https://github.com/rethinkhealth/glion/tree/main/packages/ack) — `AckException` hierarchy.
