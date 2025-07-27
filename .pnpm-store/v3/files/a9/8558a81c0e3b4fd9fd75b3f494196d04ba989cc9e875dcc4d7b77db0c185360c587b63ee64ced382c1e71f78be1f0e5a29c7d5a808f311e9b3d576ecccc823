import type { BannedVersionGroup } from './banned.js';
import type { FilteredOutVersionGroup } from './filtered-out.js';
import type { IgnoredVersionGroup } from './ignored.js';
import type { PinnedVersionGroup } from './pinned.js';
import type { SameRangeVersionGroup } from './same-range.js';
import type { SnappedToVersionGroup } from './snapped-to.js';
import type { StandardVersionGroup } from './standard.js';
export declare namespace VersionGroup {
    export type Banned = BannedVersionGroup;
    export type FilteredOut = FilteredOutVersionGroup;
    export type Ignored = IgnoredVersionGroup;
    export type Pinned = PinnedVersionGroup;
    export type SameRange = SameRangeVersionGroup;
    export type SnappedTo = SnappedToVersionGroup;
    export type Standard = StandardVersionGroup;
    export type Any = Banned | FilteredOut | Ignored | Pinned | SameRange | SnappedTo | Standard;
    const ConfigError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => Readonly<A> & {
        readonly _tag: "VersionGroupConfigError";
    };
    export class ConfigError extends ConfigError_base<{
        readonly config: unknown;
        readonly error: string;
    }> {
    }
    export {};
}
