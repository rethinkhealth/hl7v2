import type { Option } from './index.js';
import type { AnyOption } from '../fn/types.js';
/**
 * Removes one level of nesting from an `Option<Option<T>>`
 *
 * @tags option, transform, transform-option
 */
export declare function flatten<Opt extends Option<AnyOption>, Value = Opt extends Option<Option<infer Value>> ? Value : never>(opt: Opt): Option<Value>;
