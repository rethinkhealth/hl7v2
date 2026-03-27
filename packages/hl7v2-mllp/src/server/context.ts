import type { Root } from "@rethinkhealth/hl7v2-ast";
import { value as queryValue } from "@rethinkhealth/hl7v2-util-query";
import { VFile } from "vfile";

import type {
  ConnectionInfo,
  Context,
  Hl7v2Processor,
  Response,
} from "./types";

/**
 * Options for creating a Context instance.
 */
export interface CreateContextOptions {
  /** Raw HL7 message string */
  raw: string;
  /** Raw bytes from the MLLP frame payload */
  bytes: Uint8Array;
  /** Connection metadata */
  connection: ConnectionInfo;
  /** HL7v2 unified processor */
  processor: Hl7v2Processor;
}

/**
 * Create a new Context for an incoming message.
 *
 * Only the **parse** step runs eagerly (sync, fast). Routing fields are
 * extracted from the pre-transform parsed tree — this is the raw truth
 * from the wire, independent of transformer configuration (see ADR-0013).
 *
 * The expensive pipeline stages are lazy:
 *
 * - `ctx.tree()` — triggers `run()` (transformers: annotations, escape
 *   decoding, lint). Cached after first call.
 * - `ctx.result()` — triggers `run()` + `stringify()` (compilation,
 *   e.g., JSON via hl7v2Jsonify). Cached after first call.
 *
 * If no handler matches or middleware short-circuits before accessing
 * the tree, the transform and compile steps never execute.
 */
export function createContext(options: CreateContextOptions): Context {
  const { raw, bytes, connection, processor } = options;
  const variables = new Map<string, unknown>();
  let varSnapshot: Readonly<Record<string, unknown>> | undefined;

  // ── Eager: parse (sync, fast) ──────────────────────────────────────
  // VFile carries the input through the pipeline and collects diagnostics.
  const file = new VFile(raw);
  const parsed = processor.parse(file);

  // Extract routing fields from the pre-transform tree.
  // These are always available synchronously and reflect what the
  // sending system actually sent — not what transformers may change.
  const controlId = queryValue(parsed, "MSH-10")?.value ?? "";
  const messageType = queryValue(parsed, "MSH-9.1")?.value ?? "";
  const triggerEvent = queryValue(parsed, "MSH-9.2")?.value ?? "";
  const messageStructure = queryValue(parsed, "MSH-9.3")?.value ?? "";
  const version = queryValue(parsed, "MSH-12")?.value ?? "";

  // ── Lazy: transform (async, cached) ────────────────────────────────
  // run() applies all transformers: annotations, escape decoding, lint.
  // Only executes on first call to ctx.tree() or ctx.result().
  let transformedTree: Root | undefined;
  let transformPromise: Promise<Root> | undefined;

  function getTree(): Promise<Root> {
    if (transformedTree) {
      return Promise.resolve(transformedTree);
    }
    if (!transformPromise) {
      transformPromise = (async () => {
        const result = await processor.run(parsed, file);
        transformedTree = result;
        return result;
      })();
    }
    return transformPromise;
  }

  // ── Lazy: compile (async, cached) ──────────────────────────────────
  // stringify() compiles the tree into the final format (e.g., JSON).
  // Only executes on first call to ctx.result(). Requires tree first.
  let compiledResult: unknown | undefined;
  let compiled = false;

  async function getResult(): Promise<unknown | undefined> {
    if (compiled) {
      return compiledResult;
    }
    const tree = await getTree();
    if (processor.compiler) {
      compiledResult = processor.stringify(tree, file);
    }
    compiled = true;
    return compiledResult;
  }

  // ── Build context ──────────────────────────────────────────────────
  const ctx: Context = {
    ast: parsed,
    connection: Object.freeze(connection),
    controlId,
    file,
    get<K extends string>(key: K): unknown {
      return variables.get(key);
    },
    messageStructure,
    messageType,
    req: Object.freeze({ bytes, raw }),
    res: undefined as Response | undefined,
    result: getResult,
    set<K extends string>(key: K, value: unknown): void {
      variables.set(key, value);
      varSnapshot = undefined;
    },
    tree: getTree,
    triggerEvent,
    get var(): Readonly<Record<string, unknown>> {
      if (!varSnapshot) {
        varSnapshot = Object.freeze(Object.fromEntries(variables));
      }
      return varSnapshot;
    },
    version,
  };

  return ctx;
}
