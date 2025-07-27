import { Effect } from 'effect';
import type { Ctx } from '../get-context/index.js';
import type { InvalidCustomTypeError, Strategy } from './get-custom-types.js';
declare const DeprecatedTypesError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => Readonly<A> & {
    readonly _tag: "DeprecatedTypesError";
};
export declare class DeprecatedTypesError extends DeprecatedTypesError_base<{
    readonly types: string[];
}> {
}
declare const RenamedWorkspaceTypeError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => Readonly<A> & {
    readonly _tag: "RenamedWorkspaceTypeError";
};
export declare class RenamedWorkspaceTypeError extends RenamedWorkspaceTypeError_base<Record<string, never>> {
}
export declare function getEnabledTypes({ cli, rcFile, }: Ctx['config']): Effect.Effect<Strategy.Any[], DeprecatedTypesError | InvalidCustomTypeError | RenamedWorkspaceTypeError>;
export {};
