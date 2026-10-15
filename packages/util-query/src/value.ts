import type { Nodes, Root } from "@glion/ast";

import { select } from "./select";

/**
 * Get the string value at the path, drilling down through single-child nodes
 * when needed. Also returns the node and ancestor chain for context.
 *
 * This is a convenience function that automatically traverses through container
 * nodes (Field → FieldRepetition → Component → Subcomponent) to extract the
 * primary string value. When a container has multiple children, the first child
 * is selected (e.g., `value(tree, "MSH.12")` returns the first component of a
 * composite VID field).
 *
 * Nodes with no children return `value: null` to differentiate between empty
 * strings ("") and missing values.
 *
 * @example
 *   ```typescript
 *   const result = value(root, "PID.5.1");
 *   if (result) {
 *     console.log(result.value); // string | null
 *     console.log(result.node.type); // 'subcomponent'
 *     console.log(result.ancestors); // [Root, Segment, Field, ...]
 *   }
 *   ```;
 *
 * @param root - The root node to search from
 * @param path - The HL7 path string
 * @returns Object containing the value, node, and ancestors, or null if not
 *   found
 */
export function value(
  root: Root,
  path: string
): { value: string | null; node: Nodes; ancestors: Nodes[] } | null {
  const selected = select(root, path);
  return selected ? drill(selected.node, selected.ancestors) : null;
}

/**
 * The first subcomponent under `node`, with its value, or `node` with value
 * `null` when a field, repetition, or component on the way has no children.
 * `null` for a root, group, or segment.
 */
function drill(
  node: Nodes,
  ancestors: Nodes[]
): { value: string | null; node: Nodes; ancestors: Nodes[] } | null {
  switch (node.type) {
    // Stryker disable next-line StringLiteral: select() never returns the root
    case "root":
    case "group":
    case "segment": {
      return null;
    }
    case "subcomponent": {
      return { ancestors, node, value: node.value };
    }
    case "field":
    case "field-repetition":
    case "component": {
      const first = node.children?.[0];
      return first
        ? drill(first, [...ancestors, node])
        : { ancestors, node, value: null };
    }
  }
}
