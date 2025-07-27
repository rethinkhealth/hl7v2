import { Data, Effect } from 'effect';
import { Report } from '../report.js';
/** Every instance in this group is ignored and nothing will be changed */
export class IgnoredSemverGroup extends Data.TaggedClass('Ignored') {
    groupType = 'semverGroup';
    constructor(config) {
        super({
            config,
            instances: [],
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
        return Effect.succeed(new Report.Ignored(instance));
    }
}
