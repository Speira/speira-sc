"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTheme = exports.getDefaultTheme = void 0;
const object_utils_1 = require("./utils/object.utils");
const typeguard_utils_1 = require("./utils/typeguard.utils");
const type_1 = require("./type");
/**
 * getDefaultTheme
 * @description
 * The default style theme, implement DefaultTheme
 * @see ./styled.d.ts for the interface definition
 */
function getDefaultTheme() {
    return {
        colors: {
            dark: '#082537',
            muted: '#96989f',
            dusty: '#ededed',
            light: '#fafafa',
            primary: '#042c7e',
            primary_soft: '#4b87d8',
            secondary: '#96E0F7',
            secondary_soft: '#7529c7',
            tertiary: '#96E0F7',
            tertiary_soft: '#7529c7',
            quaternary: '#96E0F7',
            quaternary_soft: '#7529c7',
            info: '#035397',
            info_soft: '#ecf6ff',
            success: '#1C7947',
            success_soft: '#f0fff7',
            warning: '#DD9A35',
            warning_soft: '#fef6d2',
            danger: '#af1725',
            danger_soft: '#fcdedf',
        },
        radius: {
            low: '4px',
            hight: '8rem',
        },
        boxShadow: {
            low: '0px 0px 0px 1px',
            hight: '0px 0px 3px -1px',
        },
    };
}
exports.getDefaultTheme = getDefaultTheme;
/**
 * initThene
 * @description
 * Launch the theme, search for a saved theme first.
 */
function initTheme(nextKey) {
    const themeStorageID = 'themeStorageID';
    const themes = {
        [type_1.ThemeKeys.defaultTheme]: getDefaultTheme,
        // Add new theme here
    };
    if (nextKey) {
        const ChoosenTheme = themes[nextKey];
        if (typeof window !== 'undefined')
            localStorage.setItem(themeStorageID, nextKey);
        return ChoosenTheme();
    }
    const loadedThemeKey = typeof window !== 'undefined' ? localStorage.getItem(themeStorageID) : null;
    if (!loadedThemeKey || !(0, typeguard_utils_1.checkIsKeyof)(themes, loadedThemeKey))
        return getDefaultTheme();
    const ChoosenTheme = themes[loadedThemeKey];
    return ChoosenTheme();
}
exports.default = initTheme;
/**
 * createTheme
 * @description
 * Theme Factory
 */
function createTheme(themeData) {
    const baseTheme = getDefaultTheme();
    const nextTheme = (0, object_utils_1.mergeDeepPartial)(baseTheme, themeData);
    return nextTheme;
}
exports.createTheme = createTheme;
