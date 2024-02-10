"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const StyledTitle_1 = require("./styles/StyledTitle");
/**
 * Title
 * @component
 * @description
 * Main Component for titles
 * `Title` is a styled component that provides a visual title style.
 * and has default styling for the title content.
 *
 * @example
 * ```jsx
 * // Default closed title
 * <Title>This is an title message!</Title>
 * ```
 *
 * @example
 * ```jsx
 * // Opened title using the "open" class
 * <Title className="open">This is an opened title message!</Title>
 * ```
 *
 * @example
 * ```jsx
 * // Alert with title and close button
 * <Title className="open clos">
 *   <strong>Title</strong>
 *   This is an title message with a title and close button!
 *   <button className="close-title">&times;</button>
 * </Title>
 * ```
 *
 * @styled-components
 */
function Title(props) {
    const { as = "h1", children, className, flexStyle } = props;
    return ((0, jsx_runtime_1.jsx)(StyledTitle_1.StyledTitle, { as: as, className: className, "$responsive": flexStyle, children: children }));
}
exports.Title = Title;
exports.default = Title;
