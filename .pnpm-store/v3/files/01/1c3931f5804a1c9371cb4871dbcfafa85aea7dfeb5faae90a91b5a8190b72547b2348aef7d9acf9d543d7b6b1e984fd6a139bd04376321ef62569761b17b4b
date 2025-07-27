import type { Option } from './index.js';
export type Expect = {
    <T>(msg: string): {
        (option: Option<T>): T;
    };
    <T>(msg: string, option: Option<T>): T;
};
/**
 * Unwraps an `Option` value, returning the underlying value if it is `Some`. If the value is `None`, this function
 * panics with the provided error message.
 *
 * @tags option, unwrap, unsafe, right-biased
 */
export declare const expect: Expect;
