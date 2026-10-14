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
  segment: SegmentLocator;
  field?: number;
  repetition?: number;
  component?: number;
  subcomponent?: number;
}

/**
 * Infer the node a field reference names, from the part of a path after its
 * `-`: `FIELD[REPETITION][.COMPONENT[.SUBCOMPONENT]]`.
 */
type InferFieldNodeType<Reference extends string> =
  Reference extends `${string}.${string}.${string}`
    ? Subcomponent
    : Reference extends `${string}.${string}`
      ? Component
      : Reference extends `${string}[${string}]`
        ? FieldRepetition
        : Field;

/**
 * Infer the exact node type from an HL7 path string at compile time.
 *
 * A path holds at most one `-`, between a segment and its field. Without
 * one, the path names a segment or a group, and the AST decides which. With
 * one, the part after it decides the node.
 *
 * @example
 *   ```typescript
 *   type T1 = InferNodeType<"PID">; // Segment | Group
 *   type T2 = InferNodeType<"ORDER">; // Segment | Group
 *   type T3 = InferNodeType<"ORDER.OBR">; // Segment | Group
 *   type T4 = InferNodeType<"PID-5">; // Field
 *   type T5 = InferNodeType<"PID-5[1]">; // FieldRepetition
 *   type T6 = InferNodeType<"PID-5.2">; // Component
 *   type T7 = InferNodeType<"PID-5[1].2">; // Component
 *   type T8 = InferNodeType<"PID-5.2.1">; // Subcomponent
 *   type T9 = InferNodeType<"PID-4[1].1.1">; // Subcomponent
 *   type T10 = InferNodeType<"ORDER.OBR-5">; // Field
 *   ```;
 */
export type InferNodeType<Path extends string> = string extends Path
  ? Nodes
  : Path extends `${string}-${infer Reference}`
    ? InferFieldNodeType<Reference>
    : Segment | Group;
