"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableRow = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const string_utils_1 = require("../utils/string.utils");
const StyledTableRow_1 = require("./styles/StyledTableRow");
/**
 * TableRow
 * @component
 * @description
 * A row in a Table
 */
function TableRow(props) {
    const { children, className, flexStyle, isHead = false, id, isScrolling = false, size = 'md', style: propStyle, ...rest } = props;
    const classname = (0, string_utils_1.mergeClassnames)(className, `sp-${size}`);
    const style = (0, react_1.useMemo)(() => isScrolling && isHead
        ? {
            backgroundColor: 'var(--sp-bg-color)',
            boxShadow: 'var(--sp-box-shadow-hight) var(--sp-color-dark)',
            cursor: 'default',
            opacity: '0.95',
            position: 'sticky',
            top: '0',
            ...propStyle,
        }
        : propStyle, [isScrolling, isHead, propStyle]);
    return ((0, jsx_runtime_1.jsx)(StyledTableRow_1.StyledTableRow, { id: id, className: classname, style: style, "$responsive": flexStyle, ...rest, children: children }));
}
exports.TableRow = TableRow;
exports.default = TableRow;
