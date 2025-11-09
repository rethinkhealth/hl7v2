/**
 * Represents a semantic version with major, minor, and patch components.
 */
export type Hl7Version = {
  major: number;
  minor: number;
  patch: number;
};

/**
 * Comparison operators supported in version ranges.
 */
export type ComparisonOperator = "=" | "<" | "<=" | ">" | ">=";

/**
 * Internal representation of a version range comparator.
 */
export type Comparator = {
  op: ComparisonOperator;
  v: Hl7Version;
};

/**
 * Result of a comparison operation.
 */
export type ComparisonResult = -1 | 0 | 1;

/**
 * Security constraints for input validation.
 */
export const MAX_VERSION_STRING_LENGTH = 100;
export const MAX_RANGE_STRING_LENGTH = 1000;
export const MAX_SAFE_VERSION_COMPONENT = 2 ** 31 - 1; // Max safe int32 for interop
