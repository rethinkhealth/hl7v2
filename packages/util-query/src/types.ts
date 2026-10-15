import type {
  Component,
  Field,
  FieldRepetition,
  Group,
  Nodes,
  Segment,
  Subcomponent,
} from "@glion/ast";

export interface GroupLocator {
  name: string;
  repetition?: number;
}

export interface SegmentLocator {
  name: string;
  repetition?: number;
}

export interface PathParts {
  groups?: GroupLocator[];
  segment?: SegmentLocator;
  field?: number;
  repetition?: number;
  component?: number;
  subcomponent?: number;
}

/**
 * Infer the node a field reference names from the steps after the field
 * number: none, a component, or a component and a subcomponent.
 */
type InferFieldNodeType<
  FieldStep extends string,
  Rest extends string[],
> = Rest extends []
  ? FieldStep extends `${string}[${string}]`
    ? FieldRepetition
    : Field
  : Rest extends [string]
    ? Component
    : Subcomponent;

/** Split a path into its `.`-separated steps. */
type Steps<Path extends string> = Path extends `${infer Step}.${infer Rest}`
  ? [Step, ...Steps<Rest>]
  : [Path];

/**
 * Skip the named steps of a path. The first step that starts with a field
 * number decides the node; without one, the path names a segment or a group.
 */
type InferFromSteps<S extends string[]> = S extends [
  infer Step extends string,
  ...infer Rest extends string[],
]
  ? Step extends `${number}` | `${number}[${string}]`
    ? InferFieldNodeType<Step, Rest>
    : InferFromSteps<Rest>
  : Segment | Group;

/**
 * Infer the exact node type from an HL7 path string at compile time.
 *
 * Without a field number, the path names a segment or a group, and the AST
 * decides which. With one, the steps after it decide the node.
 *
 * @example
 *   ```typescript
 *   type T1 = InferNodeType<"PID">; // Segment | Group
 *   type T2 = InferNodeType<"ORDER">; // Segment | Group
 *   type T3 = InferNodeType<"ORDER.OBR">; // Segment | Group
 *   type T4 = InferNodeType<"PID.5">; // Field
 *   type T5 = InferNodeType<"PID.5[1]">; // FieldRepetition
 *   type T6 = InferNodeType<"PID.5.2">; // Component
 *   type T7 = InferNodeType<"PID.5[1].2">; // Component
 *   type T8 = InferNodeType<"PID.5.2.1">; // Subcomponent
 *   type T9 = InferNodeType<"PID.4[1].1.1">; // Subcomponent
 *   type T10 = InferNodeType<"ORDER.OBR.5">; // Field
 *   ```;
 */
export type InferNodeType<Path extends string> = string extends Path
  ? Nodes
  : InferFromSteps<Steps<Path>>;
