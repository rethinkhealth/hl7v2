import type { Root } from "@rethinkhealth/hl7v2-ast";
import { parseHL7v2 } from "@rethinkhealth/hl7v2-parser";
import { getMessageInfo } from "@rethinkhealth/hl7v2-util-message-info";

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

  // Parse the message — supports both sync and async parsers
  const result = await parser(raw);
  const { tree, file } = result;
  const info = getMessageInfo(tree);
  const controlId = extractFieldValue(tree, 9);

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

/**
 * Extract a simple field value from the first segment (MSH) by field index.
 *
 * Navigates the AST path: segment → field → repetition[0] → component[0] → subcomponent[0].value
 * Returns empty string if any node in the chain is missing.
 *
 * @param tree - The parsed AST root.
 * @param fieldIndex - Zero-based field index within the MSH segment.
 */
function extractFieldValue(tree: Root, fieldIndex: number): string {
  const segment = tree.children[0];
  if (!segment || segment.type !== "segment") {
    return "";
  }

  const field = segment.children[fieldIndex];
  if (!field) {
    return "";
  }

  const repetition = field.children[0];
  if (!repetition) {
    return "";
  }

  const component = repetition.children[0];
  if (!component) {
    return "";
  }

  const subcomponent = component.children[0];
  if (!subcomponent || !("value" in subcomponent)) {
    return "";
  }

  return subcomponent.value as string;
}
