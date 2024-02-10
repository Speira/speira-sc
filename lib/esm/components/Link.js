"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useStylingProps_1 = __importDefault(require("../hooks/useStylingProps"));
const StyledLink_1 = require("./styles/StyledLink");
/**
 * Link
 * @component
 * @description
 */
function Link(props) {
    const { as, flexStyle, href, children, to, ...rest } = props;
    const { className, style } = (0, useStylingProps_1.default)(props);
    return ((0, jsx_runtime_1.jsx)(StyledLink_1.StyledLink, { ...rest, as: as, className: className, href: href || to || '#', style: style, to: href || '#', "$responsive": flexStyle, children: children }));
}
exports.Link = Link;
exports.default = Link;
