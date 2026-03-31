import type { Delimiters, Root } from "@rethinkhealth/hl7v2-ast";
import { DEFAULT_DELIMITERS } from "@rethinkhealth/hl7v2-utils";

import { value } from "./value";

/** Keys of MSH-2 encoding characters in positional order. */
const MSH2_KEYS = [
  "component",
  "repetition",
  "escape",
  "subcomponent",
] as const;

/**
 * Extract delimiters from a Root AST by reading MSH-1 and MSH-2.
 *
 * MSH-1 contains the field separator character (e.g., `|`).
 * MSH-2 contains up to 4 encoding characters: component, repetition,
 * escape, and subcomponent (e.g., `^~\&`).
 *
 * Falls back to DEFAULT_DELIMITERS for any values that cannot be derived.
 *
 * @param root - The Root AST node to extract delimiters from.
 * @returns The resolved Delimiters object.
 */
export function delimiters(root: Root): Delimiters {
  const result = { ...DEFAULT_DELIMITERS };

  // MSH-1: field separator (single character)
  const msh1 = value(root, "MSH-1")?.value;
  if (msh1 && msh1.length === 1) {
    result.field = msh1;
  }

  // MSH-2: encoding characters (up to 4 positional chars)
  const msh2 = value(root, "MSH-2")?.value;
  if (msh2) {
    const chars = [...msh2];
    for (const [i, key] of MSH2_KEYS.entries()) {
      const ch = chars[i];
      if (ch) {
        result[key] = ch;
      }
    }
  }

  return result;
}
