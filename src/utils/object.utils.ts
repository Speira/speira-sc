import { AnyObject, DeepPartial } from './type.utils';
import checkIsObject, { checkIsKeyof } from './typeguard.utils';

/* **************************************************************** */
/* ************************ Object Keys *************************** */
/* **************************************************************** */

type KeysToLitteral = {
  prefix?: string;
  suffix?: string;
  join?: string;
};

/**
 * keysToString
 * @description
 * Transform Object keys to string
 * @example
 *
 *```ts
 *   const object = { header: true, blue: 3, warning: false };
 *   const result = keysToString(object); // => result: "header blue"
 *```
 */
export function keysToString(obj: AnyObject, options?: KeysToLitteral) {
  return Object.keys(obj)
    .reduce(
      (acc, cur) =>
        obj[cur]
          ? acc + ` ${options?.prefix || ''}${cur}${options?.suffix || ''}`
          : acc,
      '',
    )
    .trim();
}

/* ************************************************************************** */

/**
 * displayValue
 * @description
 * Main display value function for table
 */
export function displayValue(item: object, key: string): string {
  if (checkIsKeyof(item, key)) {
    const value = item[key];
    if (['string', 'number'].includes(typeof value)) {
      return value;
    }
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  }
  return '';
}

/**
 * mergeDeepLeft
 * Deep merge two objects.
 */

export function mergeDeep<T>(target: T, ...sources: T[]): T {
  if (!sources.length) return target;
  const nextSources = [...sources];
  let nextTarget = { ...target };
  const source = nextSources.shift();

  if (checkIsObject(nextTarget) && checkIsObject(source)) {
    for (const key in source) {
      if (checkIsObject(source[key])) {
        if (!target[key]) nextTarget = { ...nextTarget, [key]: {} };
        mergeDeep(target[key], source[key]);
      } else {
        nextTarget = { ...nextTarget, [key]: source[key] };
      }
    }
  }
  return mergeDeep(target, ...sources);
}

/**
 * mergeDeepPartial
 * Deep merge two objects, one could be partial
 */
export function mergeDeepPartial<T>(
  target: T,
  ...modifiers: DeepPartial<T>[]
): T {
  if (!modifiers.length) return target;
  const result = { ...target };
  for (const modifier of modifiers) {
    if (checkIsObject(modifier)) {
      Object.keys(modifier).forEach((key) => {
        if (checkIsKeyof(modifier, key)) {
          const targetValue = result[key];
          const modifierValue = modifier[key];
          if (checkIsObject(modifierValue)) {
            if (checkIsObject(targetValue)) {
              result[key] = mergeDeepPartial(targetValue, modifierValue);
            } else {
              result[key] = modifierValue as T[string & keyof T];
            }
          } else if (modifierValue !== undefined) {
            result[key] = modifierValue as T[string & keyof T];
          }
        }
      });
    }
  }

  return result;
}
