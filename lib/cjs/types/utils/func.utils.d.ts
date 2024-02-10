import { FunctionType } from './type.utils';
/**
 * Add Try Catch to functions
 * @exemple
 * someFunction(param) becomes ensafe(someFunction, onCatch?)(params)
 */
export declare function ensafe<T = unknown, P = unknown>(fn: FunctionType<T, P>, onCatch?: FunctionType<unknown>): (...params: T[]) => void;
//# sourceMappingURL=func.utils.d.ts.map