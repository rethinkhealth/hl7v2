import type { UnaryGuard } from '../fn/types.js';
type IsArrayOf = {
    (guard: UnaryGuard): {
        (values: unknown): boolean;
    };
    (guard: UnaryGuard, values: unknown): boolean;
};
/**
 * Does every value pass the given Guard?
 *
 * ## Examples
 *
 * ```ts
 * isArrayOf(isNonEmptyString, ['click', 'mousedown', 'load']);
 * ```
 *
 * @tags guard, arrays
 */
export declare const isArrayOf: IsArrayOf;
export {};
