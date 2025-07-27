import chalk from 'chalk';
export function getSemverGroupHeader(input) {
    return getGroupHeader(input.group.config.label || `Semver Group ${input.index + 1}`);
}
export function getVersionGroupHeader(input) {
    return getGroupHeader(input.group.config.label || `Version Group ${input.index + 1}`);
}
function getGroupHeader(label) {
    const trimmed = label.trim();
    const hasNewLines = trimmed.search(/[\r\n]/) !== -1;
    const header = hasNewLines
        ? formatMultiLine(trimmed)
        : formatSingleLine(trimmed);
    return chalk.blue(header);
}
function formatSingleLine(label) {
    const leftSide = `= ${label} `;
    const dividerWidth = 80 - leftSide.length;
    const rightSide = dividerWidth > 0 ? '='.repeat(dividerWidth) : '';
    return `${leftSide}${rightSide}`;
}
function formatMultiLine(label) {
    const reindented = label.replace(/^\s+/gm, '  ');
    return `= ${reindented}`;
}
