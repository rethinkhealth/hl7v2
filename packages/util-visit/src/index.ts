/**
 * HL7v2 AST visitor over `unist-util-visit-parents`, typed for `@glion/ast`.
 *
 * @module
 */

import type { Nodes } from "@glion/ast";
import { visitParents } from "unist-util-visit-parents";

import type { Test, Visitor } from "./types";
import { createTest } from "./utils";

export type { VisitorResult } from "unist-util-visit-parents";

export { EXIT, SKIP } from "unist-util-visit-parents";

export type { Predicate, Test, Visitor } from "./types";

// Overload signatures
export function visit(tree: Nodes, visitor: Visitor): void;
export function visit<Type extends Nodes["type"]>(
  tree: Nodes,
  test: Type,
  visitor: Visitor<Extract<Nodes, { type: Type }>>
): void;
export function visit<T extends Nodes>(
  tree: Nodes,
  test: Test<T>,
  visitor: Visitor<T>
): void;

/**
 * Visit nodes in an HL7 AST tree.
 *
 * @param tree - The tree to traverse (can be any node type, not just Root)
 * @param test - Optional test to filter nodes (type string, partial match, or
 *   Test function)
 * @param visitor - Function called for each matching node
 *
 *   **Important**: If you pass a function as the second argument, it is always
 *   treated as a Visitor, never as a Test. To use a Test function, you MUST
 *   provide both the test and visitor parameters: `visit(tree, testFn,
 *   visitorFn)`.
 */
export function visit<T extends Nodes>(
  tree: Nodes,
  arg2: Visitor<T> | Test<T>,
  arg3?: Visitor<T>
): void {
  let test: Test<T> = null;
  let visitor: Visitor<T>;

  if (arg3 === undefined) {
    visitor = arg2 as Visitor<T>;
  } else {
    test = arg2 as Test<T>;
    visitor = arg3;
  }

  const predicate = createTest(test as Test<Nodes>);

  // The caller's test runs in the visitor, not as visit-parents' test: it may
  // read `ancestors`, which visit-parents gives only to the visitor.
  visitParents(tree, (node, ancestors) => {
    if (!predicate(node, ancestors)) {
      // Returning nothing means "continue": visit-parents still walks into
      // this node's children, so `visit(tree, "field", …)` reaches the fields
      // of segments it does not match.
      return;
    }

    // visit-parents reads the visitor's return value to decide what to visit
    // next (CONTINUE, SKIP, EXIT, an index, or both), so the caller's result
    // is passed through unchanged.
    return visitor(node as T, ancestors);
  });
}
