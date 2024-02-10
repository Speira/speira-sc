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
exports.toStyle = exports.toStylesheet = exports.media = exports.targetWidth = void 0;
exports.targetWidth = {
    xs: 480,
    sm: 600,
    md: 768,
    lg: 1024,
    xl: 1200,
};
/**
 * media
 * @description
 * The main media sizes
 * @example
 * "@media ${media.sm}{}"
 */
exports.media = {
    xs: `@media (min-width: ${exports.targetWidth.xs}px)`,
    sm: `@media (min-width: ${exports.targetWidth.sm}px)`,
    md: `@media (min-width: ${exports.targetWidth.md}px)`,
    lg: `@media (min-width: ${exports.targetWidth.lg}px)`,
    xl: `@media (min-width: ${exports.targetWidth.xl}px)`,
};
/**
 * toStylesheet
 * @description
 * Extract the media queries from the $responsiveStyle props and turn them into CSS mediasQueries object
 * @example
 * {xs: {display: 'block'}} => {"@media (min-width: 480px)": {display: 'block'}}
 */
function toStylesheet(RStyle) {
    const _a = RStyle || {}, { xs, sm, md, lg, xl } = _a, defaultCSS = __rest(_a, ["xs", "sm", "md", "lg", "xl"]);
    const screenTargetCSS = { xs, sm, md, lg, xl };
    const mediasQueryCSS = {};
    for (const [screen, style] of Object.entries(screenTargetCSS)) {
        if (style)
            mediasQueryCSS[exports.media[screen]] = style;
    }
    return Object.assign(Object.assign({}, defaultCSS), mediasQueryCSS);
}
exports.toStylesheet = toStylesheet;
/**
 * toStyle
 * @description
 * Turns the responsiveStyle to an inlineStyle based on the current viewport width
 *
 */
function toStyle(RStyle, width) {
    const { xs, sm, md, lg, xl } = RStyle;
    const screenTargetCSS = { xs, sm, md, lg, xl };
    let nextStyle = {};
    for (const [screen, style] of Object.entries(screenTargetCSS)) {
        if (style && width >= exports.targetWidth[screen])
            nextStyle = Object.assign(Object.assign({}, nextStyle), style);
    }
    return nextStyle;
}
exports.toStyle = toStyle;
