import { Effect } from 'effect';
import type { GroupConfig } from '../config/types.js';
import type { Ctx } from '../get-context/index.js';
import type { Instance } from '../get-instances/instance.js';
import { Report } from '../report.js';
import type { Specifier } from '../specifier/index.js';
import type { NonSemverError } from '../specifier/lib/non-semver-error.js';
declare const FilteredOutSemverGroup_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => Readonly<A> & {
    readonly _tag: "FilteredOut";
};
/**
 * Instances which do not match a given `--filter` option are assigned to this
 * group and nothing will be changed.
 */
export declare class FilteredOutSemverGroup extends FilteredOutSemverGroup_base<{
    config: GroupConfig;
    filter: string;
    instances: Instance[];
}> {
    groupType: string;
    constructor(ctx: Ctx);
    canAdd(instance: Instance): boolean;
    getFixed(specifier: Specifier.Any): Effect.Effect<Specifier.Any, NonSemverError>;
    inspectAll(): Effect.Effect<Report.FilteredOut[], never, never>;
    inspect(instance: Instance): Effect.Effect<Report.FilteredOut>;
}
export {};
