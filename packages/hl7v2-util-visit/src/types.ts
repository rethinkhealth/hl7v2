import type { Nodes } from "@rethinkhealth/hl7v2-ast";

/**
 * A single entry in the traversal path.
 * Simple, generic structure that works for any node type.
 */
export type PathEntry = {
  /** Type of the node (e.g., 'root', 'segment', 'field', 'component') */
  type: string;

  /** 1-based depth level in the tree (root = 1, its children = 2, etc.) */
  level: number;

  /** 1-based index within siblings at the same level */
  index: number;

  /** Reference to the actual node */
  node: Nodes;

  /** Extensible data object for custom metadata */
  data?: Record<string, unknown>;
};

/**
 * Ordered array of path entries from root to current node.
 * Pure data structure - just an array.
 */
export type Path = readonly PathEntry[];

/**
 * Control flow actions for traversal.
 */
export type Action = "skip" | "exit";

/**
 * A function called for each node during traversal.
 *
 * @param node - Current node being visited
 * @param path - Ordered array of PathEntry from traversal root to current node
 * @returns Action to control traversal flow, or void/undefined to continue normally
 */
export type Visitor<T extends Nodes = Nodes> = (
  node: T,
  path: Path
  // biome-ignore lint/suspicious/noConfusingVoidType: Visitor can return void, undefined, or Action
) => Action | void | undefined;

/**
 * Function that returns children of a node.
 */
export type ChildProvider = (node: Nodes) => Nodes[] | undefined;

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
  | ((node: Nodes, path: Path) => node is T)
  | ((node: Nodes, path: Path) => boolean)
  | null;
