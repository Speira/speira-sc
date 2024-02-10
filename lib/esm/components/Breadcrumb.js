"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Breadcrumb = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const StyledBreadcrumb_1 = require("./styles/StyledBreadcrumb");
/**
 * Breadcrumb
 * @component
 */
function Breadcrumb(props) {
    const { flexStyle, path } = props;
    return ((0, jsx_runtime_1.jsx)(StyledBreadcrumb_1.StyledBreadcrumb, { "$responsive": flexStyle, children: path &&
            path.map((item, index) => ((0, jsx_runtime_1.jsx)(StyledBreadcrumb_1.StyledBreadItem, { children: index === path.length - 1 ? ((0, jsx_runtime_1.jsx)("span", { className: "sp-current", children: item.label })) : ((0, jsx_runtime_1.jsx)("a", { href: item.url, className: "sp-item", children: item.label })) }, item.label))) }));
}
exports.Breadcrumb = Breadcrumb;
exports.default = Breadcrumb;
