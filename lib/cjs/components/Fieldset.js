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
exports.Fieldset = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useStylingProps_1 = __importDefault(require("../hooks/useStylingProps"));
const string_utils_1 = require("../utils/string.utils");
const StyledFieldset_1 = require("./styles/StyledFieldset");
/**
 * Fieldset
 * @component
 */
function Fieldset(props) {
    const { children, flexStyle, id, legend, position = 'left', direction = 'column' } = props, rest = __rest(props, ["children", "flexStyle", "id", "legend", "position", "direction"]);
    const { className, style } = (0, useStylingProps_1.default)(props);
    const spPosition = `sp-${position}`;
    const spDirection = `sp-${direction}`;
    const propsClass = (0, string_utils_1.enClassname)([spPosition, spDirection], className);
    return ((0, jsx_runtime_1.jsxs)(StyledFieldset_1.StyledFieldset, Object.assign({}, rest, { id: id, style: style, className: propsClass, "$responsive": flexStyle, children: [legend && (0, jsx_runtime_1.jsx)("legend", { className: "sp-legend", children: legend }), (0, jsx_runtime_1.jsx)("div", { className: "sp-fieldset-content", children: children })] })));
}
exports.Fieldset = Fieldset;
exports.default = Fieldset;
