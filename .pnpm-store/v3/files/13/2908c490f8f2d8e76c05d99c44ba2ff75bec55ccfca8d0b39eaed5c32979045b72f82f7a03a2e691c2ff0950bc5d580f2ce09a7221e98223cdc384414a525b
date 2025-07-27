import { Effect } from 'effect';
import type { Io } from './index.js';
declare const AskForChoiceError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => Readonly<A> & {
    readonly _tag: "AskForChoiceError";
};
declare class AskForChoiceError extends AskForChoiceError_base<{
    readonly error: string;
}> {
}
export declare function askForChoice(opts: {
    message: string;
    choices: string[];
}): Effect.Effect<string, AskForChoiceError, Io>;
export {};
