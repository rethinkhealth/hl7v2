import type { Nodes } from "@rethinkhealth/hl7v2-ast";
import type { VisitorResult } from "unist-util-visit-parents";

/**
 * Visit information computed for each node.
 */
export type VisitInfo = {
  /** 0-based index among siblings */
  index: number;

  /** 1-based sequence (HL7v2 convention). For segment-header: 0 */
  sequence: number;

  /** 1-based depth in tree (root = 1) */
  depth: number;

  /** Lazy-computed metadata (e.g., { header: "MSH" } or { name: "PATIENT" }) */
  metadata: Record<string, unknown> | undefined;
};

/**
 * A function called for each node during traversal.
 *
 * @param node - Current node being visited
 * @param ancestors - Array of ancestor nodes from root to parent
 * @param info - Visit info with index, sequence, depth, and metadata
 * @returns VisitorResult to control traversal (EXIT, SKIP, etc.)
 */
export type Visitor<T extends Nodes = Nodes> = (
  node: T,
  ancestors: Nodes[],
  info: VisitInfo
) => VisitorResult;

/**
 * Predicate function to test if a node matches filter criteria.
 */
export type Predicate = (node: Nodes, ancestors: Nodes[]) => boolean;

/**
 * Filter criteria to determine which nodes to visit.
 *
 * Can be:
 * - string: matches `node.type`
 * - object: matches properties (partial match)
 * - function: predicate returning boolean or type guard
 * - null: matches everything
 */
export type Test<T extends Nodes = Nodes> =
  | string
  | Partial<T>
  | ((node: Nodes, ancestors: Nodes[]) => node is T)
  | ((node: Nodes, ancestors: Nodes[]) => boolean)
  | null;
