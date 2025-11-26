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

export type OptionalityCode = "R" | "RE" | "O" | "C" | "X" | "B" | "W";

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
  min: number,
  max: number
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
    case "R":
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

    case "X":
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

    case "RE":
    case "O":
    case "C":
    case "B":
    case "W":
      return { ok: true };

    default:
      return { ok: true };
  }
}
