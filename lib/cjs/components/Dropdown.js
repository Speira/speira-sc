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
exports.Dropdown = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useStylingProps_1 = __importDefault(require("../hooks/useStylingProps"));
const string_utils_1 = require("../utils/string.utils");
const StyledButton_1 = require("./styles/StyledButton");
const StyledDropdown_1 = require("./styles/StyledDropdown");
/**
 * Dropdown
 * @component
 * @description
 * This is a render function to display customable sub items
 */
function Dropdown(props) {
    const { children, clickable, flexStyle, label } = props, rest = __rest(props, ["children", "clickable", "flexStyle", "label"]);
    const { className, style } = (0, useStylingProps_1.default)(props);
    const [isShown, setIsShown] = (0, react_1.useState)(false);
    const isDShown = (0, react_1.useDeferredValue)(isShown);
    const handleBtnClick = (e) => {
        e.preventDefault();
        if (clickable)
            setIsShown(!isShown);
    };
    const handleMouseHover = () => !clickable && setIsShown(true);
    const handleMouseOut = () => !clickable && setIsShown(false);
    const handleBlur = () => clickable && setIsShown(false);
    const classed = (0, string_utils_1.mergeClassnames)('sp-dropdown', className);
    return ((0, jsx_runtime_1.jsxs)(StyledDropdown_1.StyledDropdown, Object.assign({}, rest, { className: classed, style: style, onBlur: handleBlur, onMouseOver: handleMouseHover, onMouseLeave: handleMouseOut, "$responsive": flexStyle, children: [(0, jsx_runtime_1.jsxs)(StyledButton_1.StyledButton, { className: "sp-dropbtn", onClick: handleBtnClick, children: [(0, jsx_runtime_1.jsx)("span", { style: {
                            marginRight: '4px',
                            transform: `rotate(${isDShown ? '90' : '0'}deg)`,
                            transition: 'transform, 0.2s',
                        }, children: "\u27A4" }), (0, jsx_runtime_1.jsx)("span", { children: label })] }), (0, jsx_runtime_1.jsx)("div", { className: "sp-dropdown-content", style: {
                    transform: `scale(1, ${isDShown ? '1' : '0'})`,
                    opacity: isDShown ? '1' : '0',
                }, children: children((p) => ((0, jsx_runtime_1.jsx)("a", Object.assign({ className: "sp-options" }, p)))) })] })));
}
exports.Dropdown = Dropdown;
exports.default = Dropdown;
