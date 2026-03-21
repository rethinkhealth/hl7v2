import type { Nodes } from "@rethinkhealth/hl7v2-ast";

import type { GroupLocator, PathParts } from "./types";

/**
 * Format a node and its ancestor chain into a canonical HL7v2 path string.
 *
 * This is the inverse of `select`: given a node and the ancestors
 * returned by `visit` or `select`, it produces the path string that
 * would select that node.
 *
 * @param node - The target AST node
 * @param ancestors - Ancestor chain from root to parent (as provided by visit/select)
 * @returns Canonical path string (e.g., "PID-5.2", "ORDER-ORC-1")
 *
 * @example
 * ```typescript
 * visit(tree, "field", (node, ancestors) => {
 *   format(node, ancestors); // "PID-5"
 * });
 *
 * const result = select(root, "PID-5.2");
 * format(result.node, result.ancestors); // "PID-5.2"
 * ```
 */
export function format(node: Nodes, ancestors: Nodes[]): string {
  const parts = toPathParts(node, ancestors);
  return formatParts(parts);
}

/**
 * Format PathParts into a canonical path string.
 * Inverse of `parse`: for canonical paths, `formatParts(parse(path))` produces
 * the same path string.
 */
export function formatParts(parts: PathParts): string {
  let result = "";

  if (parts.groups) {
    for (const group of parts.groups) {
      result += group.name;
      if (group.repetition !== undefined) {
        result += `[${group.repetition}]`;
      }
      result += "-";
    }
  }

  result += parts.segment.name;
  if (parts.segment.repetition !== undefined) {
    result += `[${parts.segment.repetition}]`;
  }

  if (parts.field !== undefined) {
    result += `-${parts.field}`;

    if (parts.repetition !== undefined) {
      result += `[${parts.repetition}]`;
    }

    if (parts.component !== undefined) {
      result += `.${parts.component}`;

      if (parts.subcomponent !== undefined) {
        result += `.${parts.subcomponent}`;
      }
    }
  }

  return result;
}

/**
 * Reconstruct PathParts from a node and its ancestor chain.
 *
 * Walks the chain from root to node, identifying each level
 * (group, segment, field, repetition, component, subcomponent)
 * and computing 1-based indices from array positions.
 */
function toPathParts(node: Nodes, ancestors: Nodes[]): PathParts {
  const chain = [...ancestors, node];

  const parts: PathParts = {
    segment: { name: "" },
  };

  const groups: GroupLocator[] = [];

  for (let i = 0; i < chain.length; i++) {
    const current = chain[i];
    const parent = i > 0 ? chain[i - 1] : undefined;

    if (!current) {
      continue;
    }

    switch (current.type) {
      case "root": {
        break;
      }

      case "group": {
        if (!("name" in current)) {
          break;
        }
        const name = current.name as string;
        const rep = countSameNameBefore(current, parent) + 1;
        const locator: GroupLocator = { name };
        if (rep > 1) {
          locator.repetition = rep;
        }
        groups.push(locator);
        break;
      }

      case "segment": {
        if (!("name" in current)) {
          break;
        }
        const name = current.name as string;
        const rep = countSameNameBefore(current, parent) + 1;
        parts.segment = { name };
        if (rep > 1) {
          parts.segment.repetition = rep;
        }
        break;
      }

      case "field": {
        parts.field = indexIn(current, parent) + 1;
        break;
      }

      case "field-repetition": {
        const idx = indexIn(current, parent);
        // Include repetition index when it's not the first,
        // or when the field-repetition is the target node itself
        // (to distinguish from selecting the Field)
        if (idx > 0 || current === node) {
          parts.repetition = idx + 1;
        }
        break;
      }

      case "component": {
        parts.component = indexIn(current, parent) + 1;
        break;
      }

      case "subcomponent": {
        parts.subcomponent = indexIn(current, parent) + 1;
        break;
      }
    }
  }

  if (groups.length > 0) {
    parts.groups = groups;
  }

  return parts;
}

/**
 * Count how many same-type, same-name siblings appear before this node
 * in the parent's children array.
 */
function countSameNameBefore(node: Nodes, parent: Nodes | undefined): number {
  if (!parent || !("children" in parent)) {
    return 0;
  }

  const children = parent.children as Nodes[];
  const name = "name" in node ? (node.name as string) : undefined;
  const type = node.type;

  let count = 0;
  for (const child of children) {
    if (child === node) {
      return count;
    }
    if (child.type === type && "name" in child && child.name === name) {
      count++;
    }
  }

  return count;
}

/**
 * Find the 0-based index of a node in its parent's children array.
 */
function indexIn(node: Nodes, parent: Nodes | undefined): number {
  if (!parent || !("children" in parent)) {
    return 0;
  }

  const children = parent.children as Nodes[];
  const idx = children.indexOf(node);
  return Math.max(idx, 0);
}
