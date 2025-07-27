import { Effect } from 'effect';
import type { Io } from './index.js';
declare const AskForInputError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => Readonly<A> & {
    readonly _tag: "AskForInputError";
};
declare class AskForInputError extends AskForInputError_base<{
    readonly error: string;
}> {
}
export declare function askForInput(opts: {
    message: string;
}): Effect.Effect<string, AskForInputError, Io>;
export {};
