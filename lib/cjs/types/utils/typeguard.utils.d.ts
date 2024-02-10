/**
 * checkIsObject
 */
export default function checkIsObject(arg: unknown): arg is object;
/**
 * checkIsKeyof
 * @typeGard
 * @description
 * Verify if a key is in an object so that typescript associates the keyof attribute
 * @example
 * checkIsKeyof({key: 1}, 'key') // true
 * checkIsKeyof({key: 1}, 'other') // false
 */
export declare function checkIsKeyof<T = object>(obj: T, key: PropertyKey): key is keyof T;
/**
 * checkIsBoolean
 * @typeGuard
 */
export declare function checkIsBoolean(arg: unknown): arg is boolean;
/**
 * checkIsFunction
 * @typeGuard
 */
export declare function checkIsFunction(item: unknown): item is ([...arg]?: unknown[]) => unknown;
/**
 * checkIsNumber
 * @typeGuard
 */
export declare function checkIsNumber(arg: unknown): arg is number;
/**
 * checkIsString
 */
export declare function checkIsString(arg: unknown): arg is string;
/**
 * checkIsArray
 */
export declare function checkIsArray(arg: unknown): arg is unknown[];
//# sourceMappingURL=typeguard.utils.d.ts.map