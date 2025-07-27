import { Effect, pipe } from 'effect';
import { BaseSpecifier } from './base.js';
import { Specifier } from './index.js';
import { NonSemverError } from './lib/non-semver-error.js';
/** @example "npm:imageoptim-cli@3.1.7" */
export class AliasSpecifier extends BaseSpecifier {
    _tag = 'Alias';
    /** The public name referenced in config */
    name = 'alias';
    /** Return the version portion if it is valid semver */
    getSemver() {
        return pipe(this.parse(), Effect.mapError(() => new NonSemverError({ specifier: this })), Effect.map(parsed => parsed.subSpec), Effect.flatMap(subSpec => ['range', 'version'].includes(subSpec.type) &&
            subSpec.fetchSpec !== null
            ? Effect.succeed(subSpec.fetchSpec)
            : NonSemverError.asEffect(this)));
    }
    /** Get a new `Specifier` from the given semver version applied to this one */
    setSemver(version) {
        return pipe(this.parse(), Effect.mapError(() => new NonSemverError({ specifier: this })), Effect.map(parsed => parsed.subSpec), Effect.map(subSpec => subSpec.name || ''), Effect.map(name => `npm:${name}@${version}`), Effect.map(raw => Specifier.create(this.instance, raw)));
    }
}
