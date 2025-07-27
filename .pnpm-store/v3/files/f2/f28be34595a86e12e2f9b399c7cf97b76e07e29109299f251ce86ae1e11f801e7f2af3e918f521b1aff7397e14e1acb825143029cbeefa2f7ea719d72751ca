import { Data, Effect, pipe } from 'effect';
import { Report } from '../report.js';
import { Specifier } from '../specifier/index.js';
import { groupBy } from './lib/group-by.js';
export class PinnedVersionGroup extends Data.TaggedClass('Pinned') {
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
        return Effect.all(Object.entries(groupBy('name', this.instances)).map(([name, instances]) => pipe(instances, Effect.forEach(instance => pipe(Effect.succeed(Specifier.create(instance, this.config.pinVersion)), Effect.map(expected => instance.rawSpecifier.raw === expected.raw
            ? // ✓ pinned takes precedence over any semver group
                // ✓ current version matches expected
                new Report.Valid(expected)
            : // ✓ pinned takes precedence over any semver group
                // ✘ current version mismatches expected
                // ✓ is a mismatch we can auto-fix
                new Report.PinnedMismatch(expected)))), Effect.map(reports => ({ name, reports })))));
    }
}
