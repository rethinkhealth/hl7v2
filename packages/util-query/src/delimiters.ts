import type { Delimiters, Root, RootContent, Segment } from "@glion/ast";
import { DEFAULT_DELIMITERS, HEADER_SEGMENTS } from "@glion/utils";

import { value } from "./value";

/** Keys of MSH-2 encoding characters in positional order. */
const MSH2_KEYS = [
  "component",
  "repetition",
  "escape",
  "subcomponent",
] as const;

function firstHeader(nodes: readonly RootContent[]): Segment | undefined {
  for (const node of nodes) {
    switch (node.type) {
      case "segment": {
        if (HEADER_SEGMENTS.has(node.name)) {
          return node;
        }
        break;
      }
      case "group": {
        const header = firstHeader(node.children);
        if (header) {
          return header;
        }
        break;
      }
      // Stryker disable all: a root's children are segments and groups; these arms keep the switch exhaustive.
      case "field":
      case "field-repetition":
      case "component":
      case "subcomponent": {
        break;
      }
      // Stryker restore all
    }
  }
  return undefined;
}

/**
 * Extract delimiters from a Root AST by reading fields 1 and 2 of its first
 * header segment: MSH, or FHS or BHS in a batch file (HL7v2 §2.10).
 *
 * Field 1 contains the field separator character (e.g., `|`).
 * Field 2 contains up to 4 encoding characters: component, repetition,
 * escape, and subcomponent (e.g., `^~\&`).
 *
 * Falls back to DEFAULT_DELIMITERS for any values that cannot be derived.
 *
 * @param root - The Root AST node to extract delimiters from.
 * @returns The resolved Delimiters object.
 */
export function delimiters(root: Root): Delimiters {
  const result = { ...DEFAULT_DELIMITERS };
  const header = firstHeader(root.children);
  if (!header) {
    return result;
  }

  const separator = value(root, `${header.name}-1`)?.value;
  if (separator && separator.length === 1) {
    result.field = separator;
  }

  const encoding = value(root, `${header.name}-2`)?.value;
  if (encoding) {
    const chars = [...encoding];
    for (const [i, key] of MSH2_KEYS.entries()) {
      const ch = chars[i];
      if (ch) {
        result[key] = ch;
      }
    }
  }

  return result;
}
