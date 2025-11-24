import type { Nodes } from "@rethinkhealth/hl7v2-ast";
import type { ChildProvider, Path, PathEntry, Visitor } from "./types";

/**
 * Creates a traversal function with the given child provider.
 * Pure functional approach - no classes, no mutation.
 *
 * Assumptions:
 * - Uses 1-based indexing for compatibility with HL7v2 field numbering convention
 * - Level 1 is the traversal root node (not necessarily a Root node type)
 * - Path arrays are immutable - new array created at each level via spread operator
 * - undefined/null children are safely skipped
 *
 * @param childProvider - Function to extract children from nodes
 * @returns Traversal function
 */
export function createTraversal(childProvider: ChildProvider) {
  /**
   * Traverse the tree starting from root.
   *
   * @param root - Starting node (can be any node type, not just Root)
   * @param visitor - Function called for each node
   */
  return function traverse(root: Nodes, visitor: Visitor): void {
    /**
     * Internal recursive function.
     * Uses immutable path construction (concat) like unist-visit-parents.
     *
     * @param node - Current node
     * @param path - Immutable path array from traversal root to parent
     * @param index - 1-based index within siblings (HL7v2 convention: MSH.1, MSH.2, etc.)
     * @param level - 1-based depth level (root=1, children=2, etc.)
     * @returns Control flow action
     */
    // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: fine
    function visit(
      node: Nodes,
      path: Path,
      index: number,
      level: number
    ): "exit" | "skip" | undefined {
      // Create path entry for current node
      const entry: PathEntry = {
        type: node.type,
        level,
        index,
        node,
        // Extract common metadata if available
        data: extractMetadata(node),
      };

      // Immutable path extension (like unist-visit-parents)
      const currentPath = [...path, entry];

      // Call visitor with current node and full path
      const action = visitor(node, currentPath);

      // Handle exit immediately
      if (action === "exit") {
        return "exit";
      }

      // Skip children if requested
      if (action === "skip") {
        return;
      }

      // Traverse children unless skipped
      const children = childProvider(node);
      if (children?.length) {
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (!child) {
            continue;
          }

          const result = visit(child, currentPath, i + 1, level + 1);

          if (result === "exit") {
            return "exit";
          }
        }
      }

      return;
    }

    // Start traversal with empty path, index 1, level 1
    visit(root, [], 1, 1);
  };
}

/**
 * Extract common metadata from node.
 * Extensible - can add more fields as needed.
 *
 * @param node - AST node
 * @returns Metadata object or undefined
 */
function extractMetadata(node: Nodes): Record<string, unknown> | undefined {
  switch (node.type) {
    case "group": {
      if (node.name !== undefined) {
        return { name: node.name };
      }
      return;
    }

    case "segment": {
      const header = node.children[0];
      if (header?.type === "segment-header") {
        return { header: header.value };
      }
      return;
    }

    default:
      return;
  }
}
