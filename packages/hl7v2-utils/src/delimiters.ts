import type { Delimiters, Root } from "@rethinkhealth/hl7v2-ast";

import { DEFAULT_DELIMITERS } from "./constants";

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
export function resolveDelimiters(root: Root): Delimiters {
  if (root.type !== "root" || !root.children) {
    return { ...DEFAULT_DELIMITERS };
  }

  const msh = root.children.find(
    (child) => child.type === "segment" && child.name === "MSH"
  );

  if (!msh || msh.type !== "segment") {
    return { ...DEFAULT_DELIMITERS };
  }

  const fields = msh.children;
  const result = { ...DEFAULT_DELIMITERS };

  // MSH-1: field separator (first field, single character)
  const msh1Value = fields[0]?.children[0]?.children[0]?.children[0]?.value;
  if (msh1Value && msh1Value.length === 1) {
    result.field = msh1Value;
  }

  // MSH-2: encoding characters (second field, up to 4 characters)
  // Characters are: [0]=component, [1]=repetition, [2]=escape, [3]=subcomponent
  const msh2Value = fields[1]?.children[0]?.children[0]?.children[0]?.value;
  if (msh2Value) {
    const chars = [...msh2Value];
    if (chars[0]) {
      result.component = chars[0];
    }
    if (chars[1]) {
      result.repetition = chars[1];
    }
    if (chars[2]) {
      result.escape = chars[2];
    }
    if (chars[3]) {
      result.subcomponent = chars[3];
    }
  }

  return result;
}
