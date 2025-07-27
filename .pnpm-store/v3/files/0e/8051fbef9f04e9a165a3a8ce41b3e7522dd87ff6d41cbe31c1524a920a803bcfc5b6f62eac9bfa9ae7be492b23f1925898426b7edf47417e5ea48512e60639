import chalk from 'chalk-template';
import { Effect, pipe } from 'effect';
import { ICON } from '../constants.js';
import { writeFileSync } from './write-file-sync.js';
export function writeIfChanged(ctx) {
    return pipe(Effect.all(ctx.packageJsonFiles.map((file) => file.jsonFile.json !== file.nextJson
        ? pipe(writeFileSync(file.jsonFile.filePath, file.nextJson), Effect.flatMap(() => Effect.logInfo(chalk `{green ${ICON.tick}} ${file.jsonFile.shortPath}`)))
        : Effect.logInfo(chalk `{dim ${ICON.skip} ${file.jsonFile.shortPath}}`))), Effect.map(() => ctx));
}
