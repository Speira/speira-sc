import { CSSProperties } from 'react';

import {
  InterpoledCSS,
  ResponsiveStyle,
  ScreenTarget,
  ScreenTargetCSS,
} from '../type';

import { ValueOf } from './type.utils';

export const targetWidth: Record<ScreenTarget, number> = <const>{
  xs: 480,
  sm: 600,
  md: 768,
  lg: 1024,
  xl: 1200,
};

/**
 * @description
 * The main media sizes
 * @example
 * "@media ${media.sm}{}"
 */
export const media = <const>{
  xs: `@media (min-width: ${targetWidth.xs}px)`,
  sm: `@media (min-width: ${targetWidth.sm}px)`,
  md: `@media (min-width: ${targetWidth.md}px)`,
  lg: `@media (min-width: ${targetWidth.lg}px)`,
  xl: `@media (min-width: ${targetWidth.xl}px)`,
};

type MediaQueryCSS = Partial<Record<ValueOf<typeof media>, CSSProperties>>;

/**
 * @description
 * Extract the media queries from the $responsiveStyle props and
 * turn them into CSS mediasQueries object
 * @example
 * {xs: {display: 'block'}} => {"@media (min-width: 480px)": {display: 'block'}}
 */
export function toStylesheet(RStyle?: ResponsiveStyle): InterpoledCSS {
  const { xs, sm, md, lg, xl, ...defaultCSS } = RStyle || {};
  const screenTargetCSS: ScreenTargetCSS = <const>{ xs, sm, md, lg, xl };
  const mediasQueryCSS: MediaQueryCSS = {};

  for (const [screen, style] of Object.entries(screenTargetCSS)) {
    if (style) mediasQueryCSS[media[screen as ScreenTarget]] = style;
  }

  return { ...defaultCSS, ...mediasQueryCSS };
}

/**
 * @description
 * Turns the responsiveStyle to an inlineStyle based on the current viewport width
 */
export function toStyle(RStyle: ResponsiveStyle, width: number): CSSProperties {
  const { xs, sm, md, lg, xl } = RStyle;
  const screenTargetCSS: ScreenTargetCSS = <const>{ xs, sm, md, lg, xl };
  let nextStyle: CSSProperties = {};

  for (const [screen, style] of Object.entries(screenTargetCSS)) {
    if (style && width >= targetWidth[screen as ScreenTarget])
      nextStyle = { ...nextStyle, ...style };
  }

  return nextStyle;
}
