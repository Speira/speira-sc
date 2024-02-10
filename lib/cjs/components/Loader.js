"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const StyledLoader_1 = require("./styles/StyledLoader");
/**
 * Loader
 * @component
 * @description
 * The main loading component
 *
 */
function Loader(props) {
    const { className, flexStyle, id, style } = props;
    return ((0, jsx_runtime_1.jsx)(StyledLoader_1.StyledLoader, { id: id, className: className, style: style, "$responsive": flexStyle, children: (0, jsx_runtime_1.jsx)("div", { className: "sp-loader" }) }));
}
exports.Loader = Loader;
exports.default = Loader;
