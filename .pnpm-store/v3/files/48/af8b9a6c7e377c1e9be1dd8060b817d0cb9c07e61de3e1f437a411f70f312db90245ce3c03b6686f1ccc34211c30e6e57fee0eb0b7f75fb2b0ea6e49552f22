import { Effect, flow, pipe } from 'effect';
import { getPackageJsonFiles } from '../get-package-json-files/index.js';
import { readConfigFile } from '../io/read-config-file.js';
import { keyBy } from './lib/key-by.js';
export function getContext({ io, cli, errorHandlers, }) {
    const exitOnError = Effect.flatMap(() => Effect.failSync(() => io.process.exit(1)));
    return pipe(Effect.Do, Effect.bind('rcFile', () => readConfigFile(io, cli.configPath)), Effect.bind('packageJsonFiles', ({ rcFile }) => getPackageJsonFiles(io, { cli, rcFile })), Effect.map(({ rcFile, packageJsonFiles }) => ({
        config: { cli, rcFile },
        isInvalid: false,
        packageJsonFiles,
        packageJsonFilesByName: keyBy('name', packageJsonFiles),
    })), Effect.catchTags({
        GlobError: flow(errorHandlers.GlobError, exitOnError),
        JsonParseError: flow(errorHandlers.JsonParseError, exitOnError),
        NoSourcesFoundError: flow(errorHandlers.NoSourcesFoundError, exitOnError),
        ReadFileError: flow(errorHandlers.ReadFileError, exitOnError),
    }));
}
