import { Effect, pipe } from 'effect';
import { IoTag } from './index.js';
export function exitIfInvalid(ctx) {
    return pipe(IoTag, Effect.tap(io => Effect.sync(() => {
        if (ctx.isInvalid) {
            io.process.exit(1);
        }
    })), Effect.map(() => ctx));
}
