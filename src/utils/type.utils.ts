import { CSSProperties, FunctionComponent, ReactNode } from 'react';

import { ResponsiveStyle } from '../type';

export type Primitive = string | number | boolean;
export type AnyObject<T = unknown> = { [key: string]: T };
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type ValueOf<T> = T[keyof T];
export type FunctionType<T = unknown, P = unknown> = (...argv: T[]) => P;
export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export type DefaultProps = {
  children?: ReactNode;
  className?: string;
  /**
   * Adaptive design style: Enhance CSSProperties with media breakpoints (mobile first philosophy):
   *
   * ```ts
   * {
   *    ...CSSProperties,
   *    xs?: CSSProperties,
   *    sm?: CSSProperties,
   *    md?: CSSProperties,
   *    lg?: CSSProperties,
   *    xl?: CSSProperties
   *}
   * ```
   * */
  flexStyle?: ResponsiveStyle;
  id?: string;
  /** CSSProperties injected to DOM directly, for styles that often updates */
  style?: CSSProperties;
  /** The testId prop is used for being easier targetted for unit test environnement */
  testId?: string;
};

export type RenderProps<T = object> = Omit<DefaultProps, 'children'> & {
  children: (v: FunctionComponent<T>) => ReactNode;
};
