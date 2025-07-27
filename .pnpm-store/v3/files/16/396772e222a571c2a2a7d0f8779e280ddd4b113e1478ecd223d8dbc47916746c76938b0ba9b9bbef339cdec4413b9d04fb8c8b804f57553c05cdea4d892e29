import npa from 'npm-package-arg';
import type { PackageJsonFile } from '../../get-package-json-files/package-json-file.js';
/** Extends npm/npm-package-arg to support "workspace:*" */
export interface WorkspaceProtocolResult {
    type: 'workspaceProtocol';
    raw: string;
    name: string | null;
    escapedName: string | null;
    scope: string | null;
    rawSpec: string;
    saveSpec: string;
}
export type NpmPackageArgResult = ReturnType<typeof npa.resolve> | WorkspaceProtocolResult;
export declare function parseSpecifier(name: string, specifier: string, packageJsonFile: PackageJsonFile): NpmPackageArgResult;
