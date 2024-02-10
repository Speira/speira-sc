import { AnyObject, DeepPartial } from './type.utils';
type KeysToLitteral = {
    prefix?: string;
    suffix?: string;
    join?: string;
};
/**
 * keysToString
 * @description
 * Transform Object keys to string
 * @Example
 *  const object = { header: true, blue: 3, warning: false };
 *  const result = keysToString(object); // => result: "header blue"
 */
export declare function keysToString(obj: AnyObject, options?: KeysToLitteral): string;
/**
 * displayValue
 * @description
 * Main display value function for table
 */
export declare function displayValue(item: object, key: string): string;
/**
 * mergeDeepLeft
 * Deep merge two objects.
 */
export declare function mergeDeep<T>(target: T, ...sources: T[]): T;
/**
 * mergeDeepPartial
 * Deep merge two objects, one could be partial
 */
export declare function mergeDeepPartial<T>(target: T, ...modifiers: DeepPartial<T>[]): T;
export {};
//# sourceMappingURL=object.utils.d.ts.map