import { EOL } from 'node:os';
import chalk from 'chalk-template';
import { Context, Effect, pipe } from 'effect';
import { CliConfigTag } from '../config/tag.js';
import { ICON } from '../constants.js';
import { defaultErrorHandlers } from '../error-handlers/default-error-handlers.js';
import { getContext } from '../get-context/index.js';
import { getInstances } from '../get-instances/index.js';
import { exitIfInvalid } from '../io/exit-if-invalid.js';
import { IoTag } from '../io/index.js';
import { getVersionGroupHeader } from '../lib/get-group-header.js';
import { padStart } from '../lib/pad-start.js';
import { withLogger } from '../lib/with-logger.js';
export function list({ io, cli, errorHandlers = defaultErrorHandlers }) {
    return pipe(getContext({ io, cli, errorHandlers }), Effect.flatMap(ctx => pipeline(ctx, io, errorHandlers)), Effect.flatMap(exitIfInvalid), Effect.provide(pipe(Context.empty(), Context.add(CliConfigTag, cli), Context.add(IoTag, io))), withLogger);
}
export function pipeline(ctx, io, errorHandlers) {
    return Effect.gen(function* ($) {
        const { versionGroups } = yield* $(getInstances(ctx, io, errorHandlers));
        let index = 0;
        for (const group of versionGroups) {
            yield* $(Effect.logInfo(getVersionGroupHeader({ group, index })));
            yield* $(onGroupTag[group._tag](group));
            if (group._tag === 'Banned' ||
                group._tag === 'FilteredOut' ||
                group._tag === 'Ignored') {
                if (group._tag === 'Banned') {
                    ctx.isInvalid = true;
                }
                index++;
                continue;
            }
            for (const groupReport of yield* $(group.inspectAll())) {
                const matches = new Set();
                const mismatches = new Set();
                for (const report of groupReport.reports) {
                    if (report.isInvalid) {
                        ctx.isInvalid = true;
                    }
                    switch (report._tagGroup) {
                        case 'Valid': {
                            const actual = report.specifier.raw;
                            matches.add(chalk `{gray ${actual}}`);
                            break;
                        }
                        case 'Fixable': {
                            mismatches.add(getLogForFixable(report));
                            break;
                        }
                        case 'Unfixable': {
                            mismatches.add(getLogForUnfixable(report));
                            break;
                        }
                    }
                }
                if (mismatches.size === 0) {
                    yield* $(logMatchingReport(groupReport, matches));
                }
                else {
                    yield* $(logMismatchingReport(groupReport, mismatches));
                }
            }
            index++;
        }
        yield* $(logOtherCommands());
        return ctx;
    });
}
const onGroupTag = {
    Banned(group) {
        return Effect.gen(function* ($) {
            for (const groupReport of yield* $(group.inspectAll())) {
                const name = groupReport.name;
                const usages = `${padStart(groupReport.reports.length)}x`;
                const invalidLabel = chalk `{gray ${usages}} {red ${name}}`;
                const msg = chalk `${invalidLabel} {gray [Banned]}`;
                yield* $(Effect.logInfo(msg));
            }
        });
    },
    FilteredOut(group) {
        return Effect.gen(function* ($) {
            for (const groupReport of yield* $(group.inspectAll())) {
                const name = groupReport.name;
                const usages = `${padStart(groupReport.reports.length)}x`;
                const invalidLabel = chalk `{gray ${usages}} {gray ${name}}`;
                const msg = chalk `${invalidLabel} {gray [FilteredOut]}`;
                yield* $(Effect.logInfo(msg));
            }
        });
    },
    Ignored(group) {
        return Effect.gen(function* ($) {
            for (const groupReport of yield* $(group.inspectAll())) {
                const name = groupReport.name;
                const usages = `${padStart(groupReport.reports.length)}x`;
                const invalidLabel = chalk `{gray ${usages}} {gray ${name}}`;
                const msg = chalk `${invalidLabel} {gray [Ignored]}`;
                yield* $(Effect.logInfo(msg));
            }
        });
    },
    Pinned(_group) {
        return Effect.void;
    },
    SameRange(_group) {
        return Effect.void;
    },
    SnappedTo(_group) {
        return Effect.void;
    },
    Standard(_group) {
        return Effect.void;
    },
};
function logMatchingReport(groupReport, messages) {
    const name = groupReport.name;
    const usages = `${padStart(groupReport.reports.length)}x`;
    const label = chalk `{gray ${usages}} ${name}{gray :}`;
    return Effect.logInfo(chalk `${label} ${[...messages].join(chalk `{gray , }`)}`);
}
function logMismatchingReport(groupReport, messages) {
    const name = groupReport.name;
    const usages = `${padStart(groupReport.reports.length)}x`;
    const label = chalk `{gray ${usages}} {red ${name}}{gray :}`;
    const indent = usages.replace(/./g, ' ');
    return Effect.logInfo(chalk `${label}${['', ...messages].join(chalk `${EOL}${indent} {red ${ICON.cross}} `)}`);
}
function getLogForFixable(report) {
    const _tag = report._tag;
    const actual = report.fixable.instance.rawSpecifier.raw;
    const expected = report.fixable.raw;
    return chalk `{red ${actual}} {gray ${ICON.rightArrow}} {green ${expected}} {gray [${_tag}]}`;
}
function getLogForUnfixable(report) {
    const _tag = report._tag;
    const actual = report.unfixable.rawSpecifier.raw;
    return chalk `{red ${actual}} {gray ${ICON.rightArrow}} {gray [${_tag}]}`;
}
export function logOtherCommands() {
    return Effect.logInfo([
        '',
        '  What next?',
        chalk `{dim -} {yellow syncpack list-mismatches} to see more detail about mismatching versions`,
        chalk `{dim -} {yellow syncpack fix-mismatches} to fix version mismatches automatically`,
        chalk `{dim -} {yellow syncpack format} to sort and prettify your package.json files`,
        chalk `{dim -} {yellow syncpack update} to choose updates from the npm registry`,
        chalk `{dim -} {yellow syncpack --help} for everything else`,
        '',
    ].join(EOL));
}
