import { Effect } from 'effect';
import type { Ctx } from '../get-context/index.js';
import type { GlobError } from '../io/glob-sync.js';
import type { Io } from '../io/index.js';
declare const NoSourcesFoundError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => Readonly<A> & {
    readonly _tag: "NoSourcesFoundError";
};
export declare class NoSourcesFoundError extends NoSourcesFoundError_base<{
    readonly CWD: string;
    readonly patterns: string[];
}> {
}
/**
 * Using --source options and/or config files on disk from
 * npm/pnpm/yarn/lerna, return an array of absolute paths to every package.json
 * file the user is working with.
 *
 * @returns Array of absolute file paths to package.json files
 */
export declare function getFilePaths(io: Io, config: Ctx['config']): Effect.Effect<string[], GlobError | NoSourcesFoundError>;
export {};
