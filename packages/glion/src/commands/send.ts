/**
 * `glion send` — send one HL7v2 message over MLLP and report the ACK.
 *
 * It exposes the pure `parseSendArgs` parser (exhaustively unit-testable
 * without IO) plus the `runSend` handler that wires target resolution, message
 * reading, the MLLP exchange, and rendering together.
 */

import { readFile } from "node:fs/promises";

import { AckException } from "@glion/ack";
import type { Root } from "@glion/ast";
import {
  MllpClient,
  MllpClientError,
  MllpInvalidMessageError,
} from "@glion/mllp-client";
import type { MllpClientOptions, MllpSocket } from "@glion/mllp-client";
import { nodeSocket } from "@glion/mllp-client/node";
import { parseHL7v2 } from "@glion/parser";
import { EscapeSequenceError, toHl7v2 } from "@glion/to-hl7v2";
import { value } from "@glion/util-query";

import { MAX_PORT } from "../constants";
import { renderHuman, renderJson } from "./send-render";
import type {
  SendOutcome,
  SendRequestSummary,
  SendTarget,
} from "./send-render";
import { resolveTarget } from "./send-target";

/** Connect + ACK-wait deadline used when `--timeout` is omitted. */
export const DEFAULT_SEND_TIMEOUT_MS = 30_000;

/**
 * Parsed `glion send` invocation.
 *
 * - `file` — positional message source. `undefined` or `"-"` both mean "read from
 *   stdin"; the handler treats them identically.
 * - `host` / `port` — the target to send to.
 * - `timeoutMs` — deadline spanning connect + ACK wait.
 * - `json` — force JSON output even on a TTY.
 * - `help` — print subcommand help instead of sending.
 */
export interface SendArgs {
  file?: string;
  host?: string;
  port?: number;
  timeoutMs?: number;
  json: boolean;
  help: boolean;
}

export type ParseSendResult =
  | { ok: true; args: SendArgs }
  | { ok: false; error: string };

/**
 * Reads the token after a value flag at `index`, treating an end-of-argv, an
 * empty token, and a following `-`-prefixed token as "no value supplied". A
 * returned `string` is the captured value; a `{ error }` object is a usage
 * failure.
 */
function takeFlagValue(
  argv: readonly string[],
  index: number,
  flag: string
): string | { error: string } {
  const next = argv[index + 1];
  if (next === undefined || next === "" || next.startsWith("-")) {
    return { error: `${flag} requires a value` };
  }
  return next;
}

/**
 * Reads the positive integer value of a flag at `index`. Folds the
 * missing-value, non-integer, and zero checks into one call so the parse loop
 * carries a single guard per integer flag.
 */
function takeIntFlagValue(
  argv: readonly string[],
  index: number,
  flag: string
): number | { error: string } {
  const raw = takeFlagValue(argv, index, flag);
  if (typeof raw === "object") {
    return raw;
  }
  if (!/^\d+$/.test(raw)) {
    return { error: `${flag} requires an integer value, got: ${raw}` };
  }
  const parsed = Number.parseInt(raw, 10);
  if (parsed === 0) {
    return { error: `${flag} requires a positive integer, got: 0` };
  }
  return parsed;
}

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
  const parsed = takeIntFlagValue(argv, index, "--port");
  if (typeof parsed === "object") {
    return parsed;
  }
  if (parsed > MAX_PORT) {
    return {
      error: `--port requires a port between 1 and ${MAX_PORT}, got: ${parsed}`,
    };
  }
  return parsed;
}

/**
 * Pure parser for the argv that follows the `send` subcommand token.
 *
 * Mirrors the return shape and style of `parseArgs` in `run.ts`: a
 * left-to-right scan, value flags consuming the next token, unknown
 * `-`-prefixed tokens rejected, and at most one positional accepted.
 * It never throws and never touches process state.
 */
// oxlint-disable-next-line complexity/complexity -- left-to-right flag scan: one branch per flag
export function parseSendArgs(argv: readonly string[]): ParseSendResult {
  const positional: string[] = [];
  let host: string | undefined;
  let port: number | undefined;
  let timeoutMs: number | undefined;
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
    if (arg === "--timeout") {
      const parsed = takeIntFlagValue(argv, i, "--timeout");
      if (typeof parsed === "object") {
        return { error: parsed.error, ok: false };
      }
      timeoutMs = parsed;
      i += 1;
      continue;
    }
    // The bare "-" sentinel is a positional meaning "read from stdin",
    // not an unknown flag — accept it before the flag-rejection branch.
    if (arg !== "-" && arg.startsWith("-")) {
      return { error: `Unknown flag: ${arg}`, ok: false };
    }
    positional.push(arg);
  }

  if (positional.length > 1) {
    return { error: `Unexpected argument: ${positional[1]}`, ok: false };
  }

  // "-" and absence both mean stdin; collapse the sentinel to undefined
  // so the handler has a single "no file" representation.
  const rawFile = positional[0];
  const file = rawFile === undefined || rawFile === "-" ? undefined : rawFile;

  return {
    args: { file, help, host, json, port, timeoutMs },
    ok: true,
  };
}

const ENCODER = new TextEncoder();

