import { BaseSpecifier } from './base.js';
/** A instance which should be deleted */
export class DeleteSpecifier {
    _tag = 'Delete';
    /** The public name referenced in config */
    name = 'delete';
    raw;
    instance;
    constructor(data) {
        this.raw = data.raw;
        this.instance = data.instance;
    }
    getSemver = BaseSpecifier.prototype.getSemver;
    setSemver = BaseSpecifier.prototype.setSemver;
    replaceWith = BaseSpecifier.prototype.replaceWith;
}
