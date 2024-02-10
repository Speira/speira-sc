"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const StyledTable_1 = require("./styles/StyledTable");
/**
 * Table
 * @component
 * @description
 * Used for Tables, must be used with TableRow and TableRowItem
 */
exports.Table = (0, react_1.forwardRef)((props, ref) => {
    const { flexStyle, maxHeight = '20rem', style } = props, rest = __rest(props, ["flexStyle", "maxHeight", "style"]);
    return ((0, jsx_runtime_1.jsx)(StyledTable_1.StyledTable, Object.assign({ "$responsive": flexStyle, style: Object.assign(Object.assign({}, style), { maxHeight }), ref: ref }, rest)));
});
exports.default = exports.Table;
