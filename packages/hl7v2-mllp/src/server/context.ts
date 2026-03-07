import { parseHL7v2 } from "@rethinkhealth/hl7v2-parser";
import { getMessageInfo } from "@rethinkhealth/hl7v2-util-message-info";
import { value as queryValue } from "@rethinkhealth/hl7v2-util-query";
import type { VFile } from "vfile";

import type { ConnectionInfo, Context } from "./types.js";

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
}

/**
 * Create a new Context for an incoming message.
 *
 * Parses the message into an AST and extracts routing fields
 * using the hl7v2-parser and hl7v2-util-message-info packages.
 */
export function createContext(options: CreateContextOptions): Context {
  const { raw, bytes, connection } = options;
  const variables = new Map<string, unknown>();

  // Parse the message into an AST for routing and context
  const tree = parseHL7v2(raw);
  const info = getMessageInfo(tree);
  const controlId = queryValue(tree, "MSH-10")?.value ?? "";

  const ctx: Context = {
    connection: Object.freeze(connection),
    controlId,
    file: undefined as VFile | undefined,
    get<K extends string>(key: K): unknown {
      return variables.get(key);
    },
    messageStructure: info.messageStructure ?? "",
    messageType: info.messageCode ?? "",
    req: Object.freeze({ bytes, raw }),
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
