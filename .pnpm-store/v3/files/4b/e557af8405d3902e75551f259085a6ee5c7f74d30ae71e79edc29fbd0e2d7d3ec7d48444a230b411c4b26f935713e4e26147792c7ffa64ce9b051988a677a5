import { Effect } from 'effect';
import { BaseSpecifier } from './base.js';
import { Specifier } from './index.js';
import { NonSemverError } from './lib/non-semver-error.js';
import type { SpecificRegistryResult } from './lib/specific-registry-result.js';
type T = SpecificRegistryResult<'version'>;
/**
 * An exact semver version
 * @example "1.4.4"
 */
export declare class ExactSpecifier extends BaseSpecifier<T> {
    _tag: string;
    /** The public name referenced in config */
    name: "exact";
    /** Return the semver version */
    getSemver(): Effect.Effect<string, NonSemverError>;
    /** Get a new `Specifier` from the given semver version applied to this one */
    setSemver(version: string): Effect.Effect<Specifier.Any>;
}
export {};
