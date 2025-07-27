import fs from 'node:fs';
import { cosmiconfig } from 'cosmiconfig';
import { Context } from 'effect';
import enquirer from 'enquirer';
import { globbySync } from 'globby';
import { sync as readYamlFileSync } from 'read-yaml-file';
export interface Io {
    cosmiconfig: {
        cosmiconfig: typeof cosmiconfig;
    };
    enquirer: {
        prompt: typeof enquirer.prompt<any>;
    };
    fs: typeof fs;
    globby: {
        sync: typeof globbySync;
    };
    process: {
        cwd: typeof process.cwd;
        exit: typeof process.exit;
    };
    readYamlFile: {
        sync: typeof readYamlFileSync<any>;
    };
}
export declare const IoTag: Context.Tag<Io, Io>;
export declare const io: Io;
