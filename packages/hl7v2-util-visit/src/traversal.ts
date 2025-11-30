import type { Nodes } from "@rethinkhealth/hl7v2-ast";
import type {
  ChildProvider,
  Path,
  PathEntry,
  Predicate,
  Visitor,
} from "./types";

/**
 * Creates a traversal function with the given child provider and optional predicate.
 * Pure functional approach - no classes, no mutation.
 *
 * Assumptions:
 * - index is 0-based (position among filtered siblings that match predicate)
 * - sequence is 1-based (HL7v2 convention: MSH.1, MSH.2, etc.)
 * - Level 1 is the traversal root node (not necessarily a Root node type)
 * - Path arrays are immutable - new array created at each level via spread operator
 * - undefined/null children are safely skipped
 * - For segments, segment-header is visited separately so fields get proper 1-based sequence
 *
 * @param childProvider - Function to extract children from nodes
 * @param predicate - Optional predicate to filter which nodes are visited and indexed
 * @returns Traversal function
 */
export function createTraversal(
  childProvider: ChildProvider,
  predicate?: Predicate
) {
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
     * @param index - 0-based index among filtered siblings (predicate matches)
     * @param sequence - 1-based sequence within siblings (HL7v2 convention)
     * @param level - 1-based depth level (root=1, children=2, etc.)
     * @returns Control flow action
     */
    // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: fine
    // biome-ignore lint/nursery/useMaxParams: fine
    function visit(
      node: Nodes,
      path: Path,
      index: number,
      sequence: number,
      level: number
    ): "exit" | "skip" | undefined {
      // Create path entry for current node
      const entry: PathEntry = {
        type: node.type,
        level,
        index,
        sequence,
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

      // For segments, visit segment-header first with sequence 0
      // This ensures fields get proper 1-based sequencing
      if (
        node.type === "segment" &&
        "children" in node &&
        Array.isArray(node.children)
      ) {
        const segmentHeader = node.children[0] as Nodes | undefined;
        if (segmentHeader?.type === "segment-header") {
          const headerResult = visit(
            segmentHeader,
            currentPath,
            0,
            0,
            level + 1
          );
          if (headerResult === "exit") {
            return "exit";
          }
        }
      }

      // Traverse children unless skipped
      const children = childProvider(node);
      if (children?.length) {
        let filteredIndex = 0;
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (!child) {
            continue;
          }

          // Build temporary path to check predicate
          const tempEntry: PathEntry = {
            type: child.type,
            level: level + 1,
            index: filteredIndex,
            sequence: i + 1,
            node: child,
            data: extractMetadata(child),
          };
          const tempPath = [...currentPath, tempEntry];

          // Calculate index based on predicate match
          // If node matches predicate: use filtered index (position among matching siblings)
          // If node doesn't match: use array position (for context in path)
          const matches = !predicate || predicate(child, tempPath);

          const result = visit(
            child,
            currentPath,
            matches ? filteredIndex : i,
            i + 1,
            level + 1
          );

          if (matches) {
            filteredIndex++;
          }

          if (result === "exit") {
            return "exit";
          }
        }
      }

      return;
    }

    // Start traversal with empty path, index 0, sequence 1, level 1
    visit(root, [], 0, 1, 1);
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
