import type { Option } from './index.js';
import type { UnaryGuard } from '../fn/types.js';
export type FromGuard = {
    <Fn extends UnaryGuard, O = Fn extends (value: any) => value is infer O ? O : never>(guard: Fn): {
        (value: unknown): Option<O>;
    };
    <Fn extends UnaryGuard, O = Fn extends (value: any) => value is infer O ? O : never>(guard: Fn, value: unknown): Option<O>;
};
/** @tags option, wrap, invoke */
export declare const fromGuard: FromGuard;
