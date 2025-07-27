import { Effect } from 'effect';
import type { Specifier } from '../index.js';
declare const NonSemverError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => Readonly<A> & {
    readonly _tag: "NonSemverError";
};
export declare class NonSemverError extends NonSemverError_base<{
    specifier: Specifier.Any;
}> {
    static asEffect<T>(specifier: Specifier.Any): Effect.Effect<T, NonSemverError>;
}
export {};
