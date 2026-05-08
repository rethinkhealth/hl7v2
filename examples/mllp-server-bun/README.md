# MLLP server (Bun)

A basic HL7v2 MLLP server with route handlers and ACK/NAK responses, run via the [`glion`](https://github.com/rethinkhealth/glion/tree/main/packages/glion) CLI under [Bun](https://bun.sh).

## How to use

Clone this example into a new directory:

```bash
npx degit rethinkhealth/glion/examples/mllp-server-bun my-mllp-server
cd my-mllp-server
```

Install dependencies and run:

```bash
pnpm install
pnpm dev      # development: TUI, file-watching, hot reload
pnpm start    # production: JSON-lines logs, no watcher
```

Both scripts use `bun --bun glion …` to force Bun's runtime through the script runner. Without `--bun`, the `glion` bin's `#!/usr/bin/env node` shebang would hand it to Node.

## What's in it

- `glion.config.ts` — entry path and port.
- `src/app.ts` — the `Mllp` instance, exported as the default. The CLI picks it up via the config.

The app routes `ADT^A01`, `ORM^O01`, and `ORU^R01`, plus a catch-all, and uses `ackMiddleware()` to translate handler return values and throws into ACK/NAK responses. The code is identical to [`mllp-server`](https://github.com/rethinkhealth/glion/tree/main/examples/mllp-server) — only the runtime differs.

## Send a test message

The companion [`mllp-client`](https://github.com/rethinkhealth/glion/tree/main/examples/mllp-client) example sends bundled samples:

```bash
cd ../mllp-client
pnpm send --sample adt-a01     # → AA
pnpm send --sample oru-r01     # → AE · Patient not available · ERR 200
```

## Notes

- Requires [Bun](https://bun.sh) (latest).
- [`mllp-server`](https://github.com/rethinkhealth/glion/tree/main/examples/mllp-server) — same app under Node.
- [`mllp-client`](https://github.com/rethinkhealth/glion/tree/main/examples/mllp-client) — companion client example.
- [`@glion/mllp`](https://github.com/rethinkhealth/glion/tree/main/packages/mllp) — server API and CLI reference.
