import { Data, Effect } from 'effect';
export class ReadFileError extends Data.TaggedClass('ReadFileError') {
}
export function readFileSync(io, filePath) {
    return Effect.try({
        try: () => io.fs.readFileSync(filePath, { encoding: 'utf8' }),
        catch: err => new ReadFileError({ filePath, error: String(err) }),
    });
}
