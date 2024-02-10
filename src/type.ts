import { CSSProperties } from 'react';
import { Interpolation } from 'styled-components/dist/types';

export enum ThemeKeys {
  defaultTheme = 'defaultTheme',
}

export type ScreenTarget = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ScreenTargetCSS = Partial<Record<ScreenTarget, CSSProperties>>;

export type ResponsiveStyle = CSSProperties & ScreenTargetCSS;

export type InterpoledCSS = Partial<Interpolation<CSSProperties>>;

export interface ThemeInterface {
  colors: {
    // Shades
    dark: string;
    muted: string;
    dusty: string;
    light: string;

    // Colors
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;

    // State colors
    info: string;
    success: string;
    warning: string;
    danger: string;

    // Soft colors
    primary_soft: string;
    secondary_soft: string;
    tertiary_soft: string;
    quaternary_soft: string;

    info_soft: string;
    success_soft: string;
    warning_soft: string;
    danger_soft: string;
  };
  boxShadow: {
    low: string;
    hight: string;
  };
  switchToDefault: () => void;
  setNextTheme: (nextPartialTheme: Partial<ThemeInterface>) => void;
  radius: {
    low: string;
    hight: string;
  };
}

export type ThemeVariant = 'soft' | 'hollow';
export type ThemeLevels = 'primary' | 'secondary' | 'tertiary' | 'quaternary';
