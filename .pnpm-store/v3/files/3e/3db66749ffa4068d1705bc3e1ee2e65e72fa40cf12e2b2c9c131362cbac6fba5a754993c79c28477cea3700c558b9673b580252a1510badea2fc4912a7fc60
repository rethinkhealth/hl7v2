import { Data, Effect } from 'effect';
import { Report } from '../report.js';
import { groupBy } from './lib/group-by.js';
export class IgnoredVersionGroup extends Data.TaggedClass('Ignored') {
    groupType = 'versionGroup';
    constructor(config) {
        super({
            config,
            instances: [],
        });
    }
    canAdd(_) {
        return true;
    }
    inspectAll() {
        return Effect.succeed(Object.entries(groupBy('name', this.instances)).map(([name, instances]) => ({
            name,
            reports: instances.map(instance => 
            // ✓ is ignored and dismissed as valid
            new Report.Ignored(instance)),
        })));
    }
}
