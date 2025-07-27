import { Effect } from 'effect';
import type { SemverGroupConfig } from '../config/types.js';
import type { Instance } from '../get-instances/instance.js';
import { Report } from '../report.js';
import { Specifier } from '../specifier/index.js';
import type { NonSemverError } from '../specifier/lib/non-semver-error.js';
declare const WithRangeSemverGroup_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => Readonly<A> & {
    readonly _tag: "WithRange";
};
export declare class WithRangeSemverGroup extends WithRangeSemverGroup_base<{
    config: SemverGroupConfig.WithRange;
    instances: Instance[];
    isCatchAll: boolean;
}> {
    groupType: string;
    constructor(isCatchAll: boolean, config: SemverGroupConfig.WithRange);
    canAdd(_: Instance): boolean;
    getFixed(specifier: Specifier.Any): Effect.Effect<Specifier.Any, NonSemverError>;
    inspectAll(): Effect.Effect<(Report.SemverRangeMismatch | Report.UnsupportedMismatch | Report.Valid)[], never, never>;
    inspect(instance: Instance): Effect.Effect<Report.UnsupportedMismatch | Report.SemverRangeMismatch | Report.Valid>;
}
export {};
