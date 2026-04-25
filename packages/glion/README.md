# @glion/cli

The `glion` command — development and production runtime for Glion MLLP applications.

## What it does

`@glion/cli` provides the `glion` binary that runs Glion applications. A single-file MLLP app exported as `export default new Mllp()` runs as a server with `glion dev` (live reload and a terminal UI) or `glion start` (production: graceful shutdown and JSON-line logs). The CLI reads configuration from a `glion.config.ts` file when present and falls back to a conventional entry path otherwise.

## Install

```bash
npm install @glion/cli
```

## Use

```ts
// glion.app.ts
import { parseHL7v2 } from "@glion/hl7v2";
import { Mllp } from "@glion/mllp";
import { ackMiddleware } from "@glion/mllp-ack";

export default new Mllp()
  .parser(parseHL7v2)
  .use(ackMiddleware())
  .on("ADT^A01", handleAdmit)
  .on("ORU^R01", handleResult);
```

```json
{
  "scripts": {
    "dev": "glion dev",
    "start": "glion start"
  }
}
```

`npm run dev` runs the dev server. `npm start` runs the production server.

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

Type exported from `@glion/cli/config`. Paths resolve against the directory of the config file.

| Field                   | Type                                                                           | Description                                                                                         |
| ----------------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| `entry`                 | `string`                                                                       | Path to the app file. Required.                                                                     |
| `port`                  | `number`                                                                       | TCP port to listen on. `0` selects an OS-assigned ephemeral port. Defaults to `2575`.               |
| `hostname`              | `string`                                                                       | Interface to bind. Defaults to `127.0.0.1` for `glion dev` and `0.0.0.0` for `glion start`.         |
| `tls`                   | `{ cert: string; key: string; ca?: string; passphrase?: string }`              | Enable MLLP over TLS.                                                                               |
| `watch`                 | `string[]`                                                                     | Paths the dev watcher reloads on. Defaults to `[dirname(entry)]`.                                   |
| `gracefulCloseMs`       | `number`                                                                       | Drain timeout for `glion start` in milliseconds. Defaults to `5000`.                                |
| `keepAlive`             | `boolean`                                                                      | Enable TCP keep-alive on accepted sockets.                                                          |
| `keepAliveInitialDelay` | `number`                                                                       | Initial delay in milliseconds before keep-alive probes are sent.                                    |
| `socketTimeout`         | `number`                                                                       | Per-socket idle timeout in milliseconds.                                                            |
| `logging`               | `boolean \| LogLevel \| { dir?: string; maxFiles?: number; level?: LogLevel }` | Off when omitted. `true` enables file logging with defaults; an object overrides individual fields. |

## Commands

### `glion dev`

Runs the app with live reload. Watches the entry file and any paths listed in `watch`, cold-restarts on change, and renders a live terminal UI showing request/response counts, uptime, and error summaries. Falls back to log-only mode when stdout is not a TTY (CI, piped output).

### `glion start`

Runs the app in production. Emits JSON-line events to stdout for log aggregators, handles `SIGTERM` with a graceful drain (`gracefulCloseMs`, default 5000), and exits cleanly when the drain completes.

### Zero-config mode

Both commands run without a `glion.config.ts` when the app file is at `./glion.app.ts` at the project root. The TUI shows a `zero-config` badge when no config was loaded.

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
