/**
 * Diagnostic definition.
 *
 * A diagnostic is a message about a problem in the HL7v2 message. It is used to report issues to the user.
 *
 * Diagnostics are defined per-package with type, namespace, and code that compose the `ruleId`.
 *
 * Diagnostics are used in conjunction with the `report()` function to report issues to the user.
 */
export type Diagnostic = Readonly<{
  /**
   * Tool/plugin category
   */
  type: "validator" | "lint" | "annotator" | "transformer" | "parser" | string;

  /**
   * Domain/concern (order, field, conformance, segment, group, datatype, etc.)
   */
  namespace: string;

  /**
   * Specific issue code (transition, required, acceptance, mismatch, etc.)
   */
  code: string;

  /**
   * Full description of the rule
   */
  description?: string;

  /**
   * Default severity
   *
   * @defaultValue 'info'
   */
  severity?: "error" | "warning" | "info" | null | undefined;

  /**
   * Message formatter function.
   * Takes context and returns the formatted message.
   * The function signature is self-documenting: it shows what context is required.
   */
  message: (context: Record<string, unknown>) => string;

  /**
   * Optional URL to documentation
   */
  helpUrl?: string;
}>;
