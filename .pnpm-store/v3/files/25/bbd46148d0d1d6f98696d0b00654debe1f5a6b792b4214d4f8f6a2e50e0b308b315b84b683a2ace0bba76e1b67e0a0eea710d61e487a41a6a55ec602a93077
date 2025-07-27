import { isArrayOfStrings } from 'tightrope/guard/is-array-of-strings.js';
import { isEmptyArray } from 'tightrope/guard/is-empty-array.js';
import { DEFAULT_CONFIG } from '../constants.js';
export function getSortAz({ rcFile }) {
    return isArrayOfStrings(rcFile.sortAz) || isEmptyArray(rcFile.sortAz)
        ? rcFile.sortAz
        : DEFAULT_CONFIG.sortAz;
}
