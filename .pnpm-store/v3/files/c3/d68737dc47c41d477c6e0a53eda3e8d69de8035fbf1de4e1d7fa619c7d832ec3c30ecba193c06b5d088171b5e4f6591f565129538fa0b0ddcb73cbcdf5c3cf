import { Effect } from 'effect';
import type { Ctx } from '../get-context/index.js';
import { NameAndVersionPropsStrategy } from '../strategy/name-and-version-props.js';
import { NamedVersionStringStrategy } from '../strategy/named-version-string.js';
import { UnnamedVersionStringStrategy } from '../strategy/unnamed-version-string.js';
import { VersionsByNameStrategy } from '../strategy/versions-by-name.js';
export declare namespace Strategy {
    type Any = NameAndVersionPropsStrategy | NamedVersionStringStrategy | UnnamedVersionStringStrategy | VersionsByNameStrategy;
}
declare const InvalidCustomTypeError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => Readonly<A> & {
    readonly _tag: "InvalidCustomTypeError";
};
export declare class InvalidCustomTypeError extends InvalidCustomTypeError_base<{
    readonly config: unknown;
    readonly reason: string;
}> {
}
export declare function getCustomTypes({ rcFile, }: Ctx['config']): Effect.Effect<Strategy.Any[], InvalidCustomTypeError>;
export {};
