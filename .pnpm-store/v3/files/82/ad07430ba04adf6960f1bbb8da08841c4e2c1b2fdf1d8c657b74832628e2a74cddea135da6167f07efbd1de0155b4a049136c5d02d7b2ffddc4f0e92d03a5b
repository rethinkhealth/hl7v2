type IsArrayIncludingAllOf = {
    <T extends any[]>(allowedValues: T): {
        (value: unknown): value is T;
    };
    <T extends any[]>(allowedValues: T, value: unknown): value is T;
};
/**
 * Asserts that `value` is an `Array` including all of the values provided in `allowedValues`. It could also include
 * additional values or be in a different order, but if every value in `allowedValues` features in `value` then this
 * will return `true`.
 *
 * @tags guard, arrays, multiple-conditions
 */
export declare const isArrayIncludingAllOf: IsArrayIncludingAllOf;
export {};
