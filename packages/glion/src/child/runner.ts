/**
 * Child process entry point for `glion dev` and `glion start`.
 *
 * ## How it's invoked
 *
 * The parent supervisor spawns this script as a subprocess:
 *
 *     process.execPath  dist/child/runner.js  .glion/manifest.json
 *           │                   │                     │
 *           ▼                   ▼                     ▼
 *       Node/Bun/Deno      this file         sole input argument
 *
 * The manifest JSON (written by the parent's `prepareChild()`)
 * contains everything the child needs: compiled entry path, port,
 * hostname, TLS paths, and socket options. The child never discovers
 * or compiles anything — it trusts the parent's pre-built output.
 *
 * ## Communication model
 *
 *     child stdout ──→ parent (structured JSON events, one per line)
 *     child stderr ──→ parent (raw text, surfaced as warning events)
 *     parent ──────X── child (no reverse channel)
 *
 * All communication is one-directional: child → parent via stdout.
 * The parent controls the child's lifecycle through OS signals
 * (SIGTERM for graceful shutdown, SIGKILL as escalation).
 *
 * ## Lifecycle
 *
 *     1. Read manifest JSON from argv[2]
 *     2. Import the pre-built entry module → Mllp instance
 *     3. Install the msg event middleware (telemetry)
 *     4. Start the MLLP server (TCP bind)
 *     5. Emit "ready" event with the actual bound port
 *     6. Install SIGTERM/SIGINT shutdown handlers
 *     7. Serve until signaled to stop
 *
 * ## Error strategy
 *
 * Every error is caught and converted to a structured `fatal` event
 * via `fatalEvent()` before exit. The parent's supervisor classifies
 * the exit and decides whether to respawn (dev) or propagate (start).
 * The child never silently dies — there is always a machine-readable
 * event explaining what went wrong.
 *
 * Never imported by other source files; directly executed as a script.
 */

import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

import { Mllp } from "@rethinkhealth/hl7v2-mllp";
import type { ConnectionInfo, MessageInfo } from "@rethinkhealth/hl7v2-mllp";
import { serve } from "@rethinkhealth/hl7v2-mllp/node";
import type { Server } from "@rethinkhealth/hl7v2-mllp/node";

import { GlionError } from "../errors.js";
import { fatalEvent } from "../events.js";
import type { ChildManifest } from "../types.js";
import { installConsoleCapture } from "./console.js";
import { createEmitter } from "./emitter.js";
import { createMsgTelemetry } from "./middlewares.js";

// ── Emitter ──────────────────────────────────────────────────────
// Created once at module scope. Every function in this file calls
// emit() to send structured events to the parent via stdout.
const emit = createEmitter(process.stdout);

// ── Console capture ──────────────────────────────────────────────
// Intercept console.log/info/warn/error BEFORE loading user code so
// all output becomes structured log events instead of raw text that
// would corrupt the JSON event stream.
installConsoleCapture(emit);

// ── Orphan detection ─────────────────────────────────────────────
// The parent pipes stdin to the child. If the parent crashes or is
// killed, the pipe closes and stdin emits "end". We self-exit so
// the child doesn't become an orphan holding the TCP port forever.
process.stdin.resume();
process.stdin.on("end", () => {
  process.exit(1);
});

// ── Main ─────────────────────────────────────────────────────────

