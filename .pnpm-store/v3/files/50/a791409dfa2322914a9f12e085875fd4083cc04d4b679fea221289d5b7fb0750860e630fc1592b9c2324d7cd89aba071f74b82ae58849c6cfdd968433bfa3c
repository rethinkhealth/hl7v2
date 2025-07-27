import { Effect, Option as O, pipe } from 'effect';
import { isArrayOfStrings } from 'tightrope/guard/is-array-of-strings.js';
import { getSource } from '../../config/get-source.js';
import { DEFAULT_CONFIG } from '../../constants.js';
import { getLernaPatterns } from './get-lerna-patterns.js';
import { getPnpmPatterns } from './get-pnpm-patterns.js';
import { getYarnPatterns } from './get-yarn-patterns.js';
/**
 * Find every glob pattern which should be used to find package.json files for
 * this monorepo.
 */
export function getPatterns(io, config) {
    return pipe(getCliPatterns(), Effect.flatMap(opt => O.isSome(opt) ? Effect.succeed(opt) : getWorkspacePatterns()), Effect.map(O.map(limitToPackageJson)), Effect.map(O.getOrElse(() => [...DEFAULT_CONFIG.source])));
    function getCliPatterns() {
        return pipe(O.some(getSource(config)), O.filter(isArrayOfStrings), Effect.succeed);
    }
    function getWorkspacePatterns() {
        return pipe(getYarnPatterns(io), Effect.flatMap(opt => O.isSome(opt) ? Effect.succeed(opt) : getPnpmPatterns(io)), Effect.flatMap(opt => O.isSome(opt) ? Effect.succeed(opt) : getLernaPatterns(io)), Effect.map(O.map(patterns => ['package.json', ...patterns])));
    }
    function limitToPackageJson(patterns) {
        return patterns.map(pattern => pattern.includes('package.json') ? pattern : `${pattern}/package.json`);
    }
}
