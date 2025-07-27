import { Effect } from 'effect';
import type { Instance } from '../get-instances/instance.js';
declare const Releases_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => Readonly<A> & {
    readonly _tag: "Releases";
};
/** full release history from the npm registry for a given package */
declare class Releases extends Releases_base<{
    instance: Instance;
    versions: {
        all: string[];
        latest: string;
    };
    repoUrl: string | undefined;
}> {
}
declare const PromptCancelled_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => Readonly<A> & {
    readonly _tag: "PromptCancelled";
};
declare class PromptCancelled extends PromptCancelled_base<{
    name: string;
}> {
}
declare const HttpError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => Readonly<A> & {
    readonly _tag: "HttpError";
};
declare class HttpError extends HttpError_base<{
    error: string;
}> {
}
declare const NpmRegistryError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => Readonly<A> & {
    readonly _tag: "NpmRegistryError";
};
declare class NpmRegistryError extends NpmRegistryError_base<{
    error: string;
}> {
}
export declare const updateEffects: {
    onFetchAllStart(): Effect.Effect<void, never, never>;
    onFetchStart(instance: Instance, totalCount: number): Effect.Effect<void, never, never>;
    onFetchEnd(instance: Instance, versions?: Releases["versions"]): Effect.Effect<void, never, never>;
    /** After checking the registry, store this instance known to be up to date */
    onUpToDate(instance: Instance): Effect.Effect<void, never, never>;
    /** After checking the registry, store this instance known to have newer versions available */
    onOutdated(instance: Instance, latest: string): Effect.Effect<void, never, never>;
    /** As the last request completes, remove the progress information */
    onFetchAllEnd(): Effect.Effect<void, never, never>;
    /** Fetch available versions for a given package from the npm registry */
    fetchLatestVersions(instance: Instance): Effect.Effect<Releases, HttpError | NpmRegistryError>;
    /** Given responses from npm, ask the user which they want */
    promptForUpdates(outdated: Releases[]): Effect.Effect<void, PromptCancelled>;
};
export {};
