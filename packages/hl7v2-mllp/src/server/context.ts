import { parseHL7v2 } from "@rethinkhealth/hl7v2-parser";
import { getMessageInfo } from "@rethinkhealth/hl7v2-util-message-info";
import { value as queryValue } from "@rethinkhealth/hl7v2-util-query";

import type {
  ConnectionInfo,
  Context,
  Parser,
  ParseResult,
  Response,
} from "./types.js";

/**
 * Default parser — wraps `parseHL7v2` into a `ParseResult`.
 */
const defaultParser: Parser = (input: string): ParseResult => ({
  tree: parseHL7v2(input),
});

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
  /** Parser function — defaults to parseHL7v2 */
  parser?: Parser;
}

/**
 * Create a new Context for an incoming message.
 *
 * Parses the message into an AST and extracts routing fields
 * using the parser (defaults to `parseHL7v2`).
 */
export async function createContext(
  options: CreateContextOptions
): Promise<Context> {
  const { raw, bytes, connection, parser = defaultParser } = options;
  const variables = new Map<string, unknown>();

  // Parse the message — supports both sync and async parsers
  const result = await parser(raw);
  const { tree, file } = result;
  const info = getMessageInfo(tree);
  const controlId = queryValue(tree, "MSH-10")?.value ?? "";

  const ctx: Context = {
    connection: Object.freeze(connection),
    controlId,
    file,
    get<K extends string>(key: K): unknown {
      return variables.get(key);
    },
    messageStructure: info.messageStructure ?? "",
    messageType: info.messageCode ?? "",
    req: Object.freeze({ bytes, raw }),
    res: undefined as Response | undefined,
    set<K extends string>(key: K, value: unknown): void {
      variables.set(key, value);
    },
    tree,
    triggerEvent: info.triggerEvent ?? "",
    get var(): Readonly<Record<string, unknown>> {
      return Object.freeze(Object.fromEntries(variables));
    },
    version: info.version ?? "",
  };

  return ctx;
}
