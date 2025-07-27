import { Effect } from 'effect';
import type { SemverGroupConfig } from '../config/types.js';
import type { Instance } from '../get-instances/instance.js';
import { Report } from '../report.js';
import type { Specifier } from '../specifier/index.js';
import type { NonSemverError } from '../specifier/lib/non-semver-error.js';
declare const IgnoredSemverGroup_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => Readonly<A> & {
    readonly _tag: "Ignored";
};
/** Every instance in this group is ignored and nothing will be changed */
export declare class IgnoredSemverGroup extends IgnoredSemverGroup_base<{
    config: SemverGroupConfig.Ignored;
    instances: Instance[];
}> {
    groupType: string;
    constructor(config: SemverGroupConfig.Ignored);
    canAdd(_: Instance): boolean;
    getFixed(specifier: Specifier.Any): Effect.Effect<Specifier.Any, NonSemverError>;
    inspectAll(): Effect.Effect<Report.Ignored[], never, never>;
    inspect(instance: Instance): Effect.Effect<Report.Ignored>;
}
export {};
