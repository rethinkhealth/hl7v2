/**
 * Discriminated result type for profile resolution.
 *
 * Follows the Result pattern — either success with a value,
 * or failure with a human-readable reason. The caller decides
 * how to handle the failure (report to VFile, throw, log, etc.).
 */
export type ResolveResult<T> =
  | { ok: true; value: T }
  | { ok: false; reason: string };
