import { FunctionType } from './type.utils';

/**
 * Add Try Catch to functions
 * @exemple
 * someFunction(param) becomes ensafe(someFunction, onCatch?)(params)
 */
export function ensafe<T = unknown, P = unknown>(
  fn: FunctionType<T, P>,
  onCatch?: FunctionType<unknown>,
) {
  return (...params: T[]) => {
    try {
      fn(...params);
    } catch (error: unknown) {
      if (onCatch) onCatch(error);
      else {
        // eslint-disable-next-line
        console.error(
          `[speira-sc][ensafe] A non catched error has occured during the execution of the function ${fn.name}`,
        );
      }
    }
  };
}
