import { ThemeInterface, ThemeKeys } from './type';
/**
 * getDefaultTheme
 * @description
 * The default style theme, implement DefaultTheme
 * @see ./styled.d.ts for the interface definition
 */
export declare function getDefaultTheme(): ThemeInterface;
/**
 * initThene
 * @description
 * Launch the theme, search for a saved theme first.
 */
export default function initTheme(nextKey?: ThemeKeys): ThemeInterface;
/**
 * createTheme
 * @description
 * Theme Factory
 */
export declare function createTheme(themeData: Partial<ThemeInterface>): ThemeInterface;
//# sourceMappingURL=theme.d.ts.map