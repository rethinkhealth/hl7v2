/**
 * `glion send` — send HL7v2 messages over MLLP and report each ACK.
 *
 * It exposes the pure `parseSendArgs` parser (exhaustively unit-testable
 * without IO) plus the `runSend` handler that wires project resolution,
 * message reading, the MLLP exchanges, and rendering together.
 *
 * @module
 */

import { AckException } from "@glion/ack";
import type { Root } from "@glion/ast";
import {
  MllpClient,
  MllpClientError,
  MllpInvalidMessageError,
} from "@glion/mllp-client";
import type { MllpSocket } from "@glion/mllp-client";
import { nodeSocket } from "@glion/mllp-client/node";
import { parseHL7v2 } from "@glion/parser";
import { toHl7v2 } from "@glion/to-hl7v2";
import { value } from "@glion/util-query";

import { readMessages, STDIN_SOURCE } from "./send-messages";
import { renderHuman, renderJson, renderSummary } from "./send-render";
import type {
  SendOutcome,
  SendRequestSummary,
  SendTarget,
} from "./send-render";
import { resolveProject } from "./send-target";

/**
 * Parsed `glion send` invocation.
 *
 * - `sources` — message sources in argument order: file paths, or `"-"` for
 *   stdin. `["-"]` when no positional was given.
 * - `host` / `port` — explicit target. When `--local` is set these override the
 *   individual fields derived from the config.
 * - `local` — derive host/port from the project's `glion.config.ts`.
 * - `configPath` — config file to load instead of discovering one in `cwd`.
 * - `json` — force JSON output even on a TTY.
 * - `help` — print subcommand help instead of sending.
 */
export interface SendArgs {
  sources: string[];
  host?: string;
  port?: number;
  local: boolean;
  configPath?: string;
  json: boolean;
  help: boolean;
}

export type ParseSendResult =
  | { ok: true; args: SendArgs }
  | { ok: false; error: string };

/**
 * Reads the token after a value flag at `index`, treating an end-of-argv
 * or a following `-`-prefixed token as "no value supplied". A returned
 * `string` is the captured value; a `{ error }` object is a usage failure.
 */
function takeFlagValue(
  argv: readonly string[],
  index: number,
  flag: string
): string | { error: string } {
  const next = argv[index + 1];
  if (next === undefined || next.startsWith("-")) {
    return { error: `${flag} requires a value` };
  }
  return next;
}

/** The highest port number a target can have. */
const MAX_PORT = 65_535;

/**
 * Reads the port value of `--port` at `index`. Folds the missing-value,
 * non-integer, and out-of-range checks into one call so the parse loop carries
 * a single guard for the flag — and so a port no host can listen on is
 * rejected here, not after a dial that cannot succeed.
 */
function takePortValue(
  argv: readonly string[],
  index: number
): number | { error: string } {
  const raw = takeFlagValue(argv, index, "--port");
  if (typeof raw === "object") {
    return raw;
  }
  if (!/^\d+$/.test(raw)) {
    return { error: `--port requires an integer value, got: ${raw}` };
  }
  const parsed = Number.parseInt(raw, 10);
  if (parsed < 1 || parsed > MAX_PORT) {
    return {
      error: `--port requires a port between 1 and ${MAX_PORT}, got: ${raw}`,
    };
  }
  return parsed;
}

/**
 * Pure parser for the argv that follows the `send` subcommand token.
 *
 * `inheritedConfigPath` is the `--config` given before that token: the config
 * to load unless the argv names one of its own.
 *
 * Mirrors the return shape and style of `parseArgs` in `run.ts`: a
 * left-to-right scan, value flags consuming the next token, unknown
 * `-`-prefixed tokens rejected. Positionals are message sources, `"-"` at
 * most once. It never throws and never touches process state.
 */
