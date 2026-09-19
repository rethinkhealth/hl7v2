# @glion/cli

The `glion` command — development and production runtime for Glion MLLP applications.

## What it does

`@glion/cli` provides the `glion` binary that runs Glion applications. A single-file MLLP app exported as `export default new Mllp()` becomes a running server with `glion dev` (for development with live reload and a terminal UI) or `glion start` (for production with graceful shutdown and structured logs). `glion send` is a client utility that sends one HL7v2 message over MLLP and prints the acknowledgment. The CLI reads configuration from a `glion.config.ts` file when present or infers defaults when not.

## Install

```bash
npm install @glion/cli
```

## Use

Define your app in a single file:

```ts
// glion.app.ts
import { parseHL7v2 } from "@glion/hl7v2";
import { Mllp } from "@glion/mllp";

export default new Mllp()
  .parser(parseHL7v2)
  .on("ADT^A01", handleAdmit)
  .on("ORU^R01", handleResult);
```

Add the two scripts to `package.json`:

```json
{
  "scripts": {
    "dev": "glion dev",
    "start": "glion start"
  }
}
```

Run `npm run dev` during development. Run `npm start` in production.

## API

### `defineConfig(config)`

Identity helper for `glion.config.ts` that gives TypeScript inference over the configuration schema:

```ts
// glion.config.ts
import { defineConfig } from "@glion/cli/config";

export default defineConfig({
  entry: "./src/app.ts",
  port: 2575,
  hostname: "0.0.0.0",
});
```

### `GlionConfig`

Type exported from `@glion/cli/config`:

| Field             | Type                            | Description                                                          |
| ----------------- | ------------------------------- | -------------------------------------------------------------------- |
| `entry`           | `string`                        | Path to the app file. Defaults to `./glion.app.ts` when unspecified. |
| `port`            | `number`                        | Port to listen on. Defaults to `2575` (the MLLP standard).           |
| `hostname`        | `string`                        | Interface to bind. Defaults to `0.0.0.0`.                            |
| `tls`             | `{ cert: string; key: string }` | Enable MLLP over TLS.                                                |
| `watch`           | `string[]`                      | Additional paths the dev watcher should reload on.                   |
| `gracefulCloseMs` | `number`                        | Drain timeout for `glion start`. Defaults to `5000`.                 |
| `client`          | `object`                        | The MLLP client `glion send` dials with; see below.                  |

`client` configures the MLLP client behind `glion send`. Every field is optional and defaults to the client's own default; see `@glion/mllp-client` for `MllpClientOptions`.

```ts
export default defineConfig({
  entry: "./src/app.ts",
  client: {
    connectTimeoutMs: 5000,
    sendTimeoutMs: 10_000,
    reconnect: { attempts: 2, delay: (attempt) => attempt * 500 },
  },
});
```

| Field              | Type                                                                                     | Description                                                                                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `connectTimeoutMs` | `number`                                                                                 | Time to wait for the connection to open. Defaults to `10000`.                                                                                              |
| `sendTimeoutMs`    | `number`                                                                                 | Time to wait for an acknowledgment after sending. Defaults to `30000`.                                                                                     |
| `maxBufferedBytes` | `number`                                                                                 | Maximum bytes buffered while receiving one acknowledgment. Defaults to 16 MiB.                                                                             |
| `reconnect`        | `{ attempts?: number; delay?: (attempt) => number }` or `false`                          | Attempts after a failed dial before giving up. Defaults to 5 with backoff; `false` dials once.                                                             |
| `tls`              | `boolean` or `{ ca?, cert?, key?, passphrase?, pfx?, servername?, rejectUnauthorized? }` | TLS for the connection. `true` verifies against the runtime's trusted CAs. File fields are paths, resolved against the config file. Defaults to plain TCP. |

## Commands

### `glion dev`

Runs the app with live reload. Watches the entry file and any paths listed in `watch`, cold-restarts on change, and renders a live terminal UI showing request/response counts, uptime, and error summaries. Falls back to log-only mode when stdout is not a TTY (CI, piped output).

