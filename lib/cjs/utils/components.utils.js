"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectStatusStyle = void 0;
/**
 * @description
 * Generate generic inline style based on the status to be used in the style attribute
 */
function injectStatusStyle(param) {
    const { status, spreading, theme } = param;
    if (!status)
        return undefined;
    const style = {};
    if (spreading === 'hollow') {
        style['--sp-bg-color'] = 'transparent';
        style['--sp-font-color'] = theme.colors[status];
    }
    else if (spreading === 'soft') {
        style['--sp-bg-color'] = theme.colors[`${status}_soft`];
        style['--sp-font-color'] = theme.colors[status];
    }
    else if (spreading === 'hollow-soft') {
        style['--sp-bg-color'] = 'transparent';
        style['--sp-font-color'] = theme.colors[`${status}_soft`];
    }
    else {
        style['--sp-bg-color'] = theme.colors[status];
        style['--sp-font-color'] = theme.colors.light;
    }
    return style;
}
exports.injectStatusStyle = injectStatusStyle;
