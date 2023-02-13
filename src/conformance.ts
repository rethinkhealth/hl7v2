import { z } from "zod";

export const ConformanceSchema = z.object({
  /**
   * Indicates requirements for the presence (appearance) of an element.
   **/
  usage: z.string(),
  /**
   * Indicates the number of occurrences for an element by specifying the
   * minimum and maximum bounds.
   **/
  cardinality: z.string(),
  /**
   * Defines the data element structure and, at the primitive level, the type of
   * data it may contain. Constraints include type substitution and
   * specialization (when combined with other constraint types).
   **/
  datatype: z.string(),
  /**
   * Defines the vocabulary binding and vocabulary definitions. Indicates the
   * allowable content for a coded element.
   **/
  vocabulary: z.string(),
  /**
   * Defines a constraint on the number of characters that may be present in one
   * occurrence of an element. Can specify a maximum length, a minimum and
   * maximum length, or minimum for the maximum length supported (Conformance
   * Length).
   **/
  length: z.string(),
  /**
   * Defines constraints on data (content), such as a fixed value or adherence
   * to a specific format.
   **/
  content: z.string(),
  /**
   * A method of expressing content constraints. An explicit statement expressed
   * in text or a testable expression that defines a constraint.
   **/
  conformanceStatement: z.string(),
  /**
   * Content constraints used to express dependencies among a set of data
   * values.
   **/
  coConstraint: z.string(),
  /**
   * Allows for occurrences of a field to be defined with different constraints.
   **/
  slicing: z.string(),
  /**
   * Allows for refinement of the semantics of a data element based on the use
   * case
   **/
  semanticRefinement: z.string(),
  // FIXME: This is not in the spec
  // optionality: z.string(),
  // table: z.string(),
});

export type Conformance = z.infer<typeof ConformanceSchema>;
