import { Effect } from 'effect';
import type { CliConfig } from '../config/types.js';
import type { ErrorHandlers } from '../error-handlers/default-error-handlers.js';
import type { Ctx } from '../get-context/index.js';
import type { Io } from '../io/index.js';
interface Input {
    io: Io;
    cli: Partial<CliConfig>;
    errorHandlers?: ErrorHandlers;
}
export declare function lintSemverRanges({ io, cli, errorHandlers, }: Input): Effect.Effect<unknown, never, never>;
/** Exported to be reused by `syncpack lint` */
export declare function pipeline(ctx: Ctx, io: Io, errorHandlers: ErrorHandlers): Effect.Effect<Ctx>;
export declare function logSemverGroupsDisabledWarning(): Effect.Effect<void, never, never>;
export declare function logIgnoredSize(amount: number): Effect.Effect<void, never, never>;
export {};
