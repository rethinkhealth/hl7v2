import type { Nodes, Root } from "@rethinkhealth/hl7v2-ast";
import { select } from "./select";

/**
 * Get the string value at the path, drilling down through single-child nodes when needed.
 * Also returns the node and ancestor chain for context.
 *
 * This is a convenience function that automatically traverses through single-child
 * container nodes (Field → FieldRepetition → Component → Subcomponent) to extract
 * the final string value.
 *
 * When experimental.emptyMode is "empty", nodes with no children will return null
 * to differentiate between empty strings ("") and missing values.
 *
 * @param root - The root node to search from
 * @param path - The HL7 path string
 * @returns Object containing the value, node, and ancestors, or null if not found
 *
 * @example
 * ```typescript
 * const result = value(root, "PID-5.1");
 * if (result) {
 *   console.log(result.value); // string | null
 *   console.log(result.node.type); // 'subcomponent'
 *   console.log(result.ancestors); // [Root, Segment, Field, ...]
 * }
 * ```
 */
export function value(
  root: Root,
  path: string
): { value: string | null; node: Nodes; ancestors: Nodes[] } | null {
  const selectResult = select(root, path);
  if (!selectResult) {
    return null;
  }

  let node: Nodes = selectResult.node;
  let ancestors: Nodes[] = selectResult.ancestors;

  // Drill down through single children until we reach a subcomponent
  while (node.type !== "subcomponent") {
    // Segments, segment-headers, and groups can't be drilled down
    if (
      node.type === "segment" ||
      node.type === "segment-header" ||
      node.type === "group" ||
      node.type === "root"
    ) {
      return null;
    }

    // Type guard: at this point, node must be Field | FieldRepetition | Component
    if (!("children" in node && node.children)) {
      return null;
    }

    if (node.children.length === 0) {
      return {
        value: null,
        node,
        ancestors: [...ancestors],
      };
    }

    if (node.children.length > 1) {
      return null;
    }

    const next = node.children[0] as Nodes;
    if (!next) {
      return null;
    }

    ancestors = [...ancestors, node];
    node = next;
  }

  // At this point, node.type === "subcomponent" is guaranteed
  return {
    value: node.value,
    node,
    ancestors,
  };
}