// oxlint-disable-next-line complexity/complexity -- left-to-right flag scan: one branch per flag
export function parseSendArgs(
  argv: readonly string[],
  inheritedConfigPath?: string
): ParseSendResult {
  const positional: string[] = [];
  let host: string | undefined;
  let port: number | undefined;
  let local = false;
  let configPath = inheritedConfigPath;
  let json = false;
  let help = false;

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i] as string;

    if (arg === "--help" || arg === "-h") {
      help = true;
      continue;
    }
    if (arg === "--json") {
      json = true;
      continue;
    }
    if (arg === "--local") {
      local = true;
      continue;
    }
    if (arg === "--host") {
      const flagValue = takeFlagValue(argv, i, "--host");
      if (typeof flagValue === "object") {
        return { error: flagValue.error, ok: false };
      }
      host = flagValue;
      i += 1;
      continue;
    }
    if (arg === "--port") {
      const parsed = takePortValue(argv, i);
      if (typeof parsed === "object") {
        return { error: parsed.error, ok: false };
      }
      port = parsed;
      i += 1;
      continue;
    }
    if (arg === "--config") {
      const flagValue = takeFlagValue(argv, i, "--config");
      if (typeof flagValue === "object") {
        return { error: flagValue.error, ok: false };
      }
      configPath = flagValue;
      i += 1;
      continue;
    }
    // The bare "-" sentinel is a positional meaning "read from stdin",
    // not an unknown flag — accept it before the flag-rejection branch.
    if (arg !== STDIN_SOURCE && arg.startsWith("-")) {
      return { error: `Unknown flag: ${arg}`, ok: false };
    }
    if (arg === STDIN_SOURCE && positional.includes(STDIN_SOURCE)) {
      return { error: "stdin (-) can be given only once", ok: false };
    }
    positional.push(arg);
  }

  const sources = positional.length === 0 ? [STDIN_SOURCE] : positional;
  return {
    args: { configPath, help, host, json, local, port, sources },
    ok: true,
  };
}

const ENCODER = new TextEncoder();

const SEND_HELP_TEXT = `glion send — send HL7v2 messages over MLLP and print each ACK

Usage:
  glion send [<file>...] [flags]

Message sources:
  <file>                 path to an HL7v2 message file; several may be given
                         omit them (or pass "-") to read from stdin
                         a source may hold several messages: each starts at a
                         line beginning with MSH; all go over one connection

Target:
  --host <host>          target host
  --port <port>          target port; defaults to 2575, the MLLP standard
  --local                read host/port from glion.config.ts (this project's
                         server); --host/--port override individual fields

Options:
  --config <path>        config file to load instead of discovering one in cwd
  --json                 print one JSON line instead of the human exchange view
  -h, --help             show this help

Timeouts and the dial policy come from \`client\` in glion.config.ts:
  client: { connectTimeoutMs, sendTimeoutMs, reconnect: { attempts, delay } | false }

Exit codes (the highest over the messages sent):
  0  the peer accepted the message (AA/CA)
  1  the peer rejected the message (NAK: AE/AR/CE/CR)
  2  the message could not be delivered (transport, validation, or usage error)

TLS targets are not supported yet.
`;

export interface RunSendOptions {
  argv: readonly string[];
  cwd: string;
  stdout?: NodeJS.WritableStream;
  stderr?: NodeJS.WritableStream;
  /** Runtime socket; injectable for tests. Defaults to the Node TCP adapter. */
  socket?: MllpSocket;
  /**
   * The `--config` path given before the `send` token. A `--config` among
   * `argv` — the subcommand's own flag — wins over it.
   */
  configPath?: string;
  /** The stream read for the `-` source; injectable for tests. */
  stdin?: NodeJS.ReadableStream;
}

function exitCodeFor(outcome: SendOutcome): number {
  switch (outcome.kind) {
    case "accept": {
      return 0;
    }
    case "nak": {
      return 1;
    }
    case "transport":
    case "invalid": {
      // Both mean "not delivered".
      return 2;
    }
  }
}

/** One message ready for the wire: its tree, and what the outcome reports. */
interface PreparedMessage {
  tree: Root;
  request: SendRequestSummary;
}

/**
 * Parses `text` to a tree and summarizes its canonical, CR-delimited form.
 * The parser never rejects; whether the message is valid HL7v2 is the
 * receiver's call, surfaced as a NAK.
 */
function prepare(text: string): PreparedMessage {
  const tree = parseHL7v2(text);
  const canonical = toHl7v2(tree);
  return {
    request: {
      byteCount: ENCODER.encode(canonical).length,
      controlId: value(tree, "MSH.10.1")?.value ?? "",
      segmentCount: tree.children.length,
    },
    tree,
  };
}

/** Sends one prepared message on `client` and reports its outcome. */
async function exchange(
  client: MllpClient,
  message: PreparedMessage,
  target: SendTarget
): Promise<SendOutcome> {
  const { request, tree } = message;
  const startedAt = performance.now();
  try {
    const res = await client.send(tree);
    return {
      ackControlId: res.controlId,
      code: res.code,
      durationMs: performance.now() - startedAt,
      kind: "accept",
      request,
      target,
      text: res.text,
    };
  } catch (error) {
    return sendErrorOutcome(error, { request, startedAt, target });
  }
}

/**
 * The outcome of every message, in order, over one connection.
 *
 * @yields One outcome per message, as its exchange completes. A connection
 *   that cannot be opened is the outcome of every message.
 * @throws Anything the client throws that is not an `MllpClientError`.
 */
