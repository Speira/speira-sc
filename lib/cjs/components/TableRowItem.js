"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableRowItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const string_utils_1 = require("../utils/string.utils");
const StyledTableRowItem_1 = require("./styles/StyledTableRowItem");
/**
 * TableRowItem
 * @component
 * @description
 * A table case
 */
function TableRowItem(props) {
    const { center, children, className, clickable, flexStyle, head, id, size = 'md', } = props;
    const classname = (0, string_utils_1.mergeClassnames)(className, head ? `sp-head` : undefined, center ? `sp-center` : undefined, clickable ? 'sp-clickabke' : undefined, `sp-${size}`);
    return ((0, jsx_runtime_1.jsx)(StyledTableRowItem_1.StyledTableRowItem, { id: id, className: classname, "$responsive": flexStyle, children: children }));
}
exports.TableRowItem = TableRowItem;
exports.default = TableRowItem;
