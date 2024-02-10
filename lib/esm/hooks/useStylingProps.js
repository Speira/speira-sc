"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const styled_components_1 = require("styled-components");
const components_utils_1 = require("../utils/components.utils");
const string_utils_1 = require("../utils/string.utils");
/**
 * @description
 * Provide augmented className and style according to props
 */
function useStylingProps(params) {
    const { className, color, shape, size, status, style, unboxed, spreading } = params;
    const theme = (0, styled_components_1.useTheme)();
    const colorClass = (0, string_utils_1.getColorClass)({ color, spreading });
    const shapeClass = (0, string_utils_1.getShapeClass)(shape);
    const sizeClass = (0, string_utils_1.getSizeClass)(size);
    const unboxedClass = (0, string_utils_1.getUnboxedClass)(unboxed);
    const augmentedSyle = (0, react_1.useMemo)(() => ({
        ...style,
        ...(0, components_utils_1.injectStatusStyle)({ status, theme, spreading }),
    }), [style, status, spreading, theme]);
    const classname = (0, react_1.useMemo)(() => (0, string_utils_1.mergeClassnames)(className, sizeClass, shapeClass, colorClass, unboxedClass), [className, sizeClass, shapeClass, colorClass, unboxedClass]);
    return { className: classname, style: augmentedSyle };
}
exports.default = useStylingProps;
