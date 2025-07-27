import type { Ctx } from '../get-context/index.js';
import type { PackageJsonFile } from '../get-package-json-files/package-json-file.js';
type Ending = '\n' | '\r' | '\r\n' | string;
export declare const newlines: {
    detect(source: string): Ending;
    fix(source: string, lineEnding: Ending): string;
};
export declare function toFormattedJson(ctx: Ctx, file: PackageJsonFile): string;
export {};
