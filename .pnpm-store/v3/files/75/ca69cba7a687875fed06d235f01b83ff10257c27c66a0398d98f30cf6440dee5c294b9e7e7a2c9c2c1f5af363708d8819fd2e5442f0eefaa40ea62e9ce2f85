import { join } from 'node:path';
import { Effect, Option as O, pipe } from 'effect';
import { isArrayOfStrings } from 'tightrope/guard/is-array-of-strings.js';
import { isNonEmptyObject } from 'tightrope/guard/is-non-empty-object.js';
import { readJsonFileSync } from '../../io/read-json-file-sync.js';
export function getYarnPatterns(io) {
    return pipe(readJsonFileSync(io, join(io.process.cwd(), 'package.json')), Effect.map(file => isNonEmptyObject(file.contents.workspaces) &&
        isArrayOfStrings(file.contents.workspaces.packages)
        ? O.some(file.contents.workspaces.packages)
        : isArrayOfStrings(file.contents.workspaces)
            ? O.some(file.contents.workspaces)
            : O.none()), Effect.catchTags({
        ReadFileError: () => Effect.succeed(O.none()),
        JsonParseError: () => Effect.succeed(O.none()),
    }));
}
