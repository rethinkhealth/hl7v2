/**
 * HL7v2 AST visitor, typed for `@glion/ast`, with the semantics of
 * `unist-util-visit-parents`.
 *
 * @module
 */

import type { Nodes } from "@glion/ast";
import { EXIT, SKIP } from "unist-util-visit-parents";
import type { VisitorResult } from "unist-util-visit-parents";

import type { Predicate, Test, Visitor } from "./types";
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

  walk(tree, [], createTest(test as Test<Nodes>), visitor as Visitor<Nodes>);
}

/**
 * Visits `node`, then its children in order, and returns the visitor's result
 * for `node`, or the first EXIT a descendant's visitor returns.
 *
 * Reads `children` after the visitor runs, and after each child, so a visitor
 * may change its own children or its parent's.
 */
function walk(
  node: Nodes,
  ancestors: Nodes[],
  predicate: Predicate,
  visitor: Visitor<Nodes>
): VisitorResult {
  const result = predicate(node, ancestors)
    ? visitor(node, ancestors)
    : undefined;
  const action = Array.isArray(result) ? result[0] : result;

  if (action === EXIT || action === SKIP || !("children" in node)) {
    return result;
  }

  const childAncestors = [...ancestors, node];
  let index = 0;

  while (index < node.children.length) {
    const child = node.children[index] as Nodes;
    const childResult = walk(child, childAncestors, predicate, visitor);
    const childAction = Array.isArray(childResult)
      ? childResult[0]
      : childResult;
    const next = Array.isArray(childResult) ? childResult[1] : childResult;

    if (childAction === EXIT) {
      return childResult;
    }

    index = typeof next === "number" ? next : index + 1;
  }

  return result;
}
