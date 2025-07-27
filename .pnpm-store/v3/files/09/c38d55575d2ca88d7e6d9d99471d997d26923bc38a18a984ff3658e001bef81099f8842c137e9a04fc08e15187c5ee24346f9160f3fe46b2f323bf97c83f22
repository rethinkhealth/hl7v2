import { isNonEmptyString } from 'tightrope/guard/is-non-empty-string.js';
import { DEFAULT_CONFIG } from '../constants.js';
export function getIndent({ cli, rcFile }) {
    return isNonEmptyString(cli.indent)
        ? cli.indent.replaceAll('\\t', '\t')
        : isNonEmptyString(rcFile.indent)
            ? rcFile.indent
            : DEFAULT_CONFIG.indent;
}
