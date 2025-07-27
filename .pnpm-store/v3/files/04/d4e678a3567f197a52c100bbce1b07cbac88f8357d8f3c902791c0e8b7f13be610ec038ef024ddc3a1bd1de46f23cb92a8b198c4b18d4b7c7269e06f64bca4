import { Effect } from 'effect';
import type { AliasResult } from 'npm-package-arg';
import { BaseSpecifier } from './base.js';
import { Specifier } from './index.js';
import { NonSemverError } from './lib/non-semver-error.js';
type T = AliasResult;
/** @example "npm:imageoptim-cli@3.1.7" */
export declare class AliasSpecifier extends BaseSpecifier<T> {
    _tag: string;
    /** The public name referenced in config */
    name: "alias";
    /** Return the version portion if it is valid semver */
    getSemver(): Effect.Effect<string, NonSemverError>;
    /** Get a new `Specifier` from the given semver version applied to this one */
    setSemver(version: string): Effect.Effect<Specifier.Any, NonSemverError>;
}
export {};
