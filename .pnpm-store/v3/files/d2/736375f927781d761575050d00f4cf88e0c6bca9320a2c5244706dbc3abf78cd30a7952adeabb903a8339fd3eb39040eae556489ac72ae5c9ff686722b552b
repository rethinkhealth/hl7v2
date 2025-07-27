import type { CUSTOM_TYPES } from '../constants.js';
import type { Specifier } from '../specifier/index.js';
/**
 * Aliases for semver range formats supported by syncpack
 *
 * Defaults to `""` to ensure that exact dependency versions are used instead of
 * loose ranges, but this can be overridden in your config file.
 *
 * | Supported Range |   Example |
 * | --------------- | --------: |
 * | `"<"`           |  `<1.4.2` |
 * | `"<="`          | `<=1.4.2` |
 * | `""`            |   `1.4.2` |
 * | `"~"`           |  `~1.4.2` |
 * | `"^"`           |  `^1.4.2` |
 * | `">="`          | `>=1.4.2` |
 * | `">"`           |  `>1.4.2` |
 * | `"*"`           |       `*` |
 *
 * @default ""
 */
export type SemverRange = '' | '*' | '>' | '>=' | '.x' | '<' | '<=' | '^' | '~' | 'workspace:';
type DefaultDependencyType = keyof typeof CUSTOM_TYPES;
export type DependencyType = DefaultDependencyType | `!${DefaultDependencyType}` | (string & {});
export type SpecifierType = Specifier.Any['name'] | `!${Specifier.Any['name']}` | (string & {});
export interface GroupConfig {
    dependencies?: string[];
    dependencyTypes?: DependencyType[];
    label?: string;
    packages?: string[];
    specifierTypes?: SpecifierType[];
}
export declare namespace SemverGroupConfig {
    interface Disabled extends GroupConfig {
        isDisabled: true;
    }
    interface Ignored extends GroupConfig {
        isIgnored: true;
    }
    interface WithRange extends GroupConfig {
        range: SemverRange;
    }
    type Any = Disabled | Ignored | WithRange;
}
export declare namespace VersionGroupConfig {
    interface Banned extends GroupConfig {
        isBanned: true;
    }
    interface Ignored extends GroupConfig {
        isIgnored: true;
    }
    interface Pinned extends GroupConfig {
        pinVersion: string;
    }
    interface SnappedTo extends GroupConfig {
        snapTo: string[];
    }
    interface SameRange extends GroupConfig {
        policy: 'sameRange';
    }
    interface Standard extends GroupConfig {
        preferVersion?: 'highestSemver' | 'lowestSemver';
    }
    type Any = Banned | Ignored | Pinned | SameRange | SnappedTo | Standard;
}
declare namespace CustomTypeConfig {
    interface NameAndVersionProps {
        namePath: string;
        path: string;
        strategy: 'name~version';
    }
    interface NamedVersionString {
        path: string;
        strategy: 'name@version';
    }
    interface UnnamedVersionString {
        path: string;
        strategy: 'version';
    }
    interface VersionsByName {
        path: string;
        strategy: 'versionsByName';
    }
    type Any = NameAndVersionProps | NamedVersionString | UnnamedVersionString | VersionsByName;
}
export interface CliConfig {
    readonly configPath?: string;
    readonly filter: string;
    readonly indent: string;
    readonly source: string[];
    readonly specs: string;
    readonly types: string;
}
export interface RcConfig {
    /** @see https://jamiemason.github.io/syncpack/integrations/json-schema */
    $schema?: string;
    /** @see https://jamiemason.github.io/syncpack/config/custom-types */
    customTypes: {
        [name: string]: CustomTypeConfig.Any;
    };
    /** @see https://jamiemason.github.io/syncpack/config/dependency-types */
    dependencyTypes: DependencyType[];
    /** @see https://jamiemason.github.io/syncpack/config/filter */
    filter: string;
    /** @see https://jamiemason.github.io/syncpack/config/format-bugs */
    formatBugs: boolean;
    /** @see https://jamiemason.github.io/syncpack/config/format-repository */
    formatRepository: boolean;
    /** @see https://jamiemason.github.io/syncpack/config/indent */
    indent: string;
    /** @see https://jamiemason.github.io/syncpack/config/lint-formatting */
    lintFormatting: boolean;
    /** @see https://jamiemason.github.io/syncpack/config/lint-semver-ranges */
    lintSemverRanges: boolean;
    /** @see https://jamiemason.github.io/syncpack/config/lint-versions */
    lintVersions: boolean;
    /** @see https://jamiemason.github.io/syncpack/config/semver-groups */
    semverGroups: SemverGroupConfig.Any[];
    /** @see https://jamiemason.github.io/syncpack/config/sort-az */
    sortAz: string[];
    /** @see https://jamiemason.github.io/syncpack/config/sort-exports */
    sortExports: string[];
    /** @see https://jamiemason.github.io/syncpack/config/sort-first */
    sortFirst: string[];
    /** @see https://jamiemason.github.io/syncpack/config/sort-packages */
    sortPackages: boolean;
    /** @see https://jamiemason.github.io/syncpack/config/source */
    source: string[];
    /** @see https://jamiemason.github.io/syncpack/config/specifier-types */
    specifierTypes: SpecifierType[];
    /** @see https://jamiemason.github.io/syncpack/config/version-groups */
    versionGroups: VersionGroupConfig.Any[];
}
export {};
