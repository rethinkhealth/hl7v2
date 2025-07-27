import { isNonEmptyString } from 'tightrope/guard/is-non-empty-string.js';
import { DEFAULT_CONFIG } from '../constants.js';
export function getFilter({ cli, rcFile }) {
    // @TODO Deprecate `filter` in .syncpackrc
    return isNonEmptyString(cli.filter)
        ? cli.filter
        : isNonEmptyString(rcFile.filter)
            ? rcFile.filter
            : DEFAULT_CONFIG.filter;
}
