import { Effect } from 'effect';
import type { Ctx } from '../get-context/index.js';
import { BaseSpecifier } from './base.js';
import { Specifier } from './index.js';
import type { WorkspaceProtocolResult } from './lib/parse-specifier.js';
/** Represents "workspace:*" and "workspace:~" */
export declare class WorkspaceProtocolSpecifier extends BaseSpecifier<WorkspaceProtocolResult> {
    _tag: string;
    /** The public name referenced in config */
    name: "workspace-protocol";
    /**
     * Return an equivalent value which actually is semver, so that it can be used
     * with tools which expect values which conform to the spec. This value is
     * used only when sorting versions.
     */
    getSemverEquivalent(ctx: Ctx): Effect.Effect<string>;
    getSemver(): Effect.Effect<string>;
    setSemver(version: string): Effect.Effect<Specifier.Any>;
}
