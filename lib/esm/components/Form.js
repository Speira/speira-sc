"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useStylingProps_1 = __importDefault(require("../hooks/useStylingProps"));
const StyledForm_1 = require("./styles/StyledForm");
/**
 * Form
 * @component
 */
function Form(props) {
    const { children, flexStyle, id, size = 'md', ...rest } = props;
    const { className, style } = (0, useStylingProps_1.default)({ ...props, size });
    return ((0, jsx_runtime_1.jsx)(StyledForm_1.StyledForm, { ...rest, id: id, className: className, style: style, "$responsive": flexStyle, children: children }));
}
exports.Form = Form;
exports.default = Form;