async function* exchanges(
  client: MllpClient,
  messages: readonly PreparedMessage[],
  target: SendTarget
): AsyncGenerator<SendOutcome> {
  try {
    await client.connect();
  } catch (error) {
    if (!(error instanceof MllpClientError)) {
      throw error;
    }
    for (const { request } of messages) {
      yield transportOutcome(error, request, target);
    }
    return;
  }
  for (const message of messages) {
    yield await exchange(client, message, target);
  }
}

/** The `transport` outcome of `error` for the message `request` summarizes. */
function transportOutcome(
  error: MllpClientError,
  request: SendRequestSummary,
  target: SendTarget
): SendOutcome {
  return {
    cause: causeOf(error),
    code: error.code,
    delivery: error.delivery,
    kind: "transport",
    message: error.message,
    request,
    target,
  };
}

/**
 * Maps a failed exchange to its outcome. A NAK, a message the client could
 * not prepare, and a transport failure are outcomes; anything else is a bug
 * and propagates.
 */
function sendErrorOutcome(
  error: unknown,
  sent: {
    request: SendRequestSummary;
    target: SendTarget;
    startedAt: number;
  }
): SendOutcome {
  const { request, target, startedAt } = sent;
  if (error instanceof AckException) {
    return {
      ackControlId: error.controlId ?? "",
      code: error.code,
      durationMs: performance.now() - startedAt,
      errorCode: error.errorCode,
      kind: "nak",
      request,
      severity: error.severity,
      target,
      text: error.text,
    };
  }
  if (error instanceof MllpInvalidMessageError) {
    return {
      cause: causeOf(error),
      code: error.code,
      kind: "invalid",
      message: error.message,
      request,
      target,
    };
  }
  if (error instanceof MllpClientError) {
    return transportOutcome(error, request, target);
  }
  throw error;
}

/**
 * `glion send` handler. Resolves the project and the target, reads the
 * messages, sends them over one connection in order, and renders each
 * outcome as it arrives: the human exchange view on a TTY, otherwise one JSON
 * line per message. Returns the highest exit code among the messages; it
 * never calls `process.exit`.
 */
export async function runSend(opts: RunSendOptions): Promise<number> {
  const stdout = opts.stdout ?? process.stdout;
  const stderr = opts.stderr ?? process.stderr;

  const parsed = parseSendArgs(opts.argv, opts.configPath);
  if (!parsed.ok) {
    stderr.write(`glion send: ${parsed.error}\n\n${SEND_HELP_TEXT}`);
    return 2;
  }
  const { args } = parsed;
  if (args.help) {
    stdout.write(SEND_HELP_TEXT);
    return 0;
  }

  // JSON when piped or explicitly requested; the human exchange view on a TTY.
  // `isTTY` lives on NodeJS.WriteStream, not the wider WritableStream type.
  const useJson = args.json || (stdout as { isTTY?: boolean }).isTTY !== true;
  const emit = (outcome: SendOutcome): number => {
    const line = useJson ? renderJson(outcome) : renderHuman(outcome);
    const isError = outcome.kind === "transport" || outcome.kind === "invalid";
    const sink = !useJson && isError ? stderr : stdout;
    sink.write(`${line}\n`);
    return exitCodeFor(outcome);
  };

  const project = await resolveProject(args, opts.cwd);
  if (!project.ok) {
    return emit({ kind: "invalid", message: project.reason });
  }
  const { config, target } = project;

  const read = await readMessages(args.sources, opts.stdin ?? process.stdin);
  if (!read.ok) {
    return emit({ kind: "invalid", message: read.reason, target });
  }
  if (read.messages.length === 0) {
    return emit({ kind: "invalid", message: "No HL7v2 message found", target });
  }
  const messages = read.messages.map(prepare);

  // The config schema bounds every `client` setting to what the client itself
  // accepts, so the constructor rejecting one here would be a bug, not a
  // report: it stays outside the try that reports the exchanges.
  const client = new MllpClient({
    ...config?.client,
    socket: opts.socket ?? nodeSocket({ host: target.host, port: target.port }),
  });
  const outcomes: SendOutcome[] = [];
  let exitCode = 0;
  try {
    for await (const outcome of exchanges(client, messages, target)) {
      outcomes.push(outcome);
      exitCode = Math.max(exitCode, emit(outcome));
    }
  } finally {
    await client.close();
  }
  if (!useJson && messages.length > 1) {
    stdout.write(`${renderSummary(outcomes)}\n`);
  }
  return exitCode;
}

/** The text of `error.cause`, when there is one. */
function causeOf(error: Error): string | undefined {
  if (error.cause === undefined) {
    return undefined;
  }
  return error.cause instanceof Error
    ? error.cause.message
    : String(error.cause);
}
