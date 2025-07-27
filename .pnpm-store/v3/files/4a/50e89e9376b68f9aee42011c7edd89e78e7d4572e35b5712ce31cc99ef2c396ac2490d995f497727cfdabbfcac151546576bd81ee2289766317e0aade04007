import { Effect } from 'effect';
import type { Ctx } from '../get-context/index.js';
import type { GlobError } from '../io/glob-sync.js';
import type { Io } from '../io/index.js';
import type { ReadFileError } from '../io/read-file-sync.js';
import type { JsonParseError } from '../io/read-json-file-sync.js';
import type { NoSourcesFoundError } from './get-file-paths.js';
import { PackageJsonFile } from './package-json-file.js';
/** Create an API for every package.json file needed. */
export declare function getPackageJsonFiles(io: Io, config: Ctx['config']): Effect.Effect<PackageJsonFile[], NoSourcesFoundError | GlobError | ReadFileError | JsonParseError>;
