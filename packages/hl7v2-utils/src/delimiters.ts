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
 * Validates that all resolved delimiters are unique single characters.
 *
 * @param root - The Root AST node to extract delimiters from.
 * @returns The resolved Delimiters object.
 */
export function resolveDelimiters(root: Root): Delimiters {
  if (root.type !== "root" || !root.children) {
    return { ...DEFAULT_DELIMITERS };
  }

  const msh = findMsh(root);

  if (!msh || msh.type !== "segment") {
    return { ...DEFAULT_DELIMITERS };
  }

  const result = extractFromMsh(msh);

  // Validate uniqueness — duplicate delimiters cause encoding/decoding corruption.
  if (!areDelimitersUnique(result)) {
    return { ...DEFAULT_DELIMITERS };
  }

  return result;
}

/** Keys of MSH-2 encoding characters in positional order. */
const MSH2_KEYS = [
  "component",
  "repetition",
  "escape",
  "subcomponent",
] as const;

/** Navigate from a field node down to its first subcomponent value. */
function fieldValue(
  fields: readonly unknown[],
  index: number
): string | undefined {
  const f = fields[index] as
    | {
        children?: {
          children?: { children?: { value?: string }[] }[];
        }[];
      }
    | undefined;
  return f?.children?.[0]?.children?.[0]?.children?.[0]?.value;
}

function extractFromMsh(msh: { children: readonly unknown[] }): Delimiters {
  const result = { ...DEFAULT_DELIMITERS };

  // MSH-1: field separator (single character)
  const msh1 = fieldValue(msh.children, 0);
  if (msh1 && msh1.length === 1) {
    result.field = msh1;
  }

  // MSH-2: encoding characters (up to 4 positional chars)
  const msh2 = fieldValue(msh.children, 1);
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

/**
 * Find the first MSH segment in a Root, searching through Groups.
 */
function findMsh(
  root: Root
): { type: "segment"; name: string; children: readonly unknown[] } | undefined {
  for (const child of root.children) {
    if (child.type === "segment" && child.name === "MSH") {
      return child;
    }
    if (child.type === "group") {
      // Search one level into groups
      for (const nested of child.children) {
        if (nested.type === "segment" && nested.name === "MSH") {
          return nested;
        }
      }
    }
  }
  return undefined;
}

/**
 * Check that all non-segment delimiters are unique single characters.
 * The segment delimiter (\r) is excluded since it's never derived from MSH.
 */
function areDelimitersUnique(d: Delimiters): boolean {
  const active = [d.field, d.component, d.repetition, d.escape, d.subcomponent];

  // All must be single characters
  for (const ch of active) {
    if (ch.length !== 1) {
      return false;
    }
  }

  // All must be distinct
  return new Set(active).size === active.length;
}
