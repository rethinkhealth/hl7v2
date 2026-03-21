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
function formatParts(parts: PathParts): string {
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
// oxlint-disable-next-line complexity
function toPathParts(node: Nodes, ancestors: Nodes[]): PathParts {
  const parts: PathParts = {
    segment: { name: "" },
  };

  const groups: GroupLocator[] = [];
  const len = ancestors.length + 1;

  for (let i = 0; i < len; i++) {
    const current = i < ancestors.length ? ancestors[i] : node;
    const parent = i > 0 ? ancestors[i - 1] : undefined;

    if (!current) {
      continue;
    }

    switch (current.type) {
      case "root": {
        break;
      }

      case "group":
      case "segment": {
        const pos = positionOf(current, parent);
        if (current === node || current.type === "segment") {
          parts.segment = { name: current.name };
          if (pos > 1) {
            parts.segment.repetition = pos;
          }
        } else {
          const locator: GroupLocator = { name: current.name };
          if (pos > 1) {
            locator.repetition = pos;
          }
          groups.push(locator);
        }
        break;
      }

      case "field": {
        parts.field = positionOf(current, parent);
        break;
      }

      case "field-repetition": {
        const pos = positionOf(current, parent);
        // Include repetition when it's not the first,
        // or when the field-repetition is the target node itself
        // (to distinguish from selecting the Field)
        if (pos > 1 || current === node) {
          parts.repetition = pos;
        }
        break;
      }

      case "component": {
        parts.component = positionOf(current, parent);
        break;
      }

      case "subcomponent": {
        parts.subcomponent = positionOf(current, parent);
        break;
      }
    }
  }

  if (!parts.segment.name) {
    throw new Error(
      "format(): no segment or group node found in ancestor chain"
    );
  }

  if (groups.length > 0) {
    parts.groups = groups;
  }

  return parts;
}

/**
 * Compute the 1-based position of a node among its parent's children.
 *
 * For named nodes (segments, groups), counts only same-name siblings
 * because segments are identified by name: the 2nd PID in [MSH, PID, OBX, PID]
 * is PID[2], not PID[4].
 *
 * For positional nodes (fields, repetitions, components, subcomponents),
 * uses the array index directly.
 */
function positionOf(node: Nodes, parent: Nodes | undefined): number {
  if (!parent || !("children" in parent)) {
    return 1;
  }

  const children = parent.children as Nodes[];

  // Named nodes: count same-name siblings before this node
  if ("name" in node) {
    const name = node.name as string;
    const { type } = node;
    let count = 0;
    for (const child of children) {
      if (child === node) {
        return count + 1;
      }
      if (child.type === type && "name" in child && child.name === name) {
        count++;
      }
    }
    throw new Error("format(): node not found in parent's children array");
  }

  // Positional nodes: use array index
  const idx = children.indexOf(node);
  if (idx === -1) {
    throw new Error("format(): node not found in parent's children array");
  }
  return idx + 1;
}
