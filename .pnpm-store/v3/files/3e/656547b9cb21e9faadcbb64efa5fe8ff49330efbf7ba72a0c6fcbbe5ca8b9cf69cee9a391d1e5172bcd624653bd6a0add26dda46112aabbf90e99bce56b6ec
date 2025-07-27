import { Effect } from 'effect';
import type { Io } from './index.js';
declare const ReadYamlFileError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => Readonly<A> & {
    readonly _tag: "ReadYamlFileError";
};
declare class ReadYamlFileError extends ReadYamlFileError_base<{
    readonly filePath: string;
    readonly error: string;
}> {
}
export declare function readYamlFileSync<T = unknown>(io: Io, filePath: string): Effect.Effect<T, ReadYamlFileError>;
export {};
