import { Effect, pipe } from 'effect';
import { applyEdits, modify } from 'jsonc-parser';
import { Instance } from '../get-instances/instance.js';
export class PackageJsonFile {
    /** resolved configuration */
    config;
    /** ensure only one set of instances is ever created and shared */
    _instances;
    /** the wrapped package.json file */
    jsonFile;
    /** the .name property from the package.json file */
    name;
    /** the next package.json file contents after modification, with formatting preserved */
    nextJson;
    constructor(jsonFile, config) {
        this._instances = null;
        this.config = config;
        this.jsonFile = jsonFile;
        this.name = jsonFile.contents.name;
        this.nextJson = jsonFile.json;
    }
    getInstances(enabledTypes) {
        if (!this._instances) {
            return pipe(Effect.all(enabledTypes.map(strategy => pipe(strategy.read(this), Effect.map(entries => entries.map(([name, rawSpecifier]) => new Instance(name, rawSpecifier, this, strategy)))))), Effect.map(array => array.flat()), Effect.tapBoth({
                onSuccess: instances => Effect.logDebug(`found ${instances.length} instances in <${this.jsonFile.shortPath}>`),
                onFailure: () => Effect.logError(`failed to get instances from <${this.jsonFile.shortPath}>`),
            }), Effect.catchAll(() => Effect.succeed([])), Effect.tap(instances => Effect.sync(() => {
                this._instances = instances;
            })));
        }
        return Effect.succeed(this._instances);
    }
    /**
     * Apply an edit to the raw JSON string which will be written to disk. This string preserves the
     * original formatting of the file.
     */
    applyEdit(fullPath, value) {
        const edits = modify(this.nextJson, fullPath.map(parseNumericStrings), value, {});
        this.nextJson = applyEdits(this.nextJson, edits);
    }
}
function parseNumericStrings(key) {
    return /[^0-9]/.test(key) ? key : Number(key);
}
