"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slide = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Styled_1 = require("./styles/Styled");
const StyledSlide_1 = require("./styles/StyledSlide");
/**
 * Slide
 * @component
 * @description
 * Component to display elements using a slide animation
 */
function Slide(props) {
    const ref = (0, react_1.useRef)(null);
    const { className, children, duration, flexStyle, ...rest } = props;
    const { hideAfter, range = 5 } = rest;
    const [index, setIndex] = (0, react_1.useState)(0);
    const [width, setWidth] = (0, react_1.useState)("10em");
    const count = react_1.Children.count(children);
    const getRef = (ind) => (ind === 0 ? { ref } : {});
    const smaller = (className || "").concat(!!hideAfter ? ` sp-hide-${hideAfter}` : "");
    const larger = (className || "").concat(!!hideAfter ? ` sp-show-${hideAfter}` : "");
    (0, react_1.useEffect)(() => {
        if (ref.current) {
            setWidth(`${ref.current.clientWidth}px`);
        }
    }, []); // eslint-disabled-line
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [!!hideAfter && (0, jsx_runtime_1.jsx)(Styled_1.Styled, { className: smaller, children: children }), (0, jsx_runtime_1.jsxs)(StyledSlide_1.StyledSlide, { className: larger, "$responsive": flexStyle, "$range": range, "$width": width, "$duration": duration, style: {
                    width: `calc(${width} * ${range})`,
                    visibility: ref.current ? "visible" : "hidden",
                }, children: [(0, jsx_runtime_1.jsxs)(StyledSlide_1.StyledSlideContent, { style: {
                            right: `calc(${index} * ${width})`,
                        }, children: [react_1.Children.map(children, (child, ind) => ((0, jsx_runtime_1.jsx)("div", { className: "sp-item", ...getRef(ind), children: child }))), react_1.Children.map(children, (child, ind) => ((0, jsx_runtime_1.jsx)("div", { className: "sp-item", ...getRef(ind), children: child })))] }), (0, jsx_runtime_1.jsx)("button", { type: "button", className: "sp-prev", disabled: index === 0, onClick: () => setIndex(index - 1), children: "<" }), (0, jsx_runtime_1.jsx)("button", { type: "button", className: "sp-next", disabled: index === count - range, onClick: () => setIndex(index + 1), children: ">" })] })] }));
}
exports.Slide = Slide;
exports.default = Slide;
