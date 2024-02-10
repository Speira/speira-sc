import { CSSProperties } from "react";
import { Interpolation } from "styled-components/dist/types";
export declare enum ThemeKeys {
    defaultTheme = "defaultTheme"
}
export type ScreenTarget = "xs" | "sm" | "md" | "lg" | "xl";
export type ScreenTargetCSS = Partial<Record<ScreenTarget, CSSProperties>>;
export type ResponsiveStyle = CSSProperties & ScreenTargetCSS;
export type InterpoledCSS = Partial<Interpolation<CSSProperties>>;
export interface ThemeInterface {
    colors: {
        dark: string;
        muted: string;
        dusty: string;
        light: string;
        primary: string;
        secondary: string;
        tertiary: string;
        quaternary: string;
        info: string;
        success: string;
        warning: string;
        danger: string;
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
    radius: {
        low: string;
        hight: string;
    };
}
export type ThemeVariant = "soft" | "hollow";
export type ThemeLevels = "primary" | "secondary" | "tertiary" | "quaternary";
//# sourceMappingURL=type.d.ts.map