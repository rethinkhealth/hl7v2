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
 * For literal nodes (Subcomponent, SegmentHeader), returns the length of the value.
 * For parent nodes, recursively calculates the length of all children plus 1 byte
 * per separator (assumed to be single-byte delimiters).
 *
 * @param node - The HL7v2 AST node to measure
 * @returns The total byte length of the node when serialized
 *
 * @example
 * ```ts
 * const field: Field = { type: "field", children: [...] };
 * const length = getNodeByteLength(field); // e.g., 42
 * ```
 */
export function getNodeByteLength(node: Nodes | null | undefined): number {
  if (!node) {
    return 0;
  }

  // Literal nodes: return value length
  if ("value" in node) {
    return node.value.length;
  }

  // Parent nodes: sum children + separators (1 byte each)
  if ("children" in node && Array.isArray(node.children)) {
    const { children } = node;
    if (children.length === 0) {
      return 0;
    }

    let totalLength = 0;

    for (let i = 0; i < children.length; i++) {
      totalLength += getNodeByteLength(children[i]);

      // Add 1 byte for separator after each child except the last
      if (i < children.length - 1) {
        totalLength += 1;
      }
    }

    return totalLength;
  }

  return 0;
}
