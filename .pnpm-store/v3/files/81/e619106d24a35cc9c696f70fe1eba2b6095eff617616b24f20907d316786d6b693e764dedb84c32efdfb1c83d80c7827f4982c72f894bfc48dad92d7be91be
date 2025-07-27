/** Single source of truth, intended to aid testing or to override */
export declare const CWD: string;
/** Single source of truth for icons used in output */
export declare const ICON: {
    readonly banned: "⦸";
    readonly cross: "✘";
    readonly debug: "?";
    readonly info: "i";
    readonly panic: "!";
    readonly rightArrow: "→";
    readonly skip: "-";
    readonly tick: "✓";
};
export declare const RANGE: {
    readonly ANY: "*";
    readonly EXACT: "";
    readonly GT: ">";
    readonly GTE: ">=";
    readonly LOOSE: ".x";
    readonly LT: "<";
    readonly LTE: "<=";
    readonly MINOR: "^";
    readonly PATCH: "~";
    readonly WORKSPACE: "workspace:";
};
export declare const INTERNAL_TYPES: readonly ["dev", "local", "overrides", "peer", "pnpmOverrides", "prod", "resolutions"];
export declare const CUSTOM_TYPES: {
    readonly dev: {
        readonly strategy: "versionsByName";
        readonly path: "devDependencies";
    };
    readonly local: {
        readonly strategy: "name~version";
        readonly namePath: "name";
        readonly path: "version";
    };
    readonly overrides: {
        readonly strategy: "versionsByName";
        readonly path: "overrides";
    };
    readonly peer: {
        readonly strategy: "versionsByName";
        readonly path: "peerDependencies";
    };
    readonly pnpmOverrides: {
        readonly strategy: "versionsByName";
        readonly path: "pnpm.overrides";
    };
    readonly prod: {
        readonly strategy: "versionsByName";
        readonly path: "dependencies";
    };
    readonly resolutions: {
        readonly strategy: "versionsByName";
        readonly path: "resolutions";
    };
};
export declare const DEFAULT_CONFIG: {
    customTypes: {
        readonly dev: {
            readonly strategy: "versionsByName";
            readonly path: "devDependencies";
        };
        readonly local: {
            readonly strategy: "name~version";
            readonly namePath: "name";
            readonly path: "version";
        };
        readonly overrides: {
            readonly strategy: "versionsByName";
            readonly path: "overrides";
        };
        readonly peer: {
            readonly strategy: "versionsByName";
            readonly path: "peerDependencies";
        };
        readonly pnpmOverrides: {
            readonly strategy: "versionsByName";
            readonly path: "pnpm.overrides";
        };
        readonly prod: {
            readonly strategy: "versionsByName";
            readonly path: "dependencies";
        };
        readonly resolutions: {
            readonly strategy: "versionsByName";
            readonly path: "resolutions";
        };
    };
    dependencyTypes: "**"[];
    filter: string;
    formatBugs: true;
    formatRepository: true;
    indent: string;
    lintFormatting: true;
    lintSemverRanges: true;
    lintVersions: true;
    semverGroups: never[];
    sortAz: string[];
    sortExports: string[];
    sortFirst: string[];
    sortPackages: true;
    source: string[];
    specifierTypes: "**"[];
    versionGroups: never[];
};
