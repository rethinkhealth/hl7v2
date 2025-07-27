import { join } from 'node:path';
import { Effect, Option as O, pipe } from 'effect';
import { isArrayOfStrings } from 'tightrope/guard/is-array-of-strings.js';
import { readJsonFileSync } from '../../io/read-json-file-sync.js';
export function getLernaPatterns(io) {
    return pipe(readJsonFileSync(io, join(io.process.cwd(), 'lerna.json')), Effect.map(file => isArrayOfStrings(file.contents.packages)
        ? O.some(file.contents.packages)
        : O.none()), Effect.catchTags({
        ReadFileError: () => Effect.succeed(O.none()),
        JsonParseError: () => Effect.succeed(O.none()),
    }));
}
