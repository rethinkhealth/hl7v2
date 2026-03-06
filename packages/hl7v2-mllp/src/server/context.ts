import type { Root } from "@rethinkhealth/hl7v2-ast";
import type { VFile } from "vfile";

import type { ConnectionInfo, Context } from "./types.js";

/**
 * Options for creating an Context instance.
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
 * Performs lightweight MSH extraction for routing fields
 * (messageType, triggerEvent, controlId). The unified processor
 * middleware can later enrich these with full annotation data.
 */
export function createContext(options: CreateContextOptions): Context {
  const { raw, bytes, connection } = options;
  const variables = new Map<string, unknown>();

  // Lightweight MSH extraction for routing
  const msh = parseMshFields(raw);

  const ctx: Context = {
    connection: Object.freeze(connection),
    controlId: msh.controlId,
    file: undefined as VFile | undefined,
    get<K extends string>(key: K): unknown {
      return variables.get(key);
    },
    messageStructure: msh.messageStructure,
    messageType: msh.messageType,
    req: Object.freeze({ bytes, raw }),
    set<K extends string>(key: K, value: unknown): void {
      variables.set(key, value);
    },
    tree: undefined as Root | undefined,
    triggerEvent: msh.triggerEvent,
    get var(): Readonly<Record<string, unknown>> {
      return Object.freeze(Object.fromEntries(variables));
    },
    version: msh.version,
  };

  return ctx;
}

/**
 * Lightweight MSH field extraction for routing purposes.
 *
 * Extracts only what the server needs for routing and context:
 * - MSH-9 components (message type, trigger event, message structure)
 * - MSH-10 (message control ID)
 * - MSH-12 (version ID)
 *
 * This avoids depending on the ack.ts module.
 */
function parseMshFields(raw: string): {
  messageType: string;
  triggerEvent: string;
  messageStructure: string;
  controlId: string;
  version: string;
} {
  const mshLine = raw.split("\r")[0] || raw;

  // MSH field separator is always the 4th character (index 3)
  const fieldSep = mshLine[3] || "|";
  // Component separator is the first encoding character (MSH-2[0])
  const fields = mshLine.split(fieldSep);
  const encodingChars = fields[1] || "^~\\&";
  const componentSep = encodingChars[0] || "^";

  // MSH-9: Message Type (index 8)
  const msh9 = fields[8] || "";
  const msh9Parts = msh9.split(componentSep);

  // MSH-10: Message Control ID (index 9)
  const controlId = fields[9] || "";

  // MSH-12: Version ID (index 11)
  const msh12 = fields[11] || "";
  const version = msh12.split(componentSep)[0] || "";

  return {
    controlId,
    messageStructure: msh9Parts[2] || "",
    messageType: msh9Parts[0] || "",
    triggerEvent: msh9Parts[1] || "",
    version,
  };
}