### `glion start`

Runs the app in production. Emits JSON-line events to stdout for log aggregators, handles `SIGTERM` with a graceful drain (`gracefulCloseMs`, default 5000), and exits cleanly when the drain completes.

### `glion send`

Sends a single HL7v2 message over MLLP, prints the acknowledgment, and exits. It is a client utility for the dev loop — sending a message to a running server and reporting how it responds — rather than part of the server runtime.

```bash
glion send [<file>] [flags]
```

The message is read from `<file>`, or from stdin when `<file>` is omitted or is `-`. It is parsed and re-serialized to its canonical, CR-delimited form before transmission, so editor line endings are normalized. Whether the message is valid is the receiver's call — it answers with a NAK — so `glion send` does not pre-validate.

| Flag              | Description                                                                   |
| ----------------- | ----------------------------------------------------------------------------- |
| `--host <host>`   | Target host.                                                                  |
| `--port <port>`   | Target port. Defaults to `2575`, the MLLP standard.                           |
| `--local`         | Reads host and port from `glion.config.ts`; `--host`/`--port` override.       |
| `--config <path>` | Config file to load instead of discovering one (same names as `dev`/`start`). |
| `--json`          | Prints one JSON line instead of the human exchange view.                      |

`--local` resolves the target from the server this project defines: it reads `hostname` and `port` from `glion.config.ts`, mapping a wildcard bind address such as `0.0.0.0` to loopback.

Timeouts and the dial policy come from the `client` block of `glion.config.ts` when the project has one, and are the client's defaults otherwise: a dial that fails is tried again up to five times with backoff, about thirty seconds in all. Set `client.reconnect` to `false` to dial once.

```bash
glion send adt.hl7 --host 127.0.0.1
cat adt.hl7 | glion send --host 127.0.0.1 --port 2575 --json
glion send adt.hl7 --local
```

Output adapts to the destination: a terminal receives a human-readable exchange view, with the connection's opening and any loss of it reported on stderr, while a pipe (or `--json`) receives a single JSON line. The exit code reports the result.

| Code | Meaning                                                            |
| ---- | ------------------------------------------------------------------ |
| `0`  | The peer accepted the message (`AA`/`CA`).                         |
| `1`  | The peer rejected the message (a NAK: `AE`/`AR`/`CE`/`CR`).        |
| `2`  | The message could not be delivered (transport, validation, usage). |

`glion send` dials over TLS when `client.tls` is set. Under `--local`, a server whose config has a `tls` block is dialed over TLS without `client.tls`: the client verifies it against the certificate the config says it presents (`tls.cert`), under the name `localhost` for a loopback address. That is what a development server with a self-signed certificate needs; the server's `tls.ca` is not used, because `@glion/mllp` reads that field as the authority for verifying client certificates, which is a different role.

`client.tls` as an object overrides the derived settings field by field: `ca` when an authority issued the server's certificate, `servername` when it names another host, `cert` and `key` when the server asks for a client certificate. `client.tls: true` dials over TLS against the runtime's trusted CAs alone, and `false` dials plain TCP.

### Zero-config mode

Both commands work without a `glion.config.ts` when the app file is at `./glion.app.ts` at the project root. The TUI shows a `zero-config` badge to indicate no config was loaded. Create a `glion.config.ts` when you need custom ports, TLS, or additional watch paths.

### Cross-runtime invocation

The `glion` binary ships with `#!/usr/bin/env node`. Bun and Deno require explicit opt-in:

| Runtime | Invocation                                                          |
| ------- | ------------------------------------------------------------------- |
| Node    | `npm run dev` / `npm start` / `npx glion dev`                       |
| Bun     | `bun --bun run dev` (package.json script) or `bunx --bun glion dev` |
| Deno    | `deno task dev` with a `deno.json` task that runs the bin           |

## Part of Glion

`@glion/cli` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
