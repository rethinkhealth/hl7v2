import { Specifier } from '../specifier/index.js';
export class Instance {
    /** The name of this dependency */
    name;
    /** The .name property of the package.json file of this instance */
    pkgName;
    /** The specifier as it is on disk before being fixed */
    rawSpecifier;
    /** The package this dependency is installed in this specific time */
    packageJsonFile;
    /** Locates where in the file this dependency is installed */
    strategy;
    /** The semver group this instance belongs to  */
    semverGroup;
    /** The version group this instance belongs to  */
    versionGroup;
    constructor(name, rawSpecifier, packageJsonFile, strategy) {
        this.name = name;
        this.pkgName =
            packageJsonFile.jsonFile.contents.name || 'PACKAGE_JSON_HAS_NO_NAME';
        this.packageJsonFile = packageJsonFile;
        this.strategy = strategy;
        this.semverGroup = null;
        this.versionGroup = null;
        this.rawSpecifier = Specifier.create(this, rawSpecifier);
    }
    /** Mutate the package.json file in memory with the latest version specifier */
    write(rawSpecifier) {
        this.rawSpecifier = Specifier.create(this, rawSpecifier);
        return this.strategy.write(this.packageJsonFile, [
            this.name,
            this.rawSpecifier.raw,
        ]);
    }
}
