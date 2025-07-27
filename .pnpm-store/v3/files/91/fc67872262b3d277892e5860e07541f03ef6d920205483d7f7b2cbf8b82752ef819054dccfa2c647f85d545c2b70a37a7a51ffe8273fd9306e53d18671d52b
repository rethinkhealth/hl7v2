import { Effect } from 'effect';
import type { HostedGitResult } from 'npm-package-arg';
import { BaseSpecifier } from './base.js';
import { Specifier } from './index.js';
import { NonSemverError } from './lib/non-semver-error.js';
/** @example "git+https://github.com/user/foo" */
export declare class HostedGitSpecifier extends BaseSpecifier<HostedGitResult> {
    _tag: string;
    /** The public name referenced in config */
    name: "hosted-git";
    /** Return the git tag if it is valid semver */
    getSemver(): Effect.Effect<string, NonSemverError>;
    /** Get a new `Specifier` from the given semver version applied to this one */
    setSemver(version: string): Effect.Effect<Specifier.Any, NonSemverError>;
}
