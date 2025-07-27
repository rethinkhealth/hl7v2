import { isArrayOfStrings } from 'tightrope/guard/is-array-of-strings.js';
import { isEmptyArray } from 'tightrope/guard/is-empty-array.js';
import { DEFAULT_CONFIG } from '../constants.js';
export function getSortExports({ rcFile }) {
    return isArrayOfStrings(rcFile.sortExports) ||
        isEmptyArray(rcFile.sortExports)
        ? rcFile.sortExports
        : DEFAULT_CONFIG.sortExports;
}
