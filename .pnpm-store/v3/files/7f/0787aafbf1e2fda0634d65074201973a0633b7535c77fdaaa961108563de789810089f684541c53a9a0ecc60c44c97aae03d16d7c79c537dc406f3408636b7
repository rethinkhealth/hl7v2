export type IsArrayIncludingOnly = {
    <T extends any[]>(allowedValues: T): {
        (value: unknown): value is T;
    };
    <T extends any[]>(allowedValues: T, value: unknown): value is T;
};
/**
 * Asserts that a value is an `Array` including only the values provided in the given `allowedValues` array and no
 * others. The order and number of times each value appears in either array does not matter. Returns true unless `value`
 * contains a value which does not feature in `allowedValues`.
 *
 * @tags guard, arrays, multiple-conditions
 */
export declare const isArrayIncludingOnly: IsArrayIncludingOnly;
