import { Effect } from 'effect';
import type { Strategy } from '../config/get-custom-types.js';
import type { Ctx } from '../get-context/index.js';
import { Instance } from '../get-instances/instance.js';
import type { RcFile } from '../index.js';
import type { JsonFile } from '../io/read-json-file-sync.js';
export type PackageJson = {
    bugs?: {
        url: string;
    } | string;
    config?: {
        syncpack?: RcFile;
    };
    dependencies?: Record<string, string>;
    description?: string;
    devDependencies?: Record<string, string>;
    keywords?: string[];
    name?: string;
    overrides?: Record<string, string>;
    peerDependencies?: Record<string, string>;
    pnpm?: {
        overrides?: Record<string, string>;
    };
    repository?: {
        directory?: string;
        type: string;
        url: string;
    } | string;
    resolutions?: Record<string, string>;
    scripts?: Record<string, string>;
    version?: string;
    workspaces?: string[] | {
        packages?: string[];
    };
} & Record<string, Record<string, string | string[] | Record<string, string | string[]>> | string | string[] | undefined>;
export declare class PackageJsonFile {
    /** resolved configuration */
    readonly config: Ctx['config'];
    /** ensure only one set of instances is ever created and shared */
    private _instances;
    /** the wrapped package.json file */
    jsonFile: JsonFile<PackageJson>;
    /** the .name property from the package.json file */
    name: string | undefined;
    /** the next package.json file contents after modification, with formatting preserved */
    nextJson: string;
    constructor(jsonFile: JsonFile<PackageJson>, config: Ctx['config']);
    getInstances(enabledTypes: Strategy.Any[]): Effect.Effect<Instance[]>;
    /**
     * Apply an edit to the raw JSON string which will be written to disk. This string preserves the
     * original formatting of the file.
     */
    applyEdit(fullPath: string[], value: string | undefined): void;
}
