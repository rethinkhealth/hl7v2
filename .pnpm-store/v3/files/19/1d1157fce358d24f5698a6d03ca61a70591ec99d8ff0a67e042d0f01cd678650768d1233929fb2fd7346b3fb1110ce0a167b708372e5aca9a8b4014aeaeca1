import { Data, Effect, pipe } from 'effect';
import { IoTag } from './index.js';
class AskForChoiceError extends Data.TaggedClass('AskForChoiceError') {
}
export function askForChoice(opts) {
    return pipe(IoTag, Effect.flatMap(io => Effect.tryPromise({
        try: () => io.enquirer
            .prompt({
            type: 'select',
            name: 'choice',
            message: opts.message,
            choices: opts.choices,
        })
            .then(res => res.choice),
        catch: err => new AskForChoiceError({ error: String(err) }),
    })));
}
