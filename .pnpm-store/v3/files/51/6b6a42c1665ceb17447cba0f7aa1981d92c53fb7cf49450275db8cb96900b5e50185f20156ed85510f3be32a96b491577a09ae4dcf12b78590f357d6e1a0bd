import { Effect } from 'effect';
import type { Io } from './index.js';
declare const ReadFileError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => Readonly<A> & {
    readonly _tag: "ReadFileError";
};
export declare class ReadFileError extends ReadFileError_base<{
    readonly filePath: string;
    readonly error: string;
}> {
}
export declare function readFileSync(io: Io, filePath: string): Effect.Effect<string, ReadFileError>;
export {};
