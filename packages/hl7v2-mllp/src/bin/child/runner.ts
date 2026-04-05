/**
 * Child process entry point for `glion dev` and `glion start`.
 *
 * Invoked by the parent via:
 *   child_process.spawn(process.execPath, [this-file, configPath], ...)
 *
 * Loads the user's config and entry file, installs the event-emitting
 * middleware on their Mllp instance, calls serve() from ../../node/serve,
 * and pipes structured events to stdout as JSON lines.
 *
 * Never imported by other source files. Directly executed as a script.
 */

import { readFile, stat } from "node:fs/promises";
import { performance } from "node:perf_hooks";

import { serve } from "../../node/serve.js";
import type { Server } from "../../node/serve.js";
import type { Mllp } from "../../server/mllp.js";
import type { Context, Middleware, Response } from "../../server/types.js";
import { findAndLoadConfig } from "../config/load.js";
import { GlionError } from "../errors.js";
import type { Event } from "../events.js";
import { loadTsModule } from "../loader.js";
import { createEmitter } from "./emitter.js";

// Distributive omit — preserves the discriminated union structure.
// Standard Omit<Union, K> collapses to common properties only; this
// distributes over each variant individually.
type DistributiveOmit<T, K extends keyof T> = T extends unknown
  ? Omit<T, K>
  : never;

type PartialEvent = DistributiveOmit<Event, "ts"> & { ts?: string };

const emitRaw = createEmitter(process.stdout);
// Typed emit helper — accepts any Event variant minus ts, adds ts automatically.
const emit = (e: PartialEvent): void =>
  emitRaw(e as Omit<Event, "ts"> & { ts?: string });

async function main(): Promise<void> {
  const configPathArg = process.argv[2];
  if (!configPathArg) {
    throw new GlionError(
      "config-not-found",
      "Child runner invoked without a config path argument."
    );
  }

  // Parent passes the cwd via argv[3] so child resolves paths the same
  // way the parent did. Falls back to process.cwd() for direct invocation.
  const cwd = process.argv[3] ?? process.cwd();

  // Load config. The parent already validated, but the child re-resolves
  // independently so it owns its own state and so this file can also be
  // run directly (e.g., for debugging).
  //
  // When the parent uses a synthesized (zero-config) setup, configPathArg
  // is the project cwd (a directory), not a config file. In that case we
  // search from the directory rather than loading it as an explicit file.
  const isDir = await stat(configPathArg)
    .then((s) => s.isDirectory())
    .catch(() => false);
  const config = isDir
    ? await findAndLoadConfig({ cwd: configPathArg })
    : await findAndLoadConfig({ cwd, explicitPath: configPathArg });

  // Load the user's entry file (the one that default-exports an Mllp).
  const appModule = (await loadTsModule(config.entry)) as {
    default?: unknown;
  };
  const app = assertMllpInstance(appModule.default, config.entry);

  // Install the event-emitting middleware. Because it's registered
  // AFTER any user .use() calls in the entry file, it sits as the
  // innermost wrapper around the handler.
  installMsgEventMiddleware(app);

  // Resolve TLS buffers if configured.
  const tls = config.tls
    ? {
        cert: await readFileOrThrow(config.tls.cert, "tls.cert"),
        key: await readFileOrThrow(config.tls.key, "tls.key"),
        ca: config.tls.ca
          ? await readFileOrThrow(config.tls.ca, "tls.ca")
          : undefined,
        passphrase: config.tls.passphrase,
      }
    : undefined;

  // Start the server. Lifecycle hooks emit structured events.
  const server: Server = serve(app, {
    port: config.port,
    hostname: config.hostname,
    tls,
    keepAlive: config.keepAlive,
    keepAliveInitialDelay: config.keepAliveInitialDelay,
    socketTimeout: config.socketTimeout,
    onConnect: (conn) => {
      emit({
        t: "conn.open",
        id: conn.id,
        remote: `${conn.remoteAddress}:${conn.remotePort}`,
      });
    },
    onDisconnect: (conn) => {
      emit({ t: "conn.close", id: conn.id });
    },
    onError: (err, conn, info) => {
      emit({
        t: "error",
        conn: conn.id,
        trigger: info ? `${info.messageType}^${info.triggerEvent}` : undefined,
        message: err.message,
        stack: err.stack,
      });
    },
  });

  await server.listening;

  emit({
    t: "ready",
    port: server.port,
    tls: !!config.tls,
    pid: process.pid,
  });

  // Graceful shutdown on SIGTERM from parent.
  const shutdown = async (signal: string): Promise<void> => {
    emit({ t: "closing" });
    try {
      await server.close();
      emit({ t: "closed" });
      emit({ t: "exit", code: 0, signal });
      process.exit(0);
    } catch (error) {
      emit({
        t: "error",
        message: error instanceof Error ? error.message : String(error),
      });
      process.exit(1);
    }
  };

  process.on("SIGTERM", () => {
    void shutdown("SIGTERM");
  });
  process.on("SIGINT", () => {
    void shutdown("SIGINT");
  });
}

