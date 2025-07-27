import type { AnyOption } from '../fn/types.js';
export type And = {
    <A extends AnyOption, B extends AnyOption>(b: B): {
        (a: A): B;
    };
    <A extends AnyOption, B extends AnyOption>(b: B, a: A): B;
};
/**
 * Combines two `Option`s, returning the second `Option` if both are `Some`, and `None` otherwise.
 *
 * @tags option, transform, transform-option
 */
export declare const and: And;
