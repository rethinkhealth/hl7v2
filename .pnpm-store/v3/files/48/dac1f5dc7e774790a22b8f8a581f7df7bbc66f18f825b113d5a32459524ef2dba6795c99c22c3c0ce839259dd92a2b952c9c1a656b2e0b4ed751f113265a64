import { Effect } from 'effect';
import type { VersionGroupConfig } from '../config/types.js';
import type { Instance } from '../get-instances/instance.js';
import { Report } from '../report.js';
declare const IgnoredVersionGroup_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => Readonly<A> & {
    readonly _tag: "Ignored";
};
export declare class IgnoredVersionGroup extends IgnoredVersionGroup_base<{
    config: VersionGroupConfig.Ignored;
    instances: Instance[];
}> {
    groupType: string;
    constructor(config: VersionGroupConfig.Ignored);
    canAdd(_: Instance): boolean;
    inspectAll(): Effect.Effect<Report.Version.Group[]>;
}
export {};
