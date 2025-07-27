import { Effect } from 'effect';
import type { O } from 'ts-toolbelt';
import type { CliConfig, RcConfig } from '../config/types.js';
import type { ErrorHandlers } from '../error-handlers/default-error-handlers.js';
import type { PackageJsonFile } from '../get-package-json-files/package-json-file.js';
import type { Io } from '../io/index.js';
export interface Ctx {
    readonly config: {
        readonly cli: Partial<CliConfig>;
        readonly rcFile: O.Partial<RcConfig, 'deep'>;
    };
    /** @TODO: Replace with Effect Exit/Cause */
    isInvalid: boolean;
    packageJsonFiles: PackageJsonFile[];
    packageJsonFilesByName: Record<string, PackageJsonFile>;
}
interface Input {
    io: Io;
    cli: Partial<CliConfig>;
    errorHandlers: ErrorHandlers;
}
export declare function getContext({ io, cli, errorHandlers, }: Input): Effect.Effect<Ctx>;
export {};
