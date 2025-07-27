import { isArrayOfStrings } from 'tightrope/guard/is-array-of-strings.js';
export function getSource({ cli, rcFile }) {
    return isArrayOfStrings(cli.source)
        ? cli.source
        : isArrayOfStrings(rcFile.source)
            ? rcFile.source
            : [];
}