async function main(): Promise<void> {
  // Step 1: Read the manifest — the child's sole input.
  // The parent wrote this JSON to .glion/manifest.json containing
  // the compiled entry path and all server configuration.
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

  // Step 2: Import the pre-built entry module.
  // The parent compiled the user's glion.app.ts (and its local
  // imports) into a single .js file via rolldown build(). We load
  // it with native import() — no jiti, no runtime TS compilation.
  const app = await loadEntry(manifest.compiledEntry);

  // Step 3: Install the telemetry middleware.
  // This wraps every MLLP message handler to emit a "msg" event
  // with timing, trigger, control ID, and ACK code. Installed last
  // (innermost) so it measures only the user's handler time.
  app.use(createMsgTelemetry(emit));

  // Step 4: Read TLS certificates (if configured).
  // Paths are absolute (resolved by the parent's config loader).
  // Errors here produce a clear "tls-read-failed" GlionError with
  // the specific field that failed (cert, key, or ca).
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

  // Step 5: Start the MLLP server.
  // serve() creates a TCP server, binds it, and returns a Server
  // handle. Connection and error callbacks emit events for the
  // parent to display in the TUI or log as JSON lines.
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

  // Step 6: Wait for the server to bind.
  // server.listening resolves once the TCP socket is bound. If the
  // port is in use (EADDRINUSE) or permissions are wrong (EACCES),
  // classifyListenError wraps it in a descriptive GlionError.
  try {
    await server.listening;
  } catch (error) {
    throw classifyListenError(error, manifest.port, manifest.hostname);
  }

  // Step 7: Announce readiness.
  // This is the critical event the parent's supervisor waits for.
  // Until "ready" arrives, the supervisor considers the child to be
  // in the startup phase — a crash here is a startup-crash (no
  // respawn). After "ready", the supervisor's stability timer starts.
  emit({
    t: "ready",
    port: server.port,
    tls: !!manifest.tls,
    pid: process.pid,
  });

  // Step 8: Install signal handlers for graceful shutdown.
  // From here, the server runs until SIGTERM/SIGINT arrives from
  // the parent supervisor (or the user directly).
  installShutdownHandlers(server);
}

// ── Entry loading ────────────────────────────────────────────────

/**
 * Imports the pre-built entry module and validates it exports an
 * Mllp instance.
 *
 * The import uses `pathToFileURL` because Node's `import()` on
 * Windows requires `file://` URLs — bare absolute paths fail.
 *
 * The `instanceof Mllp` check ensures the user's entry file
 * actually exports a configured MLLP app, not an arbitrary object.
 * This catches the common mistake of forgetting `export default`.
 */
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
      "The default export of the entry file must be an Mllp instance.",
      { entry: compiledEntryPath, actualType: typeof value },
      `Change your entry file to:
  import { Mllp } from "@rethinkhealth/hl7v2-mllp";
  export default new Mllp().parser(...).on("ADT^A01", ...);`
    );
  }
  return value;
}

// ── Shutdown ─────────────────────────────────────────────────────

/**
 * Registers SIGTERM and SIGINT handlers for graceful shutdown.
 *
 * The shutdown sequence:
 * 1. Emit "closing" — parent TUI updates status
 * 2. server.close() — stops accepting new connections, waits for
 * in-flight messages to complete
 * 3. Emit "closed" — confirms the server is fully wound down
 * 4. Emit "exit" — final event with exit code and signal
 * 5. process.exit(0) — clean exit
 *
 * The `shuttingDown` guard prevents double-shutdown if both SIGTERM
 * and SIGINT arrive in rapid succession (common when a process
 * manager sends SIGTERM and the user also hits Ctrl-C).
 *
 * If server.close() throws (stuck connection, socket error), we
 * emit an error event and exit 1 so the parent knows the shutdown
 * was not clean.
 */
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

// ── Error classification ─────────────────────────────────────────

/**
 * Converts a raw TCP bind error into a descriptive GlionError.
 *
 * EADDRINUSE is the most common failure — another process holds the
 * port. The hint tells the user exactly what to do. All other bind
 * errors (EACCES for privileged ports, EADDRNOTAVAIL for invalid
 * hostname) get a generic message with the underlying error.
 */
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

// ── TLS helpers ──────────────────────────────────────────────────

/**
 * Reads a file or throws a descriptive GlionError. Used for TLS
 * cert/key/ca files where a missing or unreadable file should
 * produce a clear error, not a generic ENOENT.
 */
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

// ── Telemetry middleware ──────────────────────────────────────────

// ── Top-level execution ──────────────────────────────────────────
// This file is executed as a script (not imported). The top-level
// await runs main() and catches any unhandled error, converting it
// to a structured fatal event so the parent always gets a machine-
// readable explanation of what went wrong.

try {
  await main();
} catch (error) {
  emit(fatalEvent(error));
  process.exit(1);
}
