"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = require("styled-components");
const GlobalStyle_1 = __importDefault(require("./GlobalStyle"));
const theme_1 = __importDefault(require("./theme"));
require("normalize.css");
/**
 * StyledProvider
 * @context
 * @description
 * The Theme Manager
 */
function StyledProvider(props) {
    const { children } = props;
    const initialTheme = (0, theme_1.default)();
    const [theme, setTheme] = (0, react_1.useState)(initialTheme);
    const value = (0, react_1.useMemo)(() => ({
        colors: theme.colors,
        radius: theme.radius,
        boxShadow: theme.boxShadow,
        switchToDefault() {
            const nextTheme = (0, theme_1.default)();
            setTheme(nextTheme);
        },
    }), [theme]);
    return ((0, jsx_runtime_1.jsxs)(styled_components_1.ThemeProvider, { theme: value, children: [(0, jsx_runtime_1.jsx)(GlobalStyle_1.default, {}), children] }));
}
exports.StyledProvider = StyledProvider;
exports.default = StyledProvider;
