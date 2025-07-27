import { Data, Effect, pipe } from 'effect';
import { uniq } from 'tightrope/array/uniq.js';
import { isNonEmptyArray } from 'tightrope/guard/is-non-empty-array.js';
import { globSync } from '../io/glob-sync.js';
import { getPatterns } from './get-patterns/index.js';
export class NoSourcesFoundError extends Data.TaggedClass('NoSourcesFoundError') {
}
/**
 * Using --source options and/or config files on disk from
 * npm/pnpm/yarn/lerna, return an array of absolute paths to every package.json
 * file the user is working with.
 *
 * @returns Array of absolute file paths to package.json files
 */
export function getFilePaths(io, config) {
    return pipe(Effect.Do, Effect.bind('patterns', () => getPatterns(io, config)), Effect.bind('filePaths', ({ patterns }) => globSync(io, patterns)), Effect.bind('flatFilePaths', ({ filePaths }) => Effect.sync(() => uniq(filePaths.flat()))), Effect.flatMap(({ flatFilePaths, patterns }) => isNonEmptyArray(flatFilePaths)
        ? Effect.succeed(flatFilePaths)
        : Effect.fail(new NoSourcesFoundError({
            CWD: io.process.cwd(),
            patterns,
        }))));
}
