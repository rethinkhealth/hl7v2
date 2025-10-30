import type { Node } from "@rethinkhealth/hl7v2-ast";

/**
 * Diagnostic definition.
 *
 * A diagnostic is a message about a problem in the HL7v2 message. It is used to
 * report issues to the user.
 *
 * Diagnostics are defined per-package with type, namespace, and code that
 * compose the `ruleId`.
 *
 * Diagnostics are used in conjunction with the `report()` function to report
 * issues to the user.
 */
export type Diagnostic = Readonly<{
  /**
   * Domain/concern (order, field, conformance, segment, group, datatype, etc.)
   */
  namespace: `hl7v2-${
    | "validator"
    | "lint"
    | "annotator"
    | "transformer"
    | "parser"
    | string}`;

  /**
   * Specific issue code (transition, required, acceptance, mismatch, etc.)
   */
  code: string;

  /**
   * Full description of the rule.
   *
   * _You should use markdown._
   */
  description?: string;

  /**
   * Default severity
   *
   * @defaultValue 'info'
   */
  severity?: "error" | "warning" | "info";

  /**
   * Message.
   *
   */
  message: string;

  /**
   * Optional URL to documentation
   */
  helpUrl?: string;
}>;
