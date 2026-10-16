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
 * Visits `tree` and every node below it, depth-first and in document order,
 * calling `visitor` with each node that passes `test` and that node's
 * ancestors.
 *
 * `test` is a node type (`"segment"`), an object whose own properties a node
 * must equal (`{ name: "PID" }`), or a function of `(node, ancestors)`. With no
 * test, every node passes. A function passed as the second argument is always
 * the visitor; a test function needs the three-argument form.
 *
 * The visitor's result decides what the walk does next:
 *
 * - Nothing: enter the node's children, then go on.
 * - `SKIP`: do not enter the node's children.
 * - `EXIT`: stop the whole walk.
 * - A number: go on at that index among the node's siblings, after the visitor
 *   removed or inserted siblings. `[action, index]` combines both.
 *
 * `ancestors` runs from `tree` to the node's parent. Siblings share one array:
 * a visitor MUST NOT change it, and MAY keep it, since a later visit never
 * changes it either.
 *
 * With a type test, the walk does not enter a node that cannot contain that
 * type in an HL7v2 tree (Root → Group → Segment → Field → FieldRepetition →
 * Component → Subcomponent): `visit(tree, "segment", …)` never enters a
 * segment. Nodes of a type `@glion/ast` does not define are always entered.
 *
 * @param tree - The node the walk starts at, of any type.
 * @param test - Which nodes the visitor is called with.
 * @param visitor - Called with each node that passes `test`.
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

  walk(tree, [], {
    predicate: createTest(test as Test<Nodes>),
    unmatchableBelow: UNMATCHABLE_BELOW.get(test),
    visitor: visitor as Visitor<Nodes>,
  });
}

/** What one `visit` call holds fixed for every node it walks. */
interface Walk {
  predicate: Predicate;
  /** Node types whose children cannot pass the test. */
  unmatchableBelow: ReadonlySet<string> | undefined;
  visitor: Visitor<Nodes>;
}

/**
 * The depth of each `@glion/ast` node type in an HL7v2 tree. A group may hold
 * groups, so it is the one type found below its own depth.
 */
const DEPTH: ReadonlyMap<string, number> = new Map([
  ["root", 0],
  ["group", 1],
  ["segment", 2],
  ["field", 3],
  ["field-repetition", 4],
  ["component", 5],
  ["subcomponent", 6],
]);

/**
 * For each node type, the node types whose children cannot include a node of
 * that type. Any other test, such as an object or a function, finds nothing.
 */
const UNMATCHABLE_BELOW: ReadonlyMap<unknown, ReadonlySet<string>> = new Map(
  [...DEPTH].map(([type, depth]) => [
    type,
    new Set(
      [...DEPTH]
        .filter(
          ([parent, parentDepth]) =>
            parentDepth >= depth && !(parent === "group" && type === "group")
        )
        .map(([parent]) => parent)
    ),
  ])
);

/**
 * Visits `node`, then its children in order, and returns the visitor's result
 * for `node`, or the first EXIT a descendant's visitor returns.
 *
 * Reads `children` after the visitor runs, and again after each child, so a
 * visitor may change its own children or its parent's.
 */
function walk(node: Nodes, ancestors: Nodes[], context: Walk): VisitorResult {
  const result = context.predicate(node, ancestors)
    ? context.visitor(node, ancestors)
    : undefined;
  const action = Array.isArray(result) ? result[0] : result;

  if (
    action === EXIT ||
    action === SKIP ||
    !("children" in node) ||
    context.unmatchableBelow?.has(node.type)
  ) {
    return result;
  }

  // One array for all of this node's children: the visitor's contract forbids
  // changing it, so siblings can share it.
  const childAncestors = [...ancestors, node];
  let index = 0;

  while (index < node.children.length) {
    const child = node.children[index] as Nodes;
    const childResult = walk(child, childAncestors, context);
    const childAction = Array.isArray(childResult)
      ? childResult[0]
      : childResult;

    if (childAction === EXIT) {
      return childResult;
    }

    // A child's visitor that returns an index (alone or as `[action, index]`)
    // names the sibling to visit next; otherwise the walk moves one along.
    const next = Array.isArray(childResult) ? childResult[1] : childResult;
    index = typeof next === "number" ? next : index + 1;
  }

  return result;
}
