import { Effect } from 'effect';
import type { CliConfig } from '../config/types.js';
import type { ErrorHandlers } from '../error-handlers/default-error-handlers.js';
import type { Io } from '../io/index.js';
import type { Report } from '../report.js';
interface Input {
    io: Io;
    cli: Partial<CliConfig>;
    errorHandlers?: ErrorHandlers;
}
export declare function fixMismatches({ io, cli, errorHandlers, }: Input): Effect.Effect<unknown, never, never>;
export declare function fixMismatch(report: Report.Version.Fixable.Any): Effect.Effect<import("../get-package-json-files/package-json-file.js").PackageJsonFile, never, never>;
export declare function logAlreadyValidSize(amount: number): Effect.Effect<void, never, never>;
export declare function logFixedSize(amount: number): Effect.Effect<void, never, never>;
export declare function logUnfixableSize(amount: number): Effect.Effect<void, never, never>;
export {};
