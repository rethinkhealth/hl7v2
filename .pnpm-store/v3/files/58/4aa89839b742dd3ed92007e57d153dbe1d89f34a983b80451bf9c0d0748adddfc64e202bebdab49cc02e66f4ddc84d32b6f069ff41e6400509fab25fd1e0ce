import { Effect, pipe } from 'effect';
import { readJsonFileSync } from '../io/read-json-file-sync.js';
import { getFilePaths } from './get-file-paths.js';
import { PackageJsonFile } from './package-json-file.js';
/** Create an API for every package.json file needed. */
export function getPackageJsonFiles(io, config) {
    return pipe(getFilePaths(io, config), Effect.flatMap(filePaths => Effect.all(filePaths.map(filePath => readJsonFileSync(io, filePath)))), Effect.map(files => files.map(file => new PackageJsonFile(file, config))), Effect.tap(files => Effect.logDebug(`${files.length} package.json files found`)));
}
