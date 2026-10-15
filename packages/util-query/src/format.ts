import type { Group, Nodes, Root, Segment } from "@glion/ast";

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
 *   ancestor chain contains no segment or group, or an ancestor does not
 *   hold the next node in the chain
 */
export function format(node: Nodes, ancestors: Nodes[]): string | null {
  const chain = [...ancestors, node];
  const steps: string[] = [];
  let positions = "";

  for (const [index, current] of chain.entries()) {
    const position = positionOf(current, chain[index - 1]);
    if (position === 0) {
      return null;
    }
    switch (current.type) {
      case "root": {
        break;
      }
      case "group":
      case "segment": {
        steps.push(
          position > 1 ? `${keyOf(current)}[${position}]` : `${keyOf(current)}`
        );
        break;
      }
      case "field-repetition": {
        if (position > 1 || current === node) {
          positions += `[${position}]`;
        }
        break;
      }
      case "field":
      case "component":
      case "subcomponent": {
        positions += `.${position}`;
        break;
      }
    }
  }

  return steps.length === 0 ? null : steps.join(".") + positions;
}

/**
 * The 1-based position of `node` among the children of `parent`: for a
 * segment or group, its `[n]` counted as `select` counts it; otherwise its
 * index. 1 without a parent; 0 when `parent` does not hold `node`.
 */
function positionOf(node: Nodes, parent: Nodes | undefined): number {
  if (parent === undefined || !("children" in parent)) {
    return 1;
  }
  switch (node.type) {
    case "group":
    case "segment": {
      return (
        stepChildren(
          parent as Root | Segment | Group,
          keyOf(node) as string,
          undefined,
          true
        ).indexOf(node) + 1
      );
    }
    // Stryker disable next-line StringLiteral: the root is first in the chain, so it has no parent and returns above
    case "root":
    case "field":
    case "field-repetition":
    case "component":
    case "subcomponent": {
      return (parent.children as Nodes[]).indexOf(node) + 1;
    }
  }
}
