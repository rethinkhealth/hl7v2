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
 * Runs the unified processor pipeline manually — parse, run, stringify —
 * in a single pass. This is equivalent to `processor.process()` but lets
 * us retain the intermediate tree reference, which `process()` does not
 * expose.
 *
 */
export async function createContext(
  options: CreateContextOptions
): Promise<Context> {
  const { raw, bytes, connection, processor } = options;
  const variables = new Map<string, unknown>();
  let varSnapshot: Readonly<Record<string, unknown>> | undefined;

  // Step 1: Parse — tokenize the raw HL7v2 string into an AST.
  // VFile carries the input through the pipeline and collects diagnostics.
  const file = new VFile(raw);
  const parsed = processor.parse(file);

  // Step 2: Run — apply all transformers (annotations, escape decoding,
  // lint rules). The tree is transformed in place and diagnostics (lint
  // messages, warnings) accumulate on the VFile.
  const tree = await processor.run(parsed, file);

  // Step 3: Stringify — compile the tree into the final output format
  // (e.g., JSON via hl7v2Jsonify). Only runs if the processor has a
  // compiler registered. Without one, stringify() throws, so we skip it
  // and leave file.result as undefined. This is expected — a parse-only
  // processor (e.g., unified().use(hl7v2Parser)) produces a tree and
  // diagnostics but no compiled output.
  if (processor.compiler) {
    file.result = processor.stringify(tree, file);
  }

  const controlId = queryValue(tree, "MSH-10")?.value ?? "";

  const ctx: Context = {
    connection: Object.freeze(connection),
    controlId,
    file,
    get<K extends string>(key: K): unknown {
      return variables.get(key);
    },
    messageStructure: queryValue(tree, "MSH-9.3")?.value ?? "",
    messageType: queryValue(tree, "MSH-9.1")?.value ?? "",
    req: Object.freeze({ bytes, raw }),
    res: undefined as Response | undefined,
    result: file.result,
    set<K extends string>(key: K, value: unknown): void {
      variables.set(key, value);
      varSnapshot = undefined; // invalidate cache
    },
    tree,
    triggerEvent: queryValue(tree, "MSH-9.2")?.value ?? "",
    get var(): Readonly<Record<string, unknown>> {
      if (!varSnapshot) {
        varSnapshot = Object.freeze(Object.fromEntries(variables));
      }
      return varSnapshot;
    },
    version: queryValue(tree, "MSH-12")?.value ?? "",
  };

  return ctx;
}
