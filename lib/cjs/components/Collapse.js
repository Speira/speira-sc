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
exports.Collapse = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useStylingProps_1 = __importDefault(require("../hooks/useStylingProps"));
const StyledCollapse_1 = require("./styles/StyledCollapse");
/**
 * Collapse
 * @components
 * @description
 * Collapse content to preserve space
 */
function Collapse(props) {
    var _a;
    const { children, flexStyle, label, place = 'left' } = props, rest = __rest(props, ["children", "flexStyle", "label", "place"]);
    const { className, style } = (0, useStylingProps_1.default)(props);
    const [isCollapsed, setCollapseState] = (0, react_1.useState)(false);
    const dCollapsed = (0, react_1.useDeferredValue)(isCollapsed);
    const toggleCollapse = () => setCollapseState(!isCollapsed);
    const ref = (0, react_1.useRef)(null);
    return ((0, jsx_runtime_1.jsxs)(StyledCollapse_1.StyledCollapse, Object.assign({}, rest, { style: style, className: className, "$responsive": flexStyle, children: [(0, jsx_runtime_1.jsxs)("button", { className: `sp-btn-collapse sp-${place}`, type: "button", onClick: () => toggleCollapse(), children: [(0, jsx_runtime_1.jsx)("span", { children: label }), (0, jsx_runtime_1.jsx)("span", { style: {
                            transform: `rotate(${dCollapsed ? '-90' : '90'}deg)`,
                            transition: 'transform, 0.3s ease-out',
                        }, children: "\u27A4" })] }), (0, jsx_runtime_1.jsx)("div", { ref: ref, className: "sp-content", style: {
                    height: dCollapsed ? `${((_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.clientHeight) || 100}px` : '0px',
                    padding: dCollapsed ? '1px 8px' : '0px 8px',
                }, children: children })] })));
}
exports.Collapse = Collapse;
exports.default = Collapse;
