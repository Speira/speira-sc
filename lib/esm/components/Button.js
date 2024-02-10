"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useStylingProps_1 = __importDefault(require("../hooks/useStylingProps"));
const func_utils_1 = require("../utils/func.utils");
const StyledButton_1 = require("./styles/StyledButton");
/**
 *
 *  #### **Theme color**
 *  The button color will focus on the `status` prop if present,
 *  if not it will focus on the `className` prop (like "sp-primary")
 *
 */
function Button(props) {
    const { flexStyle, href, label = '', onClick = () => { }, testId, ...rest } = props;
    const { className, style } = (0, useStylingProps_1.default)(props);
    const handleClick = () => {
        (0, func_utils_1.ensafe)(onClick)();
    };
    return ((0, jsx_runtime_1.jsxs)(StyledButton_1.StyledButton, { ...rest, "$responsive": flexStyle, style: style, as: href ? 'a' : undefined, className: className, "data-testid": testId, href: href, onClick: href ? undefined : handleClick, type: "button", children: [!!label && (0, jsx_runtime_1.jsx)("span", { children: label }), props.children] }));
}
exports.Button = Button;
exports.default = Button;
