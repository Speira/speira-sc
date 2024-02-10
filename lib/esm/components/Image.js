"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const object_utils_1 = require("../utils/object.utils");
const string_utils_1 = require("../utils/string.utils");
const Styled_1 = require("./styles/Styled");
/**
 * Image
 * @component
 * @description
 * It only uses NextImage component
 */
function Image(props) {
    const { alt = 'Image', className, height, ...rest } = props;
    const { rounded = false, src, style, width } = rest;
    const stringProps = (0, object_utils_1.keysToString)({ 'sp-rounded': rounded });
    const propsClass = (0, string_utils_1.mergeClassnames)(stringProps, className);
    return ((0, jsx_runtime_1.jsx)(Styled_1.Styled, { as: "img", alt: alt, className: propsClass, src: src, style: style, width: width, height: height }));
}
exports.Image = Image;
exports.default = Image;
