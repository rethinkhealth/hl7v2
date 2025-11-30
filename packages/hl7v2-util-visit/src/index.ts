import type { Nodes } from "@rethinkhealth/hl7v2-ast";
import type { VisitorResult } from "unist-util-visit-parents";
import { EXIT, SKIP } from "unist-util-visit-parents";
import type { Test, VisitInfo, Visitor } from "./types";
import {
  computeIndex,
  computeSequence,
  createTest,
  extractMetadata,
  getChildren,
} from "./utils";

export type { VisitorResult } from "unist-util-visit-parents";
// biome-ignore lint/performance/noBarrelFile: fine
export { EXIT, SKIP } from "unist-util-visit-parents";

export type { Predicate, Test, VisitInfo, Visitor } from "./types";

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
 * Uses nested visits to efficiently pass context (index, sequence, depth) to children.
 *
 * @param tree - The tree to traverse (can be any node type, not just Root)
 * @param test - Optional test to filter nodes (type string, partial match, or Test function)
 * @param visitor - Function called for each matching node
 *
 * @remarks
 * **Important**: If you pass a function as the second argument, it is always treated
 * as a Visitor, never as a Test. To use a Test function, you MUST provide both the
 * test and visitor parameters: `visit(tree, testFn, visitorFn)`.
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

  // Use nested visits to pass context efficiently
  // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: traversal logic is inherently complex
  function traverse(
    node: Nodes,
    ancestors: Nodes[],
    info: VisitInfo
  ): VisitorResult {
    let skipChildren = false;

    // Call visitor if node matches predicate
    if (predicate(node, ancestors)) {
      const result = visitor(node as T, ancestors, info);
      if (result === EXIT) {
        return EXIT;
      }
      if (result === SKIP) {
        skipChildren = true;
      }
    }

    // Skip children if requested
    if (skipChildren) {
      return;
    }

    // Get children
    const children = getChildren(node);
    if (!children) {
      return;
    }

    // Visit each child with computed info
    const childAncestors = [...ancestors, node];
    const childDepth = info.depth + 1;

    for (const [i, child] of children.entries()) {
      if (!child) {
        continue;
      }

      const childInfo: VisitInfo = {
        index: computeIndex(node, i),
        sequence: computeSequence(node, i),
        depth: childDepth,
        metadata: extractMetadata(child),
      };

      const result = traverse(child, childAncestors, childInfo);
      if (result === EXIT) {
        return EXIT;
      }
    }
  }

  // Start traversal with root info
  const rootInfo: VisitInfo = {
    index: 0,
    sequence: 1,
    depth: 1,
    metadata: extractMetadata(tree),
  };

  traverse(tree, [], rootInfo);
}
