import { Data, Effect, pipe } from 'effect';
import { setSemverRange } from '../lib/set-semver-range.js';
import { Report } from '../report.js';
import { Specifier } from '../specifier/index.js';
export class WithRangeSemverGroup extends Data.TaggedClass('WithRange') {
    groupType = 'semverGroup';
    constructor(isCatchAll, config) {
        super({
            config,
            instances: [],
            isCatchAll,
        });
        this.getFixed = this.getFixed.bind(this);
    }
    canAdd(_) {
        return true;
    }
    getFixed(specifier) {
        return pipe(specifier.getSemver(), Effect.map(semver => setSemverRange(this.config.range, semver)), Effect.flatMap(nextSemver => specifier.setSemver(nextSemver)));
    }
    inspectAll() {
        return Effect.all(this.instances.map(instance => this.inspect(instance)));
    }
    inspect(instance) {
        const current = Specifier.create(instance, instance.rawSpecifier.raw);
        return pipe(this.getFixed(current), Effect.match({
            // if range is fixable
            onSuccess: valid => 
            // if it is pinned and matches its pin
            instance.versionGroup._tag === 'Pinned' &&
                instance.rawSpecifier.raw === instance.versionGroup.config.pinVersion
                ? // the pinned version takes precendence and is a match
                    new Report.Valid(current)
                : // if it is already like this on disk
                    instance.rawSpecifier.raw === valid.raw
                        ? // it is a match
                            new Report.Valid(current)
                        : // it is a mismatch and should be this one
                            new Report.SemverRangeMismatch(valid),
            // if range is NOT fixable, it is a mismatch we can't auto-fix
            // as it seems to not be semver
            onFailure: () => new Report.UnsupportedMismatch(instance),
        }));
    }
}
