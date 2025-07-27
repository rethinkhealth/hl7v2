import { Effect } from 'effect';
import type { VersionGroupConfig } from '../config/types.js';
import type { Instance } from '../get-instances/instance.js';
import { Report } from '../report.js';
declare const PinnedVersionGroup_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => Readonly<A> & {
    readonly _tag: "Pinned";
};
export declare class PinnedVersionGroup extends PinnedVersionGroup_base<{
    config: VersionGroupConfig.Pinned;
    instances: Instance[];
}> {
    groupType: string;
    constructor(config: VersionGroupConfig.Pinned);
    canAdd(_: Instance): boolean;
    inspectAll(): Effect.Effect<Report.Version.Group[]>;
}
export {};
