import { EOL } from 'node:os';
import chalk from 'chalk';
import { Effect } from 'effect';
export const defaultErrorHandlers = {
    // getContext
    GlobError(err) {
        return Effect.logError([
            chalk.red('An error was found when processing your source globs'),
            chalk.red('  Error:', err.error),
        ].join(EOL));
    },
    JsonParseError(err) {
        return Effect.logError([
            chalk.red('An error was found when parsing a JSON file'),
            chalk.red('  File:', err.filePath),
            chalk.red('  Error:', err.errors),
        ].join(EOL));
    },
    NoSourcesFoundError(err) {
        return Effect.logError([
            chalk.red('No package.json files were found'),
            chalk.red('  CWD:', err.CWD),
            chalk.red('  Sources:', err.patterns),
        ].join(EOL));
    },
    ReadFileError(err) {
        return Effect.logError([
            chalk.red('An error was found when reading a file'),
            chalk.red('  File:', err.filePath),
            chalk.red('  Error:', err.error),
        ].join(EOL));
    },
    // Others
    DeprecatedTypesError(err) {
        const url = 'https://github.com/JamieMason/syncpack/releases/tag/9.0.0';
        return Effect.logError([
            chalk.red(`Your syncpack config file contains values deprecated in ${url}`),
            chalk.red('  Dependency Types:', err.types),
            chalk.red('  Docs: https://jamiemason.github.io/syncpack/config/dependency-types'),
        ].join(EOL));
    },
    InvalidCustomTypeError(err) {
        return Effect.logError([
            chalk.red('Your syncpack config file contains an invalid custom type'),
            chalk.red('  Error:', err.reason),
            chalk.red('  Config:', err.config),
            chalk.red('  Docs: https://jamiemason.github.io/syncpack/config/custom-types'),
        ].join(EOL));
    },
    RenamedWorkspaceTypeError() {
        const url = 'https://github.com/JamieMason/syncpack/releases/tag/11.2.1';
        return Effect.logError([
            chalk.red(`The "workspace" dependency type was renamed to "local" in ${url}`),
            chalk.red('  Docs: https://jamiemason.github.io/syncpack/config/dependency-types'),
        ].join(EOL));
    },
    SemverGroupConfigError(err) {
        return Effect.logError([
            chalk.red('Your semver group config contains an error'),
            chalk.red('  Error:', err.error),
            chalk.red('  Config:', err.config),
            chalk.red('  Docs: https://jamiemason.github.io/syncpack/config/semver-groups'),
        ].join(EOL));
    },
    VersionGroupConfigError(err) {
        return Effect.logError([
            chalk.red('Your version group config contains an error'),
            chalk.red('  Error:', err.error),
            chalk.red('  Config:', err.config),
            chalk.red('  Docs: https://jamiemason.github.io/syncpack/config/version-groups'),
        ].join(EOL));
    },
    WriteFileError(err) {
        return Effect.logError([
            chalk.red('An error was found when writing to a file'),
            chalk.red('  File:', err.filePath),
            chalk.red('  Error:', err.error),
        ].join(EOL));
    },
};
