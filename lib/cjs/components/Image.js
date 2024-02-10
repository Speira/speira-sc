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
    const { alt = 'Image', className, height } = props, rest = __rest(props, ["alt", "className", "height"]);
    const { rounded = false, src, style, width } = rest;
    const stringProps = (0, object_utils_1.keysToString)({ 'sp-rounded': rounded });
    const propsClass = (0, string_utils_1.mergeClassnames)(stringProps, className);
    return ((0, jsx_runtime_1.jsx)(Styled_1.Styled, { as: "img", alt: alt, className: propsClass, src: src, style: style, width: width, height: height }));
}
exports.Image = Image;
exports.default = Image;
