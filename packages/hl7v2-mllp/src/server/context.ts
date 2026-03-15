import { parseHL7v2 } from "@rethinkhealth/hl7v2-parser";
import { value as queryValue } from "@rethinkhealth/hl7v2-util-query";

import type {
  ConnectionInfo,
  Context,
  Parser,
  ParseResult,
  Response,
} from "./types";

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
  let varSnapshot: Readonly<Record<string, unknown>> | undefined;

  // Parse the message — supports both sync and async parsers
  const result = await parser(raw);
  const { tree, file } = result;
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
