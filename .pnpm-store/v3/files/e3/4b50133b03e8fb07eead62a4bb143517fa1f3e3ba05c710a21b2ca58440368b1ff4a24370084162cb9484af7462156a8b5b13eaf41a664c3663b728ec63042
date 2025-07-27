import { join } from 'node:path';
import { Effect, Option, pipe } from 'effect';
import { isNonEmptyObject } from 'tightrope/guard/is-non-empty-object.js';
import { readJsonFileSync } from './read-json-file-sync.js';
const getOptionOfNonEmptyObject = Option.liftPredicate((isNonEmptyObject));
export function readConfigFile(io, configPath) {
    return pipe(Effect.try(() => io.cosmiconfig.cosmiconfig('syncpack')), Effect.flatMap(client => Effect.tryPromise(() => configPath ? client.load(configPath) : client.search())), Effect.flatMap(result => result !== null
        ? getValueFromCosmiconfig(result)
        : findConfigInPackageJson(io)), Effect.tap(config => Effect.logDebug(`config file found: ${JSON.stringify(config)}`)), Effect.tapError(() => Effect.logDebug('no config file found, will use defaults')), Effect.catchAll(() => Effect.succeed({})));
}
/**
 * Look for a .config.syncpack property in the root package.json.
 * @see https://github.com/JamieMason/syncpack/issues/86
 */
function findConfigInPackageJson(io) {
    return pipe(Effect.Do, Effect.bind('rcPath', () => Effect.succeed(join(io.process.cwd(), 'package.json'))), Effect.bind('packageJson', ({ rcPath }) => readJsonFileSync(io, rcPath)), Effect.bind('config', ({ packageJson }) => Effect.try(() => packageJson.contents?.config?.syncpack)), Effect.flatMap(({ config }) => getOptionOfNonEmptyObject(config)), Effect.tapBoth({
        onSuccess: () => Effect.logDebug('config found in <package.json>.config.syncpack'),
        onFailure: () => Effect.logDebug('config not found in <package.json>.config.syncpack'),
    }));
}
/** Extract the value from a successful search by cosmiconfig */
function getValueFromCosmiconfig(result) {
    return pipe(Effect.succeed(result), Effect.tap(result => Effect.logDebug(`cosmiconfig found ${result.filepath}`)), Effect.flatMap(result => getOptionOfNonEmptyObject(result.config)));
}
