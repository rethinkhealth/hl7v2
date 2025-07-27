import { EOL } from 'node:os';
import { getIndent } from '../config/get-indent.js';
const CR = '\r';
const CRLF = '\r\n';
const LF = '\n';
export const newlines = {
    detect(source) {
        const cr = source.split(CR).length;
        const lf = source.split(LF).length;
        const crlf = source.split(CRLF).length;
        if (cr + lf === 0) {
            return EOL;
        }
        if (crlf === cr && crlf === lf) {
            return CRLF;
        }
        if (cr > lf) {
            return CR;
        }
        return LF;
    },
    fix(source, lineEnding) {
        return source.replace(/\r\n|\n|\r/g, lineEnding);
    },
};
export function toFormattedJson(ctx, file) {
    const contents = file.jsonFile.contents;
    const indent = getIndent(ctx.config);
    const eol = newlines.detect(file.jsonFile.json);
    const source = `${JSON.stringify(contents, null, indent)}${eol}`;
    return newlines.fix(source, eol);
}
