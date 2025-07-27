import { dirname, relative } from 'node:path';
import { Data, Effect, pipe } from 'effect';
import { parse } from 'jsonc-parser';
import { readFileSync } from './read-file-sync.js';
export class JsonParseError extends Data.TaggedClass('JsonParseError') {
}
export class JsonFile extends Data.TaggedClass('JsonFile') {
}
export function readJsonFileSync(io, filePath) {
    return pipe(Effect.Do, Effect.bind('json', () => readFileSync(io, filePath)), Effect.bind('contents', ({ json }) => {
        const errors = [];
        const data = parse(json, errors);
        return errors.length === 0
            ? Effect.succeed(data)
            : Effect.fail(new JsonParseError({ errors, filePath, json }));
    }), Effect.map(({ contents, json }) => new JsonFile({
        contents,
        dirPath: dirname(filePath),
        filePath,
        json,
        shortPath: relative(io.process.cwd(), filePath),
    })));
}
