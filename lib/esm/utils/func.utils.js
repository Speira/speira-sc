"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensafe = void 0;
/**
 * Add Try Catch to functions
 * @exemple
 * someFunction(param) becomes ensafe(someFunction, onCatch?)(params)
 */
function ensafe(fn, onCatch) {
    return (...params) => {
        try {
            fn(...params);
        }
        catch (error) {
            if (onCatch)
                onCatch(error);
            else {
                // eslint-disable-next-line
                console.error(`[speira-sc][ensafe] A non catched error has occured during the execution of the function ${fn.name}`);
            }
        }
    };
}
exports.ensafe = ensafe;
