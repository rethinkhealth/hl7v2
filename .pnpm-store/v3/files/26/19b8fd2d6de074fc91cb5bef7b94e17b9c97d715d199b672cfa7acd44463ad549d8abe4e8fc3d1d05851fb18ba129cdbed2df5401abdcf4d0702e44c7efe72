import { isString } from 'tightrope/guard/is-string.js';
import { RANGE } from '../constants.js';
import { isSemver } from '../guards/is-semver.js';
import { isValidSemverRange } from '../guards/is-valid-semver-range.js';
/** @deprecated migrate to make better use of npm-package-arg */
export function setSemverRange(semverRange, version) {
    if (!(isSemver(version) && isValidSemverRange(semverRange))) {
        return version;
    }
    if (semverRange === '*') {
        return semverRange;
    }
    const nextVersion = isLooseSemver(version)
        ? version.replace(/\.x/g, '.0')
        : version;
    const from1stNumber = nextVersion.search(/[0-9]/);
    const from1stDot = nextVersion.indexOf('.');
    return semverRange === RANGE.LOOSE
        ? `${nextVersion.slice(from1stNumber, from1stDot)}.x.x`
        : `${semverRange}${nextVersion.slice(from1stNumber)}`;
}
function isLooseSemver(version) {
    return (isString(version) && isSemver(version) && version.search(/\.x(\.|$)/) !== -1);
}
