import type { Nodes } from "@rethinkhealth/hl7v2-ast";
import { createTraversal } from "./traversal";
import type { Action, Path, Visitor } from "./types";
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
  test: string | Partial<Nodes> | ((node: Nodes, path: Path) => boolean),
  visitor: Visitor
): void;

/**
 * Visit nodes in an HL7 AST tree.
 * Pure functional implementation - no classes, no mutations.
 *
 * @param tree - The tree to traverse (can be any node type, not just Root)
 * @param test - Optional test to filter nodes (type string, partial match, or function)
 * @param visitor - Function called for each matching node
 */
export function visit(
  tree: Nodes,
  arg2:
    | Visitor
    | string
    | Partial<Nodes>
    | ((node: Nodes, path: Path) => boolean),
  arg3?: Visitor
): void {
  let test:
    | string
    | Partial<Nodes>
    | ((node: Nodes, path: Path) => boolean)
    | null = null;
  let visitor: Visitor;

  // Handle overloads
  if (typeof arg2 === "function" && arg3 === undefined) {
    // Check if arg2 is a Visitor or a test function by checking return type
    // Visitor returns Action | number | undefined, test function returns boolean
    // We can't distinguish at compile time, so we assume it's a Visitor
    visitor = arg2 as Visitor;
  } else {
    test = arg2 as
      | string
      | Partial<Nodes>
      | ((node: Nodes, path: Path) => boolean);
    visitor = arg3 as Visitor;
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
