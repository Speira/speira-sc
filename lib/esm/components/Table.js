"use strict";
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
    const { flexStyle, maxHeight = '20rem', style, ...rest } = props;
    return ((0, jsx_runtime_1.jsx)(StyledTable_1.StyledTable, { "$responsive": flexStyle, style: { ...style, maxHeight }, ref: ref, ...rest }));
});
exports.default = exports.Table;
