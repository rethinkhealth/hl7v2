import { Effect } from 'effect';
import type { ErrorHandlers } from '../error-handlers/default-error-handlers.js';
import type { Ctx } from '../get-context/index.js';
import type { Io } from '../io/index.js';
import type { SemverGroup } from '../semver-group/index.js';
import type { VersionGroup } from '../version-group/index.js';
import type { Instance } from './instance.js';
interface Instances {
    all: Instance[];
    semverGroups: SemverGroup.Any[];
    versionGroups: VersionGroup.Any[];
}
export declare function getInstances(ctx: Ctx, io: Io, errorHandlers: ErrorHandlers): Effect.Effect<Instances>;
export {};