function assertMllpInstance(value: unknown, entryPath: string): Mllp {
  if (
    !value ||
    typeof value !== "object" ||
    typeof (value as { handle?: unknown }).handle !== "function"
  ) {
    throw new GlionError(
      "entry-not-mllp-instance",
      `The default export of ${entryPath} must be an Mllp instance.`,
      { entry: entryPath, actualType: typeof value },
      `Change your entry file to:
  import { Mllp } from "@rethinkhealth/hl7v2-mllp";
  export default new Mllp().parser(...).on("ADT^A01", ...);`
    );
  }
  return value as Mllp;
}

async function readFileOrThrow(path: string, field: string): Promise<Buffer> {
  try {
    return await readFile(path);
  } catch (error) {
    throw new GlionError(
      "tls-read-failed",
      `Failed to read ${field} at ${path}`,
      { field, path },
      "Check that the file exists and is readable (chmod 600 for key files).",
      error
    );
  }
}

function installMsgEventMiddleware(app: Mllp): void {
  const middleware: Middleware = async (
    ctx: Context,
    next: () => Promise<void>
  ) => {
    const start = performance.now();
    await next();
    const ms = performance.now() - start;
    const response: Response | undefined = ctx.res;
    const ack = parseAckCode(response?.raw);
    // Routing metadata is available directly on ctx per the Context interface.
    const trigger = `${ctx.messageType ?? "?"}^${ctx.triggerEvent ?? "?"}`;
    emit({
      t: "msg",
      conn: ctx.connection.id,
      trigger,
      control: ctx.controlId ?? "?",
      // ctx has no matchedPattern field — fall back to null.
      pattern: null,
      ack,
      ms: Math.round(ms * 100) / 100,
    });
  };
  app.use(middleware);
}

function parseAckCode(raw: string | undefined): "AA" | "AE" | "AR" | null {
  if (!raw) {
    return null;
  }
  // MSA|<code>|... — minimal tolerant parse.
  // HL7v2 segments are separated by \r, so MSA follows \r (or is at the
  // start of the string). The previous /\|MSA\|/ never matched because
  // the character before MSA is \r, not |.
  const msa = /(?:^|\r)MSA\|([A-Z]{2})\|/.exec(raw);
  const code = msa?.[1];
  if (code === "AA" || code === "AE" || code === "AR") {
    return code;
  }
  return null;
}

try {
  await main();
} catch (error) {
  if (error instanceof GlionError) {
    emit({
      t: "fatal",
      kind: error.kind,
      message: error.message,
      stack: error.stack,
      context: error.context,
    });
  } else {
    emit({
      t: "fatal",
      kind: "child-crashed",
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
  }
  process.exit(1);
}
