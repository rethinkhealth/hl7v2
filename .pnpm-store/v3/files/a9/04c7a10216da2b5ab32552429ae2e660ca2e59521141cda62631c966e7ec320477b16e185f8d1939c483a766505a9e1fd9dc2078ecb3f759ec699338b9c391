import { Effect, pipe } from 'effect';
import { BaseSpecifier } from './base.js';
import { Specifier } from './index.js';
import { NonSemverError } from './lib/non-semver-error.js';
/**
 * @example "^1.2.3"
 */
export class RangeSpecifier extends BaseSpecifier {
    _tag = 'Range';
    /** The public name referenced in config */
    name = 'range';
    /** Return the semver version including the range */
    getSemver() {
        return pipe(this.parse(), Effect.mapError(() => new NonSemverError({ specifier: this })), Effect.map(parsed => parsed.fetchSpec));
    }
    /** Get a new `Specifier` from the given semver version applied to this one */
    setSemver(version) {
        return Effect.succeed(Specifier.create(this.instance, version));
    }
}
