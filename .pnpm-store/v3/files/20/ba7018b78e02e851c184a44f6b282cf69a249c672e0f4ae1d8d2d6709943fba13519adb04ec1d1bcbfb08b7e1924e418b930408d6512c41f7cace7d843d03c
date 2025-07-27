import type { Result } from './index.js';
import type { AnyResult, GuardType, UnaryGuard } from '../fn/types.js';
export type Filter = {
    <G extends UnaryGuard, Res extends AnyResult>(guard: G, msg: string, res: Res): Result<GuardType<G>, Error>;
    <G extends UnaryGuard>(guard: G, msg: string): {
        <Res extends AnyResult>(res: Res): Result<GuardType<G>, Error>;
    };
    <G extends UnaryGuard>(guard: G): {
        (msg: string): {
            <Res extends AnyResult>(res: Res): Result<GuardType<G>, Error>;
        };
        <Res extends AnyResult>(msg: string, res: Res): Result<GuardType<G>, Error>;
    };
};
/** @tags result, right-biased */
export declare const filter: Filter;
