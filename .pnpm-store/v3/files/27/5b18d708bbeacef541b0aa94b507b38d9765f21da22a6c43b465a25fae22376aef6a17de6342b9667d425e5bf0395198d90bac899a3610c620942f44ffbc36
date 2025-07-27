import { Effect } from 'effect';
import type { VersionGroupConfig } from '../config/types.js';
import type { Instance } from '../get-instances/instance.js';
import { Report } from '../report.js';
declare const StandardVersionGroup_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => Readonly<A> & {
    readonly _tag: "Standard";
};
export declare class StandardVersionGroup extends StandardVersionGroup_base<{
    config: VersionGroupConfig.Standard;
    instances: Instance[];
    isCatchAll: boolean;
}> {
    groupType: string;
    constructor(isCatchAll: boolean, config: VersionGroupConfig.Standard);
    canAdd(_: Instance): boolean;
    inspectAll(): Effect.Effect<Report.Version.Group[]>;
}
export {};
