import { Effect, pipe } from 'effect';
import { BaseSpecifier } from './base.js';
import { Specifier } from './index.js';
import { NonSemverError } from './lib/non-semver-error.js';
/**
 * An exact semver version
 * @example "1.4.4"
 */
export class ExactSpecifier extends BaseSpecifier {
    _tag = 'Exact';
    /** The public name referenced in config */
    name = 'exact';
    /** Return the semver version */
    getSemver() {
        return pipe(this.parse(), Effect.mapError(() => new NonSemverError({ specifier: this })), Effect.map(parsed => parsed.fetchSpec));
    }
    /** Get a new `Specifier` from the given semver version applied to this one */
    setSemver(version) {
        return Effect.succeed(Specifier.create(this.instance, version));
    }
}
