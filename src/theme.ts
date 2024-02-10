import { mergeDeepPartial } from './utils/object.utils';
import { checkIsKeyof } from './utils/typeguard.utils';
import { ThemeInterface, ThemeKeys } from './type';

/**
 * getDefaultTheme
 * @description
 * The default style theme, implement DefaultTheme
 * @see ./styled.d.ts for the interface definition
 */
export function getDefaultTheme(): ThemeInterface {
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
    switchToDefault: () => {},
    setNextTheme: () => {},
    boxShadow: {
      low: '0px 0px 0px 1px',
      hight: '0px 0px 4px 0px',
    },
  };
}

/**
 * initThene
 * @description
 * Launch the theme, search for a saved theme first.
 */
export default function initTheme(nextKey?: ThemeKeys): ThemeInterface {
  const themeStorageID = 'themeStorageID';
  const themes = {
    [ThemeKeys.defaultTheme]: getDefaultTheme,
    // Add new theme here
  };
  if (nextKey) {
    const ChoosenTheme = themes[nextKey];
    if (typeof window !== 'undefined') {
      localStorage.setItem(themeStorageID, nextKey);
    }
    return ChoosenTheme();
  }
  const loadedThemeKey =
    typeof window !== 'undefined' ? localStorage.getItem(themeStorageID) : null;
  if (!loadedThemeKey || !checkIsKeyof(themes, loadedThemeKey)) {
    return getDefaultTheme();
  }

  const ChoosenTheme = themes[loadedThemeKey];
  return ChoosenTheme();
}

/**
 * createTheme
 * @description
 * Theme Factory
 */
export function createTheme(
  themeData: Partial<ThemeInterface>,
): ThemeInterface {
  const baseTheme = getDefaultTheme();
  const nextTheme = mergeDeepPartial<ThemeInterface>(baseTheme, themeData);
  return nextTheme;
}
