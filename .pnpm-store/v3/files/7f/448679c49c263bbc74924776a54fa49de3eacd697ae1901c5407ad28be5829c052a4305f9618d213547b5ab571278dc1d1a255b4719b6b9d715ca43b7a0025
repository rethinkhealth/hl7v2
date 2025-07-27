import { minimatch } from 'minimatch';
import { isNonEmptyArray } from 'tightrope/guard/is-non-empty-array.js';
export function canAddToGroup(packageJsonFilesByName, group, instance) {
    const { dependencies, dependencyTypes, packages, specifierTypes } = group.config;
    return (group.canAdd(instance) &&
        matchesDependencyTypes(dependencyTypes, instance) &&
        matchesPackages(packages, instance) &&
        matchesDependencies(packageJsonFilesByName, group, dependencies, instance) &&
        matchesSpecifierTypes(specifierTypes, instance));
}
function matchesDependencies(packageJsonFilesByName, group, dependencies, instance) {
    // matches if not defined
    if (!isNonEmptyArray(dependencies)) {
        return true;
    }
    return dependencies.some(pattern => (pattern === '$LOCAL' &&
        instance.name in packageJsonFilesByName &&
        ((group.groupType === 'versionGroup' &&
            instance.versionGroup === null) ||
            (group.groupType === 'semverGroup' &&
                instance.semverGroup === null))) ||
        minimatch(instance.name, pattern));
}
function matchesPackages(packages, instance) {
    return matchesKnownList(packages, instance.pkgName);
}
function matchesDependencyTypes(dependencyTypes, instance) {
    return matchesKnownList(dependencyTypes, instance.strategy.name);
}
function matchesSpecifierTypes(specifierTypes, instance) {
    return matchesKnownList(specifierTypes, instance.rawSpecifier.name);
}
function matchesKnownList(values, value) {
    // matches if not defined
    if (!isNonEmptyArray(values)) {
        return true;
    }
    if (values.join('') === '**') {
        return true;
    }
    const negative = [];
    const positive = [];
    values.forEach(name => {
        if (name.startsWith('!')) {
            negative.push(name.replace('!', ''));
        }
        else {
            positive.push(name);
        }
    });
    if (isNonEmptyArray(negative) && !someMinimatch(value, negative)) {
        return true;
    }
    return isNonEmptyArray(positive) && someMinimatch(value, positive);
}
function someMinimatch(value, patterns) {
    return patterns.some(pattern => minimatch(value, pattern));
}
