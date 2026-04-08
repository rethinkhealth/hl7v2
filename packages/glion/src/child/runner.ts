/**
 * Child process entry point for `glion dev` and `glion start`.
 *
 * Invoked by the parent via:
 * child_process.spawn(process.execPath, [this-file, manifestPath], ...)
 *
 * The parent pre-builds config and entry files into `.glion/` and writes
 * a manifest JSON with server options + compiled entry path. The child
 * reads the manifest, imports the compiled entry, and starts the server.
 *
 * Never imported by other source files; directly executed as a script.
 */

import { readFile } from "node:fs/promises";
import { performance } from "node:perf_hooks";
import { pathToFileURL } from "node:url";

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
import type { ChildManifest } from "../types.js";
import { createEmitter } from "./emitter.js";

const emit = createEmitter(process.stdout);

async function main(): Promise<void> {
  const manifestPath = process.argv[2];
  if (!manifestPath) {
    throw new GlionError(
      "config-not-found",
      "Child runner invoked without a manifest path argument."
    );
  }

  const manifest: ChildManifest = JSON.parse(
    await readFile(manifestPath, "utf8")
  );

  const app = await loadEntry(manifest.compiledEntry);
  installMsgEventMiddleware(app);

  const tls = manifest.tls
    ? {
        cert: await readFileOrThrow(manifest.tls.cert, "tls.cert"),
        key: await readFileOrThrow(manifest.tls.key, "tls.key"),
        ca: manifest.tls.ca
          ? await readFileOrThrow(manifest.tls.ca, "tls.ca")
          : undefined,
        passphrase: manifest.tls.passphrase,
      }
    : undefined;

  const server: Server = serve(app, {
    port: manifest.port,
    hostname: manifest.hostname,
    tls,
    keepAlive: manifest.keepAlive,
    keepAliveInitialDelay: manifest.keepAliveInitialDelay,
    socketTimeout: manifest.socketTimeout,
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
    throw classifyListenError(error, manifest.port, manifest.hostname);
  }

  emit({
    t: "ready",
    port: server.port,
    tls: !!manifest.tls,
    pid: process.pid,
  });

  installShutdownHandlers(server);
}

async function loadEntry(compiledEntryPath: string): Promise<Mllp> {
  let value: unknown;
  try {
    const mod = (await import(pathToFileURL(compiledEntryPath).href)) as {
      default?: unknown;
    };
    value = mod.default ?? mod;
  } catch (error) {
    throw new GlionError(
      "entry-load-failed",
      `Failed to load compiled entry ${compiledEntryPath}: ${
        error instanceof Error ? error.message : String(error)
      }`,
      { entry: compiledEntryPath },
      "Check the entry file path and that it compiles without errors.",
      error
    );
  }
  if (!(value instanceof Mllp)) {
    throw new GlionError(
      "entry-not-mllp-instance",
      `The default export of the entry file must be an Mllp instance.`,
      { entry: compiledEntryPath, actualType: typeof value },
      `Change your entry file to:
  import { Mllp } from "@rethinkhealth/hl7v2-mllp";
  export default new Mllp().parser(...).on("ADT^A01", ...);`
    );
  }
  return value;
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
