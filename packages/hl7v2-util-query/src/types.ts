import type {
  Component,
  Field,
  FieldRepetition,
  Segment,
  Subcomponent,
} from "@rethinkhealth/hl7v2-ast";

export type GroupLocator = {
  name: string;
  repetition?: number;
};

export type SegmentLocator = {
  name: string;
  repetition?: number;
};

export type PathParts = {
  groups?: GroupLocator[];
  segment: SegmentLocator;
  field?: number;
  repetition?: number;
  component?: number;
  subcomponent?: number;
};

/**
 * Infer the exact node type from an HL7 path string at compile time.
 *
 * Uses template literal types to parse path structure and return the
 * corresponding AST node type. Patterns are checked from most specific
 * to least specific to ensure correct matching.
 *
 * @example
 * ```typescript
 * type T1 = InferNodeType<"PID">; // Segment
 * type T2 = InferNodeType<"PID-5">; // Field
 * type T3 = InferNodeType<"PID-5[1]">; // FieldRepetition
 * type T4 = InferNodeType<"PID-5.2">; // Component
 * type T5 = InferNodeType<"PID-5[1].2">; // Component
 * type T6 = InferNodeType<"PID-5.2.1">; // Subcomponent
 * type T7 = InferNodeType<"ORDER-OBR-5">; // Field
 * ```
 */
export type InferNodeType<Path extends string> =
  // Check most specific patterns first (subcomponents)
  Path extends `${string}-${string}.${string}.${string}`
    ? Subcomponent
    : Path extends `${string}-${string}[${string}].${string}.${string}`
      ? Subcomponent
      : // Components (one dot after field)
        Path extends `${string}-${string}.${string}`
        ? Component
        : Path extends `${string}-${string}[${string}].${string}`
          ? Component
          : // Field repetitions (brackets, no dots after)
            Path extends `${string}-${string}[${string}]`
            ? FieldRepetition
            : // Fields (hyphen, no brackets or dots)
              Path extends `${string}-${string}`
              ? Field
              : // Default to segment
                Segment;
