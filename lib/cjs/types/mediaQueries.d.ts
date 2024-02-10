import { CSSProperties } from "react";
import { InterpoledCSS, ResponsiveStyle, ScreenTarget } from "./type";
export declare const targetWidth: Record<ScreenTarget, number>;
/**
 * media
 * @description
 * The main media sizes
 * @example
 * "@media ${media.sm}{}"
 */
export declare const media: {
    readonly xs: `@media (min-width: ${number}px)`;
    readonly sm: `@media (min-width: ${number}px)`;
    readonly md: `@media (min-width: ${number}px)`;
    readonly lg: `@media (min-width: ${number}px)`;
    readonly xl: `@media (min-width: ${number}px)`;
};
/**
 * toStylesheet
 * @description
 * Extract the media queries from the $responsiveStyle props and turn them into CSS mediasQueries object
 * @example
 * {xs: {display: 'block'}} => {"@media (min-width: 480px)": {display: 'block'}}
 */
export declare function toStylesheet(RStyle?: ResponsiveStyle): InterpoledCSS;
/**
 * toStyle
 * @description
 * Turns the responsiveStyle to an inlineStyle based on the current viewport width
 *
 */
export declare function toStyle(RStyle: ResponsiveStyle, width: number): CSSProperties;
//# sourceMappingURL=mediaQueries.d.ts.map