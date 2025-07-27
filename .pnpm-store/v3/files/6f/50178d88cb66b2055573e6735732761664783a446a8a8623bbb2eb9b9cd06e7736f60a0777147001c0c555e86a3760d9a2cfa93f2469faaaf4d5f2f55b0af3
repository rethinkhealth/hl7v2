import { Data, Effect, pipe } from 'effect';
import { IoTag } from './index.js';
class AskForInputError extends Data.TaggedClass('AskForInputError') {
}
export function askForInput(opts) {
    return pipe(IoTag, Effect.flatMap(io => Effect.tryPromise({
        try: () => io.enquirer.prompt({
            name: 'version',
            type: 'input',
            message: opts.message,
        }),
        catch: err => new AskForInputError({ error: String(err) }),
    })));
}
