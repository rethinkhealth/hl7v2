import { Effect } from 'effect';
import { type ParseError } from 'jsonc-parser';
import type { Io } from './index.js';
import type { ReadFileError } from './read-file-sync.js';
declare const JsonParseError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => Readonly<A> & {
    readonly _tag: "JsonParseError";
};
export declare class JsonParseError extends JsonParseError_base<{
    readonly errors: ParseError[];
    readonly filePath: string;
    readonly json: string;
}> {
}
declare const JsonFile_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => Readonly<A> & {
    readonly _tag: "JsonFile";
};
export declare class JsonFile<T> extends JsonFile_base<{
    /** absolute path on disk to the directory of this file */
    readonly dirPath: string;
    /** absolute path on disk to this file */
    readonly filePath: string;
    /** relative path on disk to this file */
    readonly shortPath: string;
    /** parsed JSON contents of the file */
    contents: T;
    /** raw file contents of the file */
    readonly json: string;
}> {
}
export declare function readJsonFileSync<T>(io: Io, filePath: string): Effect.Effect<JsonFile<T>, ReadFileError | JsonParseError>;
export {};
