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
exports.DragAndDrop = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useStylingProps_1 = __importDefault(require("../hooks/useStylingProps"));
const func_utils_1 = require("../utils/func.utils");
const StyledDragAndDrop_1 = require("./styles/StyledDragAndDrop");
/**
 * DragAndDrop
 * @component
 */
function DragAndDrop(props) {
    const { testId, id, children, clickable, flexStyle, onDragEnd = () => null, onDragOver = () => null, onDragStart = () => null, onDrop = () => null, placeholder } = props, rest = __rest(props, ["testId", "id", "children", "clickable", "flexStyle", "onDragEnd", "onDragOver", "onDragStart", "onDrop", "placeholder"]);
    const { className, style } = (0, useStylingProps_1.default)(props);
    const uploadRef = (0, react_1.useRef)(null);
    const [isDragging, toggleIsDragging] = (0, react_1.useState)(false);
    const syncClick = () => {
        if (clickable && uploadRef.current)
            uploadRef.current.click();
    };
    const handleAction = (e, callback, onGoing) => {
        e.preventDefault();
        e.stopPropagation();
        if (!onGoing || onGoing !== isDragging) {
            toggleIsDragging(onGoing);
            const data = 'dataTransfer' in e ? e.dataTransfer : e.target;
            const { files } = data;
            (0, func_utils_1.ensafe)(callback)(files || undefined);
        }
    };
    const outline = isDragging
        ? '2px solid var(--sp-color-primary)'
        : 'unset';
    return ((0, jsx_runtime_1.jsxs)(StyledDragAndDrop_1.StyledDragAndDrop, Object.assign({}, rest, { id: id, "$responsive": flexStyle, className: className, "data-testId": testId, draggable: "true", onClick: syncClick, onDragEnd: (e) => handleAction(e, onDragEnd, false), onDragOver: (e) => handleAction(e, onDragOver, true), onDragStart: onDragStart, onDrop: (e) => handleAction(e, onDrop, false), style: Object.assign(Object.assign({}, style), { outline }), children: [(0, jsx_runtime_1.jsxs)("span", { className: "sp-placeholder", children: [(0, jsx_runtime_1.jsx)("span", { style: { marginRight: '4px' }, children: "\u2725" }), placeholder] }), children, (0, jsx_runtime_1.jsx)("input", { className: "sp-upload", ref: uploadRef, type: "file", onChange: (e) => handleAction(e, onDrop, false) })] })));
}
exports.DragAndDrop = DragAndDrop;
exports.default = DragAndDrop;
