import { join } from 'node:path';
import { Effect, Option as O, pipe } from 'effect';
import { isArrayOfStrings } from 'tightrope/guard/is-array-of-strings.js';
import { readYamlFileSync } from '../../io/read-yaml-file-sync.js';
export function getPnpmPatterns(io) {
    return pipe(
    // packages:
    //   - "packages/**"
    //   - "components/**"
    //   - "!**/test/**"
    readYamlFileSync(io, join(io.process.cwd(), 'pnpm-workspace.yaml')), Effect.map(file => isArrayOfStrings(file?.packages) ? O.some(file.packages) : O.none()), Effect.catchTags({
        ReadYamlFileError: () => Effect.succeed(O.none()),
    }));
}
