import fs from 'node:fs';
import { cosmiconfig } from 'cosmiconfig';
import { Context } from 'effect';
import enquirer from 'enquirer';
import { globbySync } from 'globby';
import { sync as readYamlFileSync } from 'read-yaml-file';
export const IoTag = Context.GenericTag('@services/IoTag');
export const io = {
    cosmiconfig: {
        cosmiconfig,
    },
    enquirer: {
        prompt: enquirer.prompt,
    },
    fs: fs,
    globby: {
        sync: globbySync,
    },
    process: {
        cwd: process.cwd,
        exit: process.exit,
    },
    readYamlFile: {
        sync: readYamlFileSync,
    },
};
