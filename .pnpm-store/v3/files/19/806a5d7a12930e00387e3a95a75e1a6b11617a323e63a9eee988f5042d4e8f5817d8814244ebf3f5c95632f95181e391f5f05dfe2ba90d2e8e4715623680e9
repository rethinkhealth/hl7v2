import { Data, Effect } from 'effect';
import { getFilter } from '../config/get-filter.js';
import { Report } from '../report.js';
/**
 * Instances which do not match a given `--filter` option are assigned to this
 * group and nothing will be changed.
 */
export class FilteredOutSemverGroup extends Data.TaggedClass('FilteredOut') {
    groupType = 'semverGroup';
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
    getFixed(specifier) {
        return Effect.succeed(specifier);
    }
    inspectAll() {
        return Effect.all(this.instances.map(instance => this.inspect(instance)));
    }
    inspect(instance) {
        return Effect.succeed(new Report.FilteredOut(instance));
    }
}
