import { Effect } from 'effect';
import type { Io } from './index.js';
declare const WriteFileError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => Readonly<A> & {
    readonly _tag: "WriteFileError";
};
export declare class WriteFileError extends WriteFileError_base<{
    readonly filePath: string;
    readonly error: string;
}> {
}
export declare function writeFileSync(filePath: string, contents: string): Effect.Effect<void, WriteFileError, Io>;
export {};
