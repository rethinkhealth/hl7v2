import { Effect } from 'effect';
import type { VersionGroupConfig } from '../config/types.js';
import type { Ctx } from '../get-context/index.js';
import type { Instance } from '../get-instances/instance.js';
import { Report } from '../report.js';
declare const SameRangeVersionGroup_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => Readonly<A> & {
    readonly _tag: "SameRange";
};
export declare class SameRangeVersionGroup extends SameRangeVersionGroup_base<{
    ctx: Ctx;
    config: VersionGroupConfig.SameRange;
    instances: Instance[];
}> {
    groupType: string;
    constructor(ctx: Ctx, config: VersionGroupConfig.SameRange);
    canAdd(_: Instance): boolean;
    inspectAll(): Effect.Effect<Report.Version.Group[]>;
}
export {};
