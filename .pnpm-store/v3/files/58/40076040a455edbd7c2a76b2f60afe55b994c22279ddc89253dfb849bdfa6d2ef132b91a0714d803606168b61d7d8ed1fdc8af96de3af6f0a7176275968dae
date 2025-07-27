import type { AsymmetricMatcher } from '../fn/types.js';
export type IsJestEqual = {
    <T>(other: T): {
        (value: unknown): value is typeof other extends AsymmetricMatcher<infer T> ? T : typeof other;
    };
    <T>(other: T, value: unknown): value is typeof other extends AsymmetricMatcher<infer T> ? T : typeof other;
};
/** ... */
export declare const isJestEqual: IsJestEqual;
