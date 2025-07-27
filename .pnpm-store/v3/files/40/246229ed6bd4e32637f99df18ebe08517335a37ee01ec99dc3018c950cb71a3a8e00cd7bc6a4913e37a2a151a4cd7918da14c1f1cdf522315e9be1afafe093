import type { Effect } from 'effect';
import type { Strategy } from '../config/get-custom-types.js';
import type { PackageJsonFile } from '../get-package-json-files/package-json-file.js';
import type { SemverGroup } from '../semver-group/index.js';
import { Specifier } from '../specifier/index.js';
import type { VersionGroup } from '../version-group/index.js';
import type { Delete } from '../version-group/lib/delete.js';
export declare class Instance {
    /** The name of this dependency */
    name: string;
    /** The .name property of the package.json file of this instance */
    pkgName: string;
    /** The specifier as it is on disk before being fixed */
    rawSpecifier: Specifier.Any;
    /** The package this dependency is installed in this specific time */
    packageJsonFile: PackageJsonFile;
    /** Locates where in the file this dependency is installed */
    strategy: Strategy.Any;
    /** The semver group this instance belongs to  */
    semverGroup: SemverGroup.Any;
    /** The version group this instance belongs to  */
    versionGroup: VersionGroup.Any;
    constructor(name: string, rawSpecifier: string, packageJsonFile: PackageJsonFile, strategy: Strategy.Any);
    /** Mutate the package.json file in memory with the latest version specifier */
    write(rawSpecifier: string | Delete): Effect.Effect<PackageJsonFile>;
}
