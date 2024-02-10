"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeDeepPartial = exports.mergeDeep = exports.displayValue = exports.keysToString = void 0;
const typeguard_utils_1 = __importStar(require("./typeguard.utils"));
/**
 * keysToString
 * @description
 * Transform Object keys to string
 * @Example
 *  const object = { header: true, blue: 3, warning: false };
 *  const result = keysToString(object); // => result: "header blue"
 */
function keysToString(obj, options) {
    return Object.keys(obj)
        .reduce((acc, cur) => obj[cur]
        ? acc + ` ${(options === null || options === void 0 ? void 0 : options.prefix) || ''}${cur}${(options === null || options === void 0 ? void 0 : options.suffix) || ''}`
        : acc, '')
        .trim();
}
exports.keysToString = keysToString;
/* ************************************************************************** */
/**
 * displayValue
 * @description
 * Main display value function for table
 */
function displayValue(item, key) {
    if ((0, typeguard_utils_1.checkIsKeyof)(item, key)) {
        const value = item[key];
        if (['string', 'number'].includes(typeof value)) {
            return value;
        }
        if (typeof value === 'boolean')
            return value ? 'Yes' : 'No';
    }
    return '';
}
exports.displayValue = displayValue;
/**
 * mergeDeepLeft
 * Deep merge two objects.
 */
function mergeDeep(target, ...sources) {
    if (!sources.length)
        return target;
    const nextSources = [...sources];
    let nextTarget = Object.assign({}, target);
    const source = nextSources.shift();
    if ((0, typeguard_utils_1.default)(nextTarget) && (0, typeguard_utils_1.default)(source)) {
        for (const key in source) {
            if ((0, typeguard_utils_1.default)(source[key])) {
                if (!target[key])
                    nextTarget = Object.assign(Object.assign({}, nextTarget), { [key]: {} });
                mergeDeep(target[key], source[key]);
            }
            else {
                nextTarget = Object.assign(Object.assign({}, nextTarget), { [key]: source[key] });
            }
        }
    }
    return mergeDeep(target, ...sources);
}
exports.mergeDeep = mergeDeep;
/**
 * mergeDeepPartial
 * Deep merge two objects, one could be partial
 */
function mergeDeepPartial(target, ...modifiers) {
    if (!modifiers.length)
        return target;
    const sources = [...modifiers];
    const modifier = sources.shift();
    let nextTarget = Object.assign({}, target);
    if ((0, typeguard_utils_1.default)(nextTarget) && (0, typeguard_utils_1.default)(modifier)) {
        for (const key in modifier) {
            const modifierVal = modifier[key];
            const targetVal = (0, typeguard_utils_1.checkIsKeyof)(nextTarget, key)
                ? nextTarget[key]
                : undefined;
            if ((0, typeguard_utils_1.default)(modifierVal) && (0, typeguard_utils_1.default)(targetVal)) {
                nextTarget = Object.assign(Object.assign({}, nextTarget), { [key]: mergeDeepPartial(targetVal, modifierVal) });
            }
            else if (modifierVal !== undefined) {
                nextTarget = Object.assign(Object.assign({}, target), { [key]: modifierVal });
            }
            else {
                nextTarget = Object.assign(Object.assign({}, target), { [key]: targetVal });
            }
        }
    }
    return mergeDeepPartial(nextTarget, ...sources);
}
exports.mergeDeepPartial = mergeDeepPartial;
