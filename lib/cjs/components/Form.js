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
    const { children, flexStyle, id, size = 'md' } = props, rest = __rest(props, ["children", "flexStyle", "id", "size"]);
    const { className, style } = (0, useStylingProps_1.default)(Object.assign(Object.assign({}, props), { size }));
    return ((0, jsx_runtime_1.jsx)(StyledForm_1.StyledForm, Object.assign({}, rest, { id: id, className: className, style: style, "$responsive": flexStyle, children: children })));
}
exports.Form = Form;
exports.default = Form;
