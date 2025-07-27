import { Effect } from 'effect';
import { BaseSpecifier } from './base.js';
import { Specifier } from './index.js';
/** Represents "workspace:*" and "workspace:~" */
export class WorkspaceProtocolSpecifier extends BaseSpecifier {
    _tag = 'WorkspaceProtocol';
    /** The public name referenced in config */
    name = 'workspace-protocol';
    /**
     * Return an equivalent value which actually is semver, so that it can be used
     * with tools which expect values which conform to the spec. This value is
     * used only when sorting versions.
     */
    getSemverEquivalent(ctx) {
        if (this.raw === 'workspace:*') {
            return Effect.succeed('*');
        }
        if (this.raw === 'workspace:~' || this.raw === 'workspace:^') {
            const range = this.raw.replace('workspace:', '');
            const local = ctx.packageJsonFilesByName[this.instance.name];
            const version = local?.jsonFile?.contents?.version;
            if (version) {
                return Effect.succeed(`${range}${version}`);
            }
        }
        return Effect.succeed('0.0.0');
    }
    // @TODO: this name is inaccurate, check how it is used and change logic or rename
    getSemver() {
        return Effect.succeed(this.raw);
    }
    setSemver(version) {
        return Effect.succeed(Specifier.create(this.instance, version));
    }
}
