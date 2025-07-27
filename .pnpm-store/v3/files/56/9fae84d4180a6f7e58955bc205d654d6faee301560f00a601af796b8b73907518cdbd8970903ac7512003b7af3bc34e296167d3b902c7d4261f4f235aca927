import { Effect } from 'effect';
import type { PackageJsonFile } from '../get-package-json-files/package-json-file.js';
import type { Delete } from '../version-group/lib/delete.js';
export declare class NamedVersionStringStrategy {
    _tag: string;
    name: string;
    path: string;
    constructor(name: string, path: string);
    read(file: PackageJsonFile): Effect.Effect<[string, string][]>;
    write(file: PackageJsonFile, [name, version]: [string, string | Delete]): Effect.Effect<PackageJsonFile>;
}
