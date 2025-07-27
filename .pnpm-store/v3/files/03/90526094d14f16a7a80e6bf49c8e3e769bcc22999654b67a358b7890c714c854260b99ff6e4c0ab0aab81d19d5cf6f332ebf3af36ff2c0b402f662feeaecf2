import type { Option } from '../option/index.js';
import type { Err, Ok, Result } from '../result/index.js';
/** Misc Object */
export type AnyRecord = Record<string | number | symbol, unknown>;
/** A function of any kind */
export type AnyFn = (...args: any[]) => any;
/** A guard/isFoo function */
export type AnyGuard = (...args: any[]) => boolean;
/** A guard/isFoo function which accepts one argument */
export type UnaryGuard<T = unknown> = (value: T) => value is any;
/** Get type of a type guard if it passes */
export type GuardType<T> = T extends (o: any, ...rest: any) => o is infer A ? A : never;
/** A Jasmine-like asymmetric matcher */
export type AsymmetricMatcher<T> = {
    asymmetricMatch(value: unknown): value is T;
};
/** A Jasmine-like asymmetric matcher */
export type AnyAsymmetricMatcher = AsymmetricMatcher<any>;
/** Get type of a Jasmine-like asymmetric matcher */
export type AsymmetricMatcherType<T> = T extends {
    asymmetricMatch(value: any): value is infer V;
} ? V : never;
/** Get type of members of an array */
export type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
/** A function with no arguments or return */
export type VoidFn = () => void;
/** Alias for `ReturnType` */
export type R<F extends AnyFn> = ReturnType<F>;
/** A Generator only yielding values of type `T` */
export type Gen<T> = Generator<T, void, unknown>;
/** An async Generator only yielding values of type `T` */
export type AsyncGen<T> = AsyncGenerator<T, void, unknown>;
/** Get the type which a Generator yields */
export type GenYield<Type> = Type extends Gen<infer X> ? X : never;
/** Get the type which an Async Generator yields */
export type AsyncGenYield<Type> = Type extends AsyncGen<infer X> ? X : never;
/** A Reducer function */
export type Reducer<I, O> = (acc: O, value: I) => O;
/** Get the Ok value type from a Result */
export type ResOk<R> = R extends Ok<infer T> ? T : R extends Err ? never : R extends Result<infer X> ? X : never;
/** Get the Err value type from a Result */
export type ResErr<R> = R extends Err<infer T> ? T : R extends Ok<any> ? never : R extends Result<infer X> ? X : never;
/** An Option containing anything */
export type AnyOption = Option<any>;
/** A Result containing anything */
export type AnyResult = Result<any, any>;
/** Create a Union of 2 Results */
export type ResultUnion<B extends AnyResult, A extends AnyResult> = Result<ResOk<B> | ResOk<A>, ResErr<B> | ResErr<A>>;
/** An Ok containing anything */
export type AnyOk = Ok<any>;
/** An Err containing anything */
export type AnyErr = Err<any>;
/** Get value type of an Option */
export type OptionType<T> = T extends Option<infer V> ? V : never;
