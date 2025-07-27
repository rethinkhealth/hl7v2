import { Effect } from 'effect';
import type { GroupConfig } from '../config/types.js';
import type { Ctx } from '../get-context/index.js';
import type { Instance } from '../get-instances/instance.js';
import { Report } from '../report.js';
declare const FilteredOutVersionGroup_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => Readonly<A> & {
    readonly _tag: "FilteredOut";
};
export declare class FilteredOutVersionGroup extends FilteredOutVersionGroup_base<{
    config: GroupConfig;
    filter: string;
    instances: Instance[];
}> {
    groupType: string;
    constructor(ctx: Ctx);
    canAdd(instance: Instance): boolean;
    inspectAll(): Effect.Effect<Report.Version.Group[]>;
}
export {};
