import type { Instance } from '../get-instances/instance.js';
import type { Delete } from '../version-group/lib/delete.js';
/** A instance which should be deleted */
export declare class DeleteSpecifier {
    _tag: string;
    /** The public name referenced in config */
    name: "delete";
    raw: Delete;
    instance: Instance;
    constructor(data: {
        raw: Delete;
        instance: Instance;
    });
    getSemver: (this: import("./index.js").Specifier.Any) => import("effect/Effect").Effect<string, import("./lib/non-semver-error.js").NonSemverError>;
    setSemver: (this: import("./index.js").Specifier.Any, _version: string) => import("effect/Effect").Effect<import("./index.js").Specifier.Any, import("./lib/non-semver-error.js").NonSemverError>;
    replaceWith: <T extends import("./index.js").Specifier.Any>(specifier: T) => T;
}
