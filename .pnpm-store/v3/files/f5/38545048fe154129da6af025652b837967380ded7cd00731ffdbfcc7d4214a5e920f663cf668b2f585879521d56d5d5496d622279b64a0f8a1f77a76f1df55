import { Data, Effect } from 'effect';
import { getFilter } from '../config/get-filter.js';
import { Report } from '../report.js';
import { groupBy } from './lib/group-by.js';
export class FilteredOutVersionGroup extends Data.TaggedClass('FilteredOut') {
    groupType = 'versionGroup';
    constructor(ctx) {
        super({
            config: {
                dependencies: ['**'],
                dependencyTypes: ['**'],
                label: 'Filtered out',
                packages: ['**'],
            },
            filter: getFilter(ctx.config),
            instances: [],
        });
    }
    canAdd(instance) {
        return instance.name.search(new RegExp(this.filter)) === -1;
    }
    inspectAll() {
        return Effect.succeed(Object.entries(groupBy('name', this.instances)).map(([name, instances]) => ({
            name,
            reports: instances.map(instance => 
            // ✓ is ignored and dismissed as valid
            new Report.FilteredOut(instance)),
        })));
    }
}
