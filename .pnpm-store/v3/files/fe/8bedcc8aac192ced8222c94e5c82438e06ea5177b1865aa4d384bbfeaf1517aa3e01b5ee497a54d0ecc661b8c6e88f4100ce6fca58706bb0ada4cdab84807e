import { Effect } from 'effect';
import type { Io } from './index.js';
declare const GlobError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => Readonly<A> & {
    readonly _tag: "GlobError";
};
export declare class GlobError extends GlobError_base<{
    readonly error: string;
}> {
}
export declare function globSync(io: Io, patterns: string[]): Effect.Effect<string[], GlobError>;
export {};
