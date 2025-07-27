type IsArrayIncludingAnyOf = {
    <T extends any[]>(allowedValues: T): {
        (value: unknown): value is T;
    };
    <T extends any[]>(allowedValues: T, value: unknown): value is T;
};
/**
 * Asserts that `value` is an `Array` including at least one of the members of `allowedValues`.
 *
 * @tags guard, arrays, multiple-conditions
 */
export declare const isArrayIncludingAnyOf: IsArrayIncludingAnyOf;
export {};