const SEND_HELP_TEXT = `glion send — send one HL7v2 message over MLLP and print the ACK

Usage:
  glion send [<file>] [flags]

Message source:
  <file>                 path to an HL7v2 message file
                         omit it (or pass "-") to read the message from stdin

Target:
  --host <host>          target host
  --port <port>          target port; defaults to 2575, the MLLP standard

Options:
  --timeout <ms>         deadline spanning connect + ACK wait (default 30000)
  --json                 print one JSON line instead of the human exchange view
  -h, --help             show this help

Exit codes:
  0  the peer accepted the message (AA/CA)
  1  the peer rejected the message (NAK: AE/AR/CE/CR)
  2  the message could not be delivered (transport, validation, or usage error)

TLS targets are not supported yet.
`;

export interface RunSendOptions {
  argv: readonly string[];
  stdout?: NodeJS.WritableStream;
  stderr?: NodeJS.WritableStream;
  /** Runtime socket; injectable for tests. Defaults to the Node TCP adapter. */
  socket?: MllpSocket;
  /** Reconnect policy; injectable for tests. Defaults to the client's. */
  reconnect?: MllpClientOptions["reconnect"];
  /** Stdin source used when no file is given; injectable for tests. */
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

/** Read a readable stream to a UTF-8 string (used for stdin). */
async function readStream(stream: NodeJS.ReadableStream): Promise<string> {
  stream.setEncoding("utf8");
  let data = "";
  for await (const chunk of stream) {
    data += chunk;
  }
  return data;
}

/** The message source's text, or why it could not be read. */
type ReadResult = { ok: true; text: string } | { ok: false; reason: string };

/** Reads the message source `args` names, or standard input when it names none. */
async function readMessageText(
  args: SendArgs,
  opts: RunSendOptions
): Promise<ReadResult> {
  try {
    const text =
      args.file === undefined
        ? await readStream(opts.stdin ?? process.stdin)
        : await readFile(args.file, "utf8");
    return { ok: true, text };
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    return { ok: false, reason: `Could not read the message: ${reason}` };
  }
}

/**
 * Maps a failed exchange to its outcome. A NAK, a message the client could
 * not prepare, and a transport failure are outcomes; anything else is a bug
 * and propagates.
 */
function sendErrorOutcome(
  error: unknown,
  exchange: {
    request: SendRequestSummary;
    target: SendTarget;
    startedAt: number;
  }
): SendOutcome {
  const { request, target, startedAt } = exchange;
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
  throw error;
}

/**
 * `glion send` handler. Resolves the target, reads and structurally gates the
 * message, sends it over MLLP, and renders the outcome — the human exchange
 * view on a TTY, otherwise a single JSON line. Returns the process exit code;
 * it never calls process.exit, mirroring runDev/runStart.
 */
export async function runSend(opts: RunSendOptions): Promise<number> {
  const stdout = opts.stdout ?? process.stdout;
  const stderr = opts.stderr ?? process.stderr;

  const parsed = parseSendArgs(opts.argv);
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

  const resolved = resolveTarget(args);
  if (!resolved.ok) {
    return emit({ kind: "invalid", message: resolved.reason });
  }
  const target = { host: resolved.host, port: resolved.port };

  const read = await readMessageText(args, opts);
  if (!read.ok) {
    return emit({ kind: "invalid", message: read.reason, target });
  }

  // Parse to a tree, then re-serialize to canonical, CR-delimited form. The
  // parser is lenient — it never rejects — so this only normalizes the wire
  // bytes (line endings in particular); whether the message is a *valid* HL7v2
  // message is the receiver's call, surfaced as a NAK. We do not pre-validate.
  const tree = parseHL7v2(read.text);
  const prepared = prepareRequest(tree);
  if (!prepared.ok) {
    return emit({ kind: "invalid", message: prepared.reason, target });
  }
  const { request } = prepared;
  const timeoutMs = args.timeoutMs ?? DEFAULT_SEND_TIMEOUT_MS;

  let client: MllpClient | undefined;
  let startedAt = performance.now();
  try {
    client = new MllpClient({
      connectTimeoutMs: timeoutMs,
      reconnect: opts.reconnect,
      sendTimeoutMs: timeoutMs,
      socket:
        opts.socket ?? nodeSocket({ host: target.host, port: target.port }),
    });
    await client.connect();
    startedAt = performance.now();
    const res = await client.send(tree, { timeoutMs });
    return emit({
      ackControlId: res.controlId,
      code: res.code,
      durationMs: performance.now() - startedAt,
      kind: "accept",
      request,
      target,
      text: res.text,
    });
  } catch (error) {
    return emit(sendErrorOutcome(error, { request, startedAt, target }));
  } finally {
    await client?.close();
  }
}

/** The request a message becomes on the wire, or why it cannot be sent. */
type RequestResult =
  | { ok: true; request: SendRequestSummary }
  | { ok: false; reason: string };

/**
 * The request `tree` becomes on the wire, or why it cannot be sent.
 *
 * Writing the message is what can fail: the delimiters MSH-1 and MSH-2 declare
 * may leave a character of its own with no escape sequence to write it.
 */
function prepareRequest(tree: Root): RequestResult {
  try {
    const canonical = toHl7v2(tree);
    return {
      ok: true,
      request: {
        byteCount: ENCODER.encode(canonical).length,
        controlId: value(tree, "MSH.10.1")?.value ?? "",
        segmentCount: tree.children.length,
      },
    };
  } catch (error) {
    if (error instanceof EscapeSequenceError) {
      return { ok: false, reason: error.message };
    }
    throw error;
  }
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
