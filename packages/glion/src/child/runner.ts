/**
 * Child process entry point for `glion dev` and `glion start`.
 *
 * Invoked by the parent via:
 * child_process.spawn(process.execPath, [this-file, configPath, cwd], ...)
 *
 * Loads the user's config and entry file, installs the event-emitting
 * middleware on their Mllp instance, calls serve(), and streams
 * structured events to stdout as JSON lines. On any failure, a
 * terminal `fatal` event is emitted and the process exits 1.
 *
 * Never imported by other source files; directly executed as a script.
 */

import { readFile, stat } from "node:fs/promises";
import { performance } from "node:perf_hooks";

import { Mllp } from "@rethinkhealth/hl7v2-mllp";
import type {
  ConnectionInfo,
  Context,
  MessageInfo,
  Middleware,
  Response,
} from "@rethinkhealth/hl7v2-mllp";
import { serve } from "@rethinkhealth/hl7v2-mllp/node";
import type { Server } from "@rethinkhealth/hl7v2-mllp/node";

import { GlionError } from "../errors.js";
import { loadTsModule } from "../loader.js";
import { resolveConfig } from "../resolve-config.js";
import { createEmitter } from "./emitter.js";

const emit = createEmitter(process.stdout);

async function main(): Promise<void> {
  const configPathArg = process.argv[2];
  if (!configPathArg) {
    throw new GlionError(
      "config-not-found",
      "Child runner invoked without a config path argument."
    );
  }

  const cwd = process.argv[3] ?? process.cwd();

  // Load config. The parent already validated; the child re-resolves
  // independently so it owns its own state and can also be run directly.
  //
  // When the parent uses a synthesized (zero-config) setup, configPathArg
  // is the project cwd (a directory), not a config file — search from
  // that directory rather than loading it as an explicit file.
  const isDir = await isDirectory(configPathArg);
  const config = isDir
    ? await resolveConfig({ cwd: configPathArg })
    : await resolveConfig({ cwd, explicitPath: configPathArg });

  // Load the user's entry file (default-exports an Mllp instance).
  const app = await loadEntry(config.entry);

  // Install the event-emitting middleware last so it sits as the
  // innermost wrapper and measures only the handler's own time.
  installMsgEventMiddleware(app);

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

  const server: Server = serve(app, {
    port: config.port,
    hostname: config.hostname,
    tls,
    keepAlive: config.keepAlive,
    keepAliveInitialDelay: config.keepAliveInitialDelay,
    socketTimeout: config.socketTimeout,
    onConnect: (conn: ConnectionInfo) => {
      emit({
        t: "conn.open",
        id: conn.id,
        remote: `${conn.remoteAddress}:${conn.remotePort}`,
      });
    },
    onDisconnect: (conn: ConnectionInfo) => {
      emit({ t: "conn.close", id: conn.id });
    },
    onError: (
      err: Error,
      conn: ConnectionInfo,
      info: MessageInfo | undefined
    ) => {
      emit({
        t: "error",
        conn: conn.id,
        trigger: info ? `${info.messageType}^${info.triggerEvent}` : undefined,
        message: err.message,
        stack: err.stack,
      });
    },
  });

  try {
    await server.listening;
  } catch (error) {
    throw classifyListenError(error, config.port, config.hostname);
  }

  emit({
    t: "ready",
    port: server.port,
    tls: !!config.tls,
    pid: process.pid,
  });

  installShutdownHandlers(server);
}

function installShutdownHandlers(server: Server): void {
  let shuttingDown = false;
  const shutdown = async (signal: string): Promise<void> => {
    if (shuttingDown) {
      return;
    }
    shuttingDown = true;
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

async function isDirectory(path: string): Promise<boolean> {
  try {
    const info = await stat(path);
    return info.isDirectory();
  } catch {
    return false;
  }
}

async function loadEntry(entryPath: string): Promise<Mllp> {
  let value: unknown;
  try {
    value = await loadTsModule(entryPath);
  } catch (error) {
    throw new GlionError(
      "entry-load-failed",
      `Failed to load entry file ${entryPath}: ${
        error instanceof Error ? error.message : String(error)
      }`,
      { entry: entryPath },
      "Check the file path and that it compiles without errors.",
      error
    );
  }
  if (!(value instanceof Mllp)) {
    throw new GlionError(
      "entry-not-mllp-instance",
      `The default export of ${entryPath} must be an Mllp instance.`,
      { entry: entryPath, actualType: typeof value },
      `Change your entry file to:
  import { Mllp } from "@rethinkhealth/hl7v2-mllp";
  export default new Mllp().parser(...).on("ADT^A01", ...);`
    );
  }
  return value;
}

function classifyListenError(
  error: unknown,
  port: number,
  hostname: string
): GlionError {
  const code = (error as { code?: unknown } | null)?.code;
  if (code === "EADDRINUSE") {
    return new GlionError(
      "port-in-use",
      `Port ${port} on ${hostname} is already in use.`,
      { port, hostname, code },
      "Stop the other process using this port, or set a different port in glion.config.ts.",
      error
    );
  }
  return new GlionError(
    "child-crashed",
    `Failed to bind ${hostname}:${port}: ${
      error instanceof Error ? error.message : String(error)
    }`,
    { port, hostname, code },
    undefined,
    error
  );
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
    const trigger = `${ctx.messageType ?? "?"}^${ctx.triggerEvent ?? "?"}`;
    emit({
      t: "msg",
      conn: ctx.connection.id,
      remote: `${ctx.connection.remoteAddress}:${ctx.connection.remotePort}`,
      trigger,
      control: ctx.controlId ?? "?",
      pattern: null,
      ack,
      ms: Math.round(ms * 1000) / 1000,
    });
  };
  app.use(middleware);
}

// HL7v2 segments are separated by \r, so MSA follows \r or the start
// of the message. `.exec()` is cheap on the ACK response hot path.
const MSA_PATTERN = /(?:^|\r)MSA\|([A-Z]{2})\|/;

function parseAckCode(raw: string | undefined): "AA" | "AE" | "AR" | null {
  if (!raw) {
    return null;
  }
  const match = MSA_PATTERN.exec(raw);
  const code = match?.[1];
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
