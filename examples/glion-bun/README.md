# glion-bun

Minimal example of the [`glion` CLI](../../packages/hl7v2-mllp/README.md) running under Bun using the **zero-config** path. There is no `glion.config.ts` — dropping a `glion.app.ts` file with an `Mllp` default export is all that is needed. The CLI discovers it automatically and boots on port 2575.

## Prerequisites

- [Bun](https://bun.sh) (latest)
- pnpm

## Running

Install all workspace dependencies from the repo root:

```bash
pnpm install
```

Then, from this directory:

```bash
# Development mode — TUI with file-watching and hot reload
pnpm dev

# Production mode — JSON-lines log output, no watcher
pnpm start
```

The scripts use `bun --bun glion …` to force Bun's runtime through its script runner, bypassing the `#!/usr/bin/env node` shebang on the `glion` bin.

## Sending a test message

With `nc` (netcat), wrap the raw HL7v2 string in MLLP framing (`\x0b` … `\x1c\x0d`):

```bash
printf '\x0bMSH|^~\&|SENDER|SENDER|GLION|BUN-EXAMPLE|20240101120000||ADT^A01|MSG001|P|2.5.1\rEVN||20240101120000\rPID|||123456^^^MRN||Doe^John\r\x1c\x0d' \
  | nc 127.0.0.1 2575
```

You should receive an MLLP-framed `ACK` with `MSA|AA|MSG001`.

## What to look for

- **`pnpm dev`** — opens the glion TUI. The status line shows `ready port=2575`. Editing `glion.app.ts` triggers a hot reload without any watch config.
- **`pnpm start`** — prints a `{"t":"ready","port":2575,...}` JSON line on startup, then one line per connection event. Clean shutdown on `SIGTERM`/`SIGINT`.

## Project layout

```
glion.app.ts   ← zero-config entry: Mllp instance with routes
```

No `glion.config.ts`. The CLI falls back to this conventional filename automatically.

## See also

[`@glion/mllp` README](../../packages/hl7v2-mllp/README.md) — full CLI and API documentation.
