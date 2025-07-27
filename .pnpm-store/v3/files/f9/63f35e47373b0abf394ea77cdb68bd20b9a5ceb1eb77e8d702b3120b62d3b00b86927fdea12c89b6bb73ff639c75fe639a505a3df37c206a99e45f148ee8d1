import type { DisabledSemverGroup } from './disabled.js';
import type { FilteredOutSemverGroup } from './filtered-out.js';
import type { IgnoredSemverGroup } from './ignored.js';
import type { WithRangeSemverGroup } from './with-range.js';
export declare namespace SemverGroup {
    export type Disabled = DisabledSemverGroup;
    export type FilteredOut = FilteredOutSemverGroup;
    export type Ignored = IgnoredSemverGroup;
    export type WithRange = WithRangeSemverGroup;
    export type Any = Disabled | FilteredOut | Ignored | WithRange;
    const ConfigError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => Readonly<A> & {
        readonly _tag: "SemverGroupConfigError";
    };
    export class ConfigError extends ConfigError_base<{
        readonly config: unknown;
        readonly error: string;
    }> {
    }
    export {};
}
