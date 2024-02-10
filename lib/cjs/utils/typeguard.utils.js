"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsArray = exports.checkIsString = exports.checkIsNumber = exports.checkIsFunction = exports.checkIsBoolean = exports.checkIsKeyof = void 0;
/**
 * checkIsObject
 */
function checkIsObject(arg) {
    return Object.prototype.toString.call(arg) === "[object Object]";
}
exports.default = checkIsObject;
/**
 * checkIsKeyof
 * @typeGard
 * @description
 * Verify if a key is in an object so that typescript associates the keyof attribute
 * @example
 * checkIsKeyof({key: 1}, 'key') // true
 * checkIsKeyof({key: 1}, 'other') // false
 */
function checkIsKeyof(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
exports.checkIsKeyof = checkIsKeyof;
/**
 * checkIsBoolean
 * @typeGuard
 */
function checkIsBoolean(arg) {
    return typeof arg === "boolean";
}
exports.checkIsBoolean = checkIsBoolean;
/**
 * checkIsFunction
 * @typeGuard
 */
function checkIsFunction(item) {
    return Object.prototype.toString.call(item) === "[Object Function]";
}
exports.checkIsFunction = checkIsFunction;
/**
 * checkIsNumber
 * @typeGuard
 */
function checkIsNumber(arg) {
    return Object.prototype.toString.call(arg) === "[object Number]";
}
exports.checkIsNumber = checkIsNumber;
/**
 * checkIsString
 */
function checkIsString(arg) {
    return typeof arg === "string";
}
exports.checkIsString = checkIsString;
/**
 * checkIsArray
 */
function checkIsArray(arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
}
exports.checkIsArray = checkIsArray;
