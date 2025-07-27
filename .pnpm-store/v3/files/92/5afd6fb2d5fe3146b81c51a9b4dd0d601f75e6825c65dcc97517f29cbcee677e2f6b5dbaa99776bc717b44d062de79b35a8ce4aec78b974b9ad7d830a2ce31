import { Effect } from 'effect';
import type { InvalidCustomTypeError } from '../config/get-custom-types.js';
import type { DeprecatedTypesError, RenamedWorkspaceTypeError } from '../config/get-enabled-types.js';
import type { NoSourcesFoundError } from '../get-package-json-files/get-file-paths.js';
import type { GlobError } from '../io/glob-sync.js';
import type { ReadFileError } from '../io/read-file-sync.js';
import type { JsonParseError } from '../io/read-json-file-sync.js';
import type { WriteFileError } from '../io/write-file-sync.js';
import type { SemverGroup } from '../semver-group/index.js';
import type { VersionGroup } from '../version-group/index.js';
type R = Effect.Effect<void>;
export interface ErrorHandlers {
    DeprecatedTypesError(err: DeprecatedTypesError): R;
    InvalidCustomTypeError(err: InvalidCustomTypeError): R;
    RenamedWorkspaceTypeError(err: RenamedWorkspaceTypeError): R;
    SemverGroupConfigError(err: SemverGroup.ConfigError): R;
    VersionGroupConfigError(err: VersionGroup.ConfigError): R;
    GlobError(err: GlobError): R;
    JsonParseError(err: JsonParseError): R;
    NoSourcesFoundError(err: NoSourcesFoundError): R;
    ReadFileError(err: ReadFileError): R;
    WriteFileError(err: WriteFileError): R;
}
export declare const defaultErrorHandlers: ErrorHandlers;
export {};
