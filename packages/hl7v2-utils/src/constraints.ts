import type { Field, Nodes } from "@rethinkhealth/hl7v2-ast";
import { getLength, isEmptyNode } from "./utils";

export type ValidationStatus = "valid" | "invalid";

export type ValidationErrorCode =
  // Constraints
  | "MISSING"
  | "EMPTY"
  | "UNEXPECTED_CONTENT"
  | "CARDINALITY_UNDERFLOW"
  | "CARDINALITY_OVERFLOW"
  | "LENGTH_UNDERFLOW"
  | "LENGTH_OVERFLOW"
  // Value Sets
  | "VALUE_NOT_IN_TABLE";

export type ValidationError = {
  code: ValidationErrorCode;
  message: string;
  expected?: string | number | Array<string | number>;
  actual?: string | number | Array<string | number>;
};

export type ValidationSuccess = {
  ok: true;
};

export type ValidationFailure = {
  ok: false;
  error: ValidationError;
};

export type ValidationResult = ValidationSuccess | ValidationFailure;

export const OptionalityCode = {
  Required: "R",
  /**
   * Required, but may be empty.
   *
   * @remarks
   * The use of the RE usage code is qualified with the “if data is known”
   * clause. The sender must interpret the clause as “the capability must always
   * be supported, and data must always be sent if known”. To clarify, the
   * sender does not determine whether the data should be sent; to be conformant
   * to the rule, the data must be sent. There is a misconception where the RE
   * usage is interpreted as “the capability must always be supported, and data
   * may or may not be sent even when known based on a condition external to the
   * profile specification”.
   *
   * The receiving application must process in a meaningful way the information
   * conveyed by an element with an “RE” usage designation.
   * The receiving application must process the message if the element is omitted
   * (that is, an exception must not be raised because the element is missing). A
   * receiving application must not raise an exception due to the presence of a
   * required element.
   */
  RequiredOrEmpty: "RE",
  /**
   * Optional
   *
   * There are no implementation requirements. The “O” usage designation is a
   * placeholder indicating that the usage for this element has not yet been
   * specified.
   */
  Optional: "O",
  /**
   * Undeclated / Conditional.
   *
   * There are no implementation requirements. The “C” usage designation is a
   * placeholder indicating that the usage for this element has not yet been
   * specified.
   */
  Conditional: "C",
  /**
   * Not Supported.
   *
   * There are no implementation requirements. The application must not value an
   * element with an “X” usage designation.
   */
  NotSupported: "X",
  /**
   * Backward Compatible
   *
   * There are no implementation requirements. The “B” usage indicates that the
   * element is retained for backwards compatibility of the element. Another
   * usage indicator may be assigned in a derived profile.
   */
  BackwardCompatible: "B",
  /**
   * Withdrawn
   *
   * The element has been withdrawn from the standard. There are no
   * implementation requirements. The application must not value an element with
   * a "W" usage designation.
   */
  Withdrawn: "W",
} as const;

export type OptionalityCode =
  (typeof OptionalityCode)[keyof typeof OptionalityCode];

/**
 * Checks if a field satisfies the cardinality constraint.
 */
export function checkCardinality(
  node: Field | undefined,
  min: number,
  max: number | "*"
): ValidationResult {
  const count = node?.children ? node.children.length : 0;

  if (count < min) {
    return {
      ok: false,
      error: {
        code: "CARDINALITY_UNDERFLOW",
        message: `has ${count} repetitions but requires at least ${min}`,
        expected: min,
        actual: count,
      },
    };
  }

  if (max !== "*" && count > max) {
    return {
      ok: false,
      error: {
        code: "CARDINALITY_OVERFLOW",
        message: `has ${count} repetitions but allows at most ${max}`,
        expected: max,
        actual: count,
      },
    };
  }

  return { ok: true };
}

/**
 * Checks if a node satisfies the length constraint.
 */
export function checkLength(
  node: Nodes | undefined,
  max: number,
  min = 0
): ValidationResult {
  if (min < 0 || max < 0) {
    throw new Error("Min and max lengths must be non-negative");
  }

  if (min > max) {
    throw new Error("Min length cannot be greater than max length");
  }

  if (!node || isEmptyNode(node)) {
    return { ok: true };
  }

  const length = getLength(node);

  if (length < min) {
    return {
      ok: false,
      error: {
        code: "LENGTH_UNDERFLOW",
        message: `has length ${length} but requires at least ${min}`,
        expected: min,
        actual: length,
      },
    };
  }

  if (length > max) {
    return {
      ok: false,
      error: {
        code: "LENGTH_OVERFLOW",
        message: `has length ${length} but allows at most ${max}`,
        expected: max,
        actual: length,
      },
    };
  }

  return { ok: true };
}

/**
 * Checks if a node satisfies the optionality constraint.
 */
export function checkOptionality(
  node: Nodes | undefined,
  optionality: OptionalityCode | string
): ValidationResult {
  const code = optionality.toUpperCase();

  switch (code) {
    case OptionalityCode.Required:
      if (!node) {
        return {
          ok: false,
          error: {
            code: "MISSING",
            message: "is required but missing",
            expected: "R",
          },
        };
      }
      if (isEmptyNode(node)) {
        return {
          ok: false,
          error: {
            code: "EMPTY",
            message: "is required but empty",
            expected: "R",
          },
        };
      }
      return { ok: true };

    case OptionalityCode.NotSupported:
      if (node && !isEmptyNode(node)) {
        return {
          ok: false,
          error: {
            code: "UNEXPECTED_CONTENT",
            message: "is not supported but present",
            expected: "X",
          },
        };
      }
      return { ok: true };

    case OptionalityCode.RequiredOrEmpty:
    case OptionalityCode.Optional:
    case OptionalityCode.Conditional:
    case OptionalityCode.BackwardCompatible:
    case OptionalityCode.Withdrawn:
      return { ok: true };

    default:
      return { ok: true };
  }
}
