import { isArrayOfStrings } from 'tightrope/guard/is-array-of-strings.js';
import { isEmptyArray } from 'tightrope/guard/is-empty-array.js';
import { DEFAULT_CONFIG } from '../constants.js';
export function getSortFirst({ rcFile }) {
    return isArrayOfStrings(rcFile.sortFirst) || isEmptyArray(rcFile.sortFirst)
        ? rcFile.sortFirst
        : DEFAULT_CONFIG.sortFirst;
}
