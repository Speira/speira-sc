"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeClassnames = exports.getUnboxedClass = exports.getSizeClass = exports.getShapeClass = exports.getColorClass = exports.enClassname = void 0;
/**
 * enClassname
 * @description
 * Adapt props to be placed in the className of an Component
 */
function enClassname(props, className) {
    const base = className || '';
    return [base]
        .concat(props.map((value) => (value ? `${value}` : '')))
        .join(' ')
        .trim();
}
exports.enClassname = enClassname;
const getColorClass = ({ color, spreading }) => {
    if (color && spreading && spreading !== 'plain')
        return `sp-${spreading}-${color}`;
    if (color)
        return `sp-${color}`;
    return '';
};
exports.getColorClass = getColorClass;
const getShapeClass = (shape) => shape && `sp-${shape}`;
exports.getShapeClass = getShapeClass;
const getSizeClass = (size) => size && `sp-${size}`;
exports.getSizeClass = getSizeClass;
const getUnboxedClass = (unboxed) => unboxed ? `sp-unboxed` : undefined;
exports.getUnboxedClass = getUnboxedClass;
function mergeClassnames(...classnames) {
    return classnames.filter(Boolean).join(' ');
}
exports.mergeClassnames = mergeClassnames;
