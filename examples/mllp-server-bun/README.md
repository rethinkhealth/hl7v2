# MLLP Server for Bun runtime

Basic example of an MLLP server using Bun runtime.

## Prerequisites

- [Bun](https://bun.sh) (latest)
- pnpm

```bash
pnpm install
```

## Run

```bash
# For development
# TUI with file-watching and hot reload
pnpm dev

# When deploying to production
# JSON-lines log output, no watcher
pnpm start
```

Both scripts use `bun --bun glion …` to force Bun's runtime through the script runner. Without `--bun`, the `glion` bin's `#!/usr/bin/env node` shebang would hand it to Node.

## What's in it

- `glion.config.ts` — entry path and port.
- `src/app.ts` — the `Mllp` instance, exported as the default. The CLI picks it up via the config.

The app routes `ADT^A01`, `ORM^O01`, and `ORU^R01`, plus a catch-all, and uses `ackMiddleware()` to translate handler return values and throws into ACK/NAK responses. See [`glion-server`](../glion-server) for the full breakdown — the code is identical.

## Send a test message

The companion [`mllp-client`](../mllp-client) example sends bundled samples:

```bash
cd ../mllp-client
pnpm send --sample adt-a01     # → AA
pnpm send --sample oru-r01     # → AE · Patient not available · ERR 200
```

## See also

- [`glion-server`](../glion-server) — the same app under Node.
- [`mllp-client`](../mllp-client) — companion client example.
- [`@glion/mllp`](../../packages/mllp) — server API and CLI reference.
