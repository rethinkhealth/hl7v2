import type { Option } from './index.js';
import type { AnyOption, OptionType } from '../fn/types.js';
export type AndThen = {
    <Fn extends (value: any) => AnyOption, I extends AnyOption, V = OptionType<I>, O = Fn extends (value: V) => Option<infer O> ? Option<O> : never>(mapFn: Fn): {
        (option: I): O;
    };
    <Fn extends (value: any) => AnyOption, I extends AnyOption, V = OptionType<I>, O = Fn extends (value: V) => Option<infer O> ? Option<O> : never>(mapFn: Fn, option: I): O;
};
/**
 * Applies a mapping function to the value of an `Option`, returning a new `Option`. If the input `Option` is `None`,
 * the function immediately returns `None` without calling the mapping function.
 *
 * @tags option, transform, transform-option, right-biased
 */
export declare const andThen: AndThen;
