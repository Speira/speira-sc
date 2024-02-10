"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flex = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useStylingProps_1 = __importDefault(require("../hooks/useStylingProps"));
const Styled_1 = require("./styles/Styled");
/**
 * Flex
 * @component
 * @description
 * Simple and fast implementation of a Flexible component
 * (NB: "flexStyle" is a mobile first improved styling)
 * @example
 *   <Flex
 *      as="section"
 *      flexStyle={{
 *        fontSize: "2em",
 *        md: { width: "50px" }, // for medium screens (and plus)
 *      }
 *   />
 */
function Flex(props, ref) {
    const { as, children, flexStyle, id, href, testId, ...rest } = props;
    const { className, style } = (0, useStylingProps_1.default)(props);
    return ((0, jsx_runtime_1.jsx)(Styled_1.Styled, { ...rest, as: as, "$responsive": flexStyle, className: className, "data-testid": testId, href: href, id: id, ref: ref, style: style, children: !href ? (children) : ((0, jsx_runtime_1.jsx)(Styled_1.Styled, { as: "a", href: href, children: children })) }));
}
exports.Flex = Flex;
exports.default = (0, react_1.forwardRef)(Flex);
