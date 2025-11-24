import type { Nodes } from "@rethinkhealth/hl7v2-ast";
import { createTraversal } from "./traversal";
import type { Action, Test, Visitor } from "./types";
import { createTest } from "./utils";

// Export all types
export type {
  Action,
  ChildProvider,
  Path,
  PathEntry,
  Test,
  Visitor,
} from "./types";

export const EXIT: Action = "exit" as const;
export const SKIP: Action = "skip" as const;

// Overload signatures
export function visit(tree: Nodes, visitor: Visitor): void;
export function visit(
  tree: Nodes,
  test: string | Partial<Nodes> | Test,
  visitor: Visitor
): void;

/**
 * Visit nodes in an HL7 AST tree.
 * Pure functional implementation - no classes, no mutations.
 *
 * @param tree - The tree to traverse (can be any node type, not just Root)
 * @param test - Optional test to filter nodes (type string, partial match, or Test function)
 * @param visitor - Function called for each matching node
 *
 * @remarks
 * **Important**: If you pass a function as the second argument, it is always treated
 * as a Visitor, never as a Test. To use a Test function, you MUST provide both the
 * test and visitor parameters: `visit(tree, testFn, visitorFn)`.
 *
 * This design choice prevents runtime checks that could miss errors and cause side
 * effects before detection. Test and Visitor functions have the same signature but
 * different return types, making them indistinguishable without execution.
 *
 * Performance characteristics:
 * - O(n) time complexity - single depth-first traversal
 * - O(d) space for path where d = tree depth (typically <10 for HL7v2)
 * - Path arrays are created once per level via spread operator
 * - Metadata extracted lazily only when needed
 * - No defensive copying - paths reused during visitor execution
 */
export function visit(
  tree: Nodes,
  arg2: Visitor | string | Partial<Nodes> | Test,
  arg3?: Visitor
): void {
  let test: string | Partial<Nodes> | Test | null = null;
  let visitor: Visitor;

  // Handle overloads - simple discrimination based on arg count
  if (arg3 === undefined) {
    // 2-argument form: visit(tree, visitor)
    // Function assumed to be Visitor (not Test)
    visitor = arg2 as Visitor;
  } else {
    // 3-argument form: visit(tree, test, visitor)
    test = arg2 as string | Partial<Nodes> | Test;
    visitor = arg3;
  }

  // Create test predicate
  const predicate = createTest(test);

  // Create child provider
  const childProvider = (node: Nodes) =>
    "children" in node && Array.isArray(node.children)
      ? (node.children as Nodes[])
      : undefined;

  // Create traversal function
  const traverse = createTraversal(childProvider);

  // Wrap visitor to apply test
  const wrappedVisitor: Visitor = (node, path) => {
    if (predicate(node, path)) {
      return visitor(node, path);
    }
    return;
  };

  // Start traversal
  traverse(tree, wrappedVisitor);
}
