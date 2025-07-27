import type { Gen } from '../fn/types.js';
export type Split = {
    (char: string): {
        (chunks: Gen<string>): Gen<string>;
    };
    (char: string, chunks: Gen<string>): Gen<string>;
};
/** @tags transformer, generator */
export declare const split: Split;
