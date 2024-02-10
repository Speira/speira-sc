"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkeletonLoader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/**
 * SkeletonLoader
 * @description
 * Default component inline loader
 *
 */
function SkeletonLoader(props) {
    // const { className, style, count, flexStyle } = props;
    // const width = document.body.clientWidth;
    //
    // const cssResult = !flexStyle ? {} : flexStyle;
    // const { xs, sm, md, lg, xl, ...defaultCSS } = cssResult;
    //
    // const customStyle = toStyle(cssResult, width);
    //
    // return (
    //   <Skeleton
    //     className={className}
    //     count={count}
    //     style={{ ...style, ...defaultCSS, ...customStyle }}
    //   />
    // );
    return (0, jsx_runtime_1.jsx)("div", { ...props });
}
exports.SkeletonLoader = SkeletonLoader;
exports.default = SkeletonLoader;
