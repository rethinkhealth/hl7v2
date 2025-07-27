import { Data, Effect } from 'effect';
export class GlobError extends Data.TaggedClass('GlobError') {
}
export function globSync(io, patterns) {
    return Effect.try({
        try: () => io.globby.sync(patterns, {
            absolute: true,
            cwd: io.process.cwd(),
            fs: io.fs,
            ignore: ['**/node_modules/**'],
        }),
        catch: err => new GlobError({ error: String(err) }),
    });
}
