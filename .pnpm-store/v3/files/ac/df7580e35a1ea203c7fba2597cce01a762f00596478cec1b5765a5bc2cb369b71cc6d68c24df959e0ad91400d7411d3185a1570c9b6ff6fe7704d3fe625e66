type Some = {
    <Fn extends (value: any) => value is any>(guard: Fn): {
        (value: unknown): value is Fn extends (value: any) => value is infer T ? Array<T> : unknown[];
    };
    <Fn extends (value: any) => value is any>(guard: Fn, value: unknown): value is Fn extends (value: any) => value is infer T ? Array<T> : unknown[];
};
/**
 * Returns true if array is not empty and any member of the array passes the guard
 *
 * @tags guard
 */
export declare const some: Some;
export {};
