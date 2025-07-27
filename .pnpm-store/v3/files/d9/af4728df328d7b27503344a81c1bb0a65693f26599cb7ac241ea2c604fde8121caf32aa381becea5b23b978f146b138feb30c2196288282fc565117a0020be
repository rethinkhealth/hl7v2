import { Data, Effect, pipe } from 'effect';
import { IoTag } from './index.js';
export class WriteFileError extends Data.TaggedClass('WriteFileError') {
}
export function writeFileSync(filePath, contents) {
    return pipe(IoTag, Effect.flatMap(io => Effect.try({
        try: () => io.fs.writeFileSync(filePath, contents),
        catch: err => new WriteFileError({ filePath, error: String(err) }),
    })));
}
