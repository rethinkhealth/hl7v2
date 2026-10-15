import type { Group, Nodes, Root, Segment } from "@glion/ast";

import { QueryError } from "./errors";
import { keyOf, stepChildren } from "./resolve";

/**
 * Format a node and its ancestor chain into a canonical HL7v2 path string.
 *
 * When `ancestors` starts at the root, `select(root, path)` returns `node`:
 * the path names every group, and `[n]` counts the siblings with the same
 * name, segments and groups together.
 *
 * @example
 *   ```typescript
 *   visit(tree, "field", (node, ancestors) => {
 *     format(node, ancestors); // "PID.5"
 *   });
 *
 *   const result = select(root, "PID.5.2");
 *   format(result.node, result.ancestors); // "PID.5.2"
 *   ```;
 *
 * @param node - The target AST node
 * @param ancestors - Ancestor chain from root to parent (as provided by
 *   visit/select)
 * @returns Canonical path string (e.g., "PID.5.2", "ORDER.ORC.1"), or `null` if the
 *   ancestor chain contains no segment or group
 * @throws {QueryError} `NOT_IN_ANCESTORS` when an ancestor does not hold the
 *   next node in the chain.
 */
export function format(node: Nodes, ancestors: Nodes[]): string | null {
  const chain = [...ancestors, node];
  const steps: string[] = [];
  let positions = "";

  for (const [index, current] of chain.entries()) {
    const parent = chain[index - 1];
    switch (current.type) {
      case "root": {
        break;
      }
      case "group":
      case "segment": {
        const position = namedPosition(current, parent);
        steps.push(
          position > 1 ? `${keyOf(current)}[${position}]` : `${keyOf(current)}`
        );
        break;
      }
      case "field-repetition": {
        const position = childPosition(current, parent);
        if (position > 1 || current === node) {
          positions += `[${position}]`;
        }
        break;
      }
      case "field":
      case "component":
      case "subcomponent": {
        positions += `.${childPosition(current, parent)}`;
        break;
      }
    }
  }

  return steps.length === 0 ? null : steps.join(".") + positions;
}

/**
 * The `[n]` of a segment or group among its parent's children, counted as
 * `select` counts it; 1 without a parent.
 *
 * @throws {QueryError} `NOT_IN_ANCESTORS` when `parent` does not hold `node`.
 */
function namedPosition(
  node: Segment | Group,
  parent: Nodes | undefined
): number {
  if (parent === undefined || !("children" in parent)) {
    return 1;
  }
  const position =
    stepChildren(
      parent as Root | Segment | Group,
      keyOf(node) as string,
      undefined,
      true
    ).indexOf(node) + 1;
  if (position === 0) {
    throw new QueryError("NOT_IN_ANCESTORS");
  }
  return position;
}

/**
 * The 1-based index of a field, repetition, component, or subcomponent among
 * its parent's children; 1 without a parent.
 *
 * @throws {QueryError} `NOT_IN_ANCESTORS` when `parent` does not hold `node`.
 */
function childPosition(node: Nodes, parent: Nodes | undefined): number {
  if (parent === undefined || !("children" in parent)) {
    return 1;
  }
  const index = (parent.children as Nodes[]).indexOf(node);
  if (index === -1) {
    throw new QueryError("NOT_IN_ANCESTORS");
  }
  return index + 1;
}
