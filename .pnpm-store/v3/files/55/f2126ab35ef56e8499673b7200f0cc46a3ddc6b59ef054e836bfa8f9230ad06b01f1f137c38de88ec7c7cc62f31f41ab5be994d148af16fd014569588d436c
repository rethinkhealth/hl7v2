import { Data, Effect } from 'effect';
import { Report } from '../report.js';
import { Specifier } from '../specifier/index.js';
import { DELETE } from './lib/delete.js';
import { groupBy } from './lib/group-by.js';
export class BannedVersionGroup extends Data.TaggedClass('Banned') {
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
            // ✘ package should not be used
            // ✓ is a mismatch we can auto-fix
            new Report.Banned(Specifier.create(instance, DELETE))),
        })));
    }
}
