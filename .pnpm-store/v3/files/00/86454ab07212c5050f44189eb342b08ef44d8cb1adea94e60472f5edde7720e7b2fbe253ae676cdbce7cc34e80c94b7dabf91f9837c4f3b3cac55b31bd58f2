import type { Result } from './index.js';
import type { UnaryGuard } from '../fn/types.js';
export type FromGuard = {
    <OkT, ErrT, Fn extends UnaryGuard<any>>(guard: Fn, error: ErrT, value: OkT): Result<OkT, ErrT>;
    <OkT, ErrT, Fn extends UnaryGuard<any>>(guard: Fn, error: ErrT): {
        (value: OkT): Result<OkT, ErrT>;
    };
    <Fn extends UnaryGuard<any>>(guard: Fn): {
        <OkT, ErrT>(error: ErrT): {
            (value: OkT): Result<OkT, ErrT>;
        };
        <OkT, ErrT>(error: ErrT, value: OkT): Result<OkT, ErrT>;
    };
};
/** @tags result, wrap, invoke */
export declare const fromGuard: FromGuard;
