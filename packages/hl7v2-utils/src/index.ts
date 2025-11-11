import type { Nodes } from "@rethinkhealth/hl7v2-ast";

// -------------
// Delimiters
// -------------

export const DEFAULT_DELIMITERS = {
  field: "|",
  component: "^",
  repetition: "~",
  subcomponent: "&",
  escape: "\\",
  segment: "\r",
};

// -------------
// General
// -------------

/**
 * Utility: check if a node is semantically empty
 */
export function isEmptyNode(node: Nodes | null | undefined): boolean {
  if (!node) {
    return true;
  }

  // If node has a "value" property (Subcomponent, maybe Component)
  if ("value" in node) {
    return !node.value || node.value.trim() === "";
  }

  // If node has children (Field, Component, Repetition, Segment, Root, etc.)
  if ("children" in node) {
    if (!node.children || node.children.length === 0) {
      return true;
    }

    // If node has more than one child, then it is considered non-empty
    if (node.children.length > 1) {
      return false;
    }

    // If node has only one child, then it is considered empty if the child is also empty
    return isEmptyNode(node.children[0]);
  }

  // Fallback: consider unknown node as non-empty
  return false;
}

// -------------
// Byte Length
// -------------

/**
 * Calculate the byte length of any HL7v2 AST node.
 *
 * For literal nodes (Subcomponent, SegmentHeader), returns the UTF-8 byte length of the value.
 * For parent nodes, recursively calculates the length of all children plus 1 byte
 * per separator (assumed to be single-byte delimiters).
 *
 * @param node - The HL7v2 AST node to measure
 * @returns The total byte length of the node when serialized
 *
 * @example
 * ```ts
 * const field: Field = { type: "field", children: [...] };
 * const length = getByteLength(field); // e.g., 42
 * ```
 */
export function getByteLength(node: Nodes | null | undefined): number {
  if (!node) {
    return 0;
  }

  if ("value" in node) {
    return Buffer.byteLength(node.value, "utf8");
  }

  return node.children.reduce(
    (total, child, i) =>
      total + getByteLength(child) + (i < node.children.length - 1 ? 1 : 0),
    0
  );
}

// -------------
// Length
// -------------

/**
 * Calculate the string length of any HL7v2 AST node.
 *
 * For literal nodes (Subcomponent, SegmentHeader), returns `value.length`.
 * For parent nodes, recursively calculates the length of all children plus 1
 * per separator (assumed to be single-character delimiters).
 *
 * Note: Returns JavaScript string length (UTF-16 code units). For UTF-8 byte
 * length (e.g., for wire protocol), use `getByteLength` instead.
 *
 * @param node - The HL7v2 AST node to measure
 * @returns The total string length of the node when serialized
 *
 * @example
 * ```ts
 * const field: Field = { type: "field", children: [...] };
 * const length = getLength(field); // e.g., 42
 * ```
 */
export function getLength(node: Nodes | null | undefined): number {
  if (!node) {
    return 0;
  }

  if ("value" in node) {
    return node.value.length;
  }

  return node.children.reduce(
    (total, child, i) =>
      total + getLength(child) + (i < node.children.length - 1 ? 1 : 0),
    0
  );
}
