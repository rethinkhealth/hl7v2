import { Data, Effect } from 'effect';
import { Report } from '../report.js';
/**
 * Semver groups are disabled by default and, when that's the case, every
 * instance is assigned to this group. This group will allow anything.
 */
export class DisabledSemverGroup extends Data.TaggedClass('Disabled') {
    groupType = 'semverGroup';
    constructor(isCatchAll, config) {
        super({
            config,
            instances: [],
            isCatchAll,
        });
    }
    canAdd(_) {
        return true;
    }
    getFixed(specifier) {
        return Effect.succeed(specifier);
    }
    inspectAll() {
        return Effect.all(this.instances.map(instance => this.inspect(instance)));
    }
    inspect(instance) {
        return Effect.succeed(new Report.Disabled(instance));
    }
}
