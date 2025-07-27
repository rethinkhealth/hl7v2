import { Effect, flow, pipe } from 'effect';
import { getEnabledTypes } from '../config/get-enabled-types.js';
import { canAddToGroup } from '../guards/can-add-to-group.js';
import { sortByName } from '../lib/sort-by-name.js';
import { createSemverGroups } from '../semver-group/create-semver-groups.js';
import { createVersionGroups } from '../version-group/create-version-groups.js';
export function getInstances(ctx, io, errorHandlers) {
    const exitOnError = Effect.flatMap(() => Effect.failSync(() => io.process.exit(1)));
    return pipe(Effect.Do, Effect.bind('enabledTypes', () => getEnabledTypes(ctx.config)), Effect.bind('semverGroups', () => createSemverGroups(ctx)), Effect.bind('versionGroups', () => createVersionGroups(ctx)), Effect.bind('instances', acc => pipe(ctx.packageJsonFiles, Effect.forEach(file => file.getInstances(acc.enabledTypes)), Effect.map(instancesByFile => instancesByFile.flat()))), Effect.tap(({ instances, semverGroups, versionGroups }) => Effect.sync(() => {
        for (const instance of instances) {
            // assign each instance to its semver group, first match wins
            for (const group of semverGroups) {
                if (canAddToGroup(ctx.packageJsonFilesByName, group, instance)) {
                    instance.semverGroup = group;
                    group.instances.push(instance);
                    break;
                }
            }
            // assign each instance to its version group, first match wins
            for (const group of versionGroups) {
                if (canAddToGroup(ctx.packageJsonFilesByName, group, instance)) {
                    instance.versionGroup = group;
                    group.instances.push(instance);
                    break;
                }
            }
        }
    })), Effect.map(({ instances, semverGroups, versionGroups }) => ({
        all: instances,
        semverGroups: getSortedAndFiltered(semverGroups),
        versionGroups: getSortedAndFiltered(versionGroups),
    })), Effect.catchTags({
        DeprecatedTypesError: flow(errorHandlers.DeprecatedTypesError, exitOnError),
        InvalidCustomTypeError: flow(errorHandlers.InvalidCustomTypeError, exitOnError),
        RenamedWorkspaceTypeError: flow(errorHandlers.RenamedWorkspaceTypeError, exitOnError),
        SemverGroupConfigError: flow(errorHandlers.SemverGroupConfigError, exitOnError),
        VersionGroupConfigError: flow(errorHandlers.VersionGroupConfigError, exitOnError),
    }));
    function getSortedAndFiltered(groups) {
        return groups.filter(group => group.instances.sort(sortByName).length > 0);
    }
}
