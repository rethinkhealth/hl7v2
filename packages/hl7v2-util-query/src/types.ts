import type { Nodes } from "@rethinkhealth/hl7v2-ast";

/**
 * Components for building HL7 path strings.
 * All numeric components use 1-based indexing to match HL7 conventions.
 */
export type PathParts = {
  /** Groups to traverse before reaching segment (e.g., ORDERS[2]-RESULT[1]) */
  groups?: Array<{ name: string; repetition?: number }>;
  /** Segment identifier and optional repetition */
  segment: { name: string; repetition?: number };
  /** Field number (1-based) */
  field?: number;
  /** Field repetition (1-based) */
  repetition?: number;
  /** Component index (1-based) */
  component?: number;
  /** Subcomponent index (1-based) */
  subcomponent?: number;
};

/**
 * Result of a query operation.
 */
export type QueryResult<T extends Nodes = Nodes> = {
  /** The found node, or null if not found */
  node: T | null;
  /** The path that was queried */
  path: string;
  /** Whether the node was found */
  found: boolean;
};

/**
 * Options for query operations.
 */
export type QueryOptions = {
  /** If true, create missing intermediate nodes (for future write operations) */
  createMissing?: boolean;
};
