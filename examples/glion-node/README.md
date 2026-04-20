# glion-node

Minimal example of the [`glion` CLI](../../packages/hl7v2-mllp/README.md) running under Node.js with an explicit `glion.config.ts`. It listens on port 2575, returns an `AA` ACK for `ADT^A01` messages, and rejects everything else with `AR`.

## Prerequisites

- Node.js 18+
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

## Sending a test message

With `nc` (netcat), wrap the raw HL7v2 string in MLLP framing (`\x0b` … `\x1c\x0d`):

```bash
printf '\x0bMSH|^~\&|SENDER|SENDER|GLION|NODE-EXAMPLE|20240101120000||ADT^A01|MSG001|P|2.5.1\rEVN||20240101120000\rPID|||123456^^^MRN||Doe^John\r\x1c\x0d' \
  | nc 127.0.0.1 2575
```

or with `node`

```bash
node -e "const net=require('net');const s=net.connect(2575,'127.0.0.1',()=>{s.write('\x0bMSH|^~\\\\&|SENDER|SENDER|GLION|NODE|20240101120000||ADT^A01|MSG001|P|2.5.1\rPID|||123456^^^MRN||Doe^John\r\x1c\x0d')});s.on('data',d=>{console.log(d.toString());s.end()})"
```

You should receive an MLLP-framed `ACK` with `MSA|AA|MSG001`.

## What to look for

- **`glion dev`** — opens the glion TUI. The status line shows `ready port=2575`. Editing `src/app.ts` triggers a hot reload.
- **`glion start`** — prints a `{"t":"ready","port":2575,...}` JSON line on startup, then one line per connection event. Clean shutdown on `SIGTERM`/`SIGINT`.

## Project layout

```
glion.config.ts   ← defineConfig({ entry, port })
src/
  app.ts          ← Mllp instance with routes
```

## See also

[`@glion/mllp` README](../../packages/hl7v2-mllp/README.md) — full CLI and API documentation.
