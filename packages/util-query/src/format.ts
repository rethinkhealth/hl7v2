import type { Nodes } from "@glion/ast";

import { keyOf } from "./utils";

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
 */
// oxlint-disable-next-line complexity
export function format(node: Nodes, ancestors: Nodes[]): string | null {
  const chain = [...ancestors, node];
  if (!chain.some(({ type }) => type === "segment" || type === "group")) {
    return null;
  }

  let result: string | null = null;

  for (const [i, current] of chain.entries()) {
    const parent = chain[i - 1];

    switch (current.type) {
      case "root": {
        break;
      }

      case "group":
      case "segment": {
        const pos = positionOf(current, parent);
        result = (result ?? "") + keyOf(current);
        if (pos > 1) {
          result += `[${pos}]`;
        }
        if (current.type === "group" && current !== node) {
          result += ".";
        }
        break;
      }

      case "field": {
        result += `.${positionOf(current, parent)}`;
        break;
      }

      case "field-repetition": {
        const pos = positionOf(current, parent);
        if (pos > 1 || current === node) {
          result += `[${pos}]`;
        }
        break;
      }

      case "component": {
        result += `.${positionOf(current, parent)}`;
        break;
      }

      case "subcomponent": {
        result += `.${positionOf(current, parent)}`;
        break;
      }
    }
  }

  return result;
}

/**
 * Compute the 1-based position of a node among its parent's children.
 *
 * For segments and groups, counts the siblings with the same name, segments
 * and groups together: the 2nd PID in [MSH, PID, OBX, PID] is PID[2], and a
 * group ZZZ after a segment ZZZ is ZZZ[2].
 *
 * For positional nodes (fields, repetitions, components, subcomponents),
 * uses the array index directly.
 */
function positionOf(node: Nodes, parent: Nodes | undefined): number {
  if (!parent || !("children" in parent)) {
    return 1;
  }

  const children = parent.children as Nodes[];

  // Named nodes: count siblings with the same key before this node
  // Stryker disable next-line ConditionalExpression: a positional node's siblings share its type and have no name, so counting them equals its index
  if (node.type === "group" || node.type === "segment") {
    const key = keyOf(node);
    let count = 0;
    for (const child of children) {
      if (child === node) {
        return count + 1;
      }
      if (keyOf(child) === key) {
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
