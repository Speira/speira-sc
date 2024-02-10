import { CSSProperties, useMemo } from 'react';
import { useTheme } from 'styled-components';

import { injectStatusStyle } from '../utils/components.utils';
import {
  Align,
  Color,
  Direction,
  Shape,
  Size,
  Spreading,
  Status,
} from '../utils/enum.utils';
import {
  getColorClass,
  getStylingClass,
  getUnboxedClass,
  mergeClassnames,
} from '../utils/string.utils';

export type CustomStylingProps = {
  align?: Align;
  color?: Color;
  columnGap?: string;
  direction?: Direction;
  margin?: string;
  padding?: string;
  rowGap?: string;
  shape?: Shape;
  size?: Size;
  spreading?: Spreading;
  status?: Status;
  /** Suppress the border */
  unboxed?: boolean;
};

type StylingProps = CustomStylingProps & {
  className?: string;
  style?: CSSProperties;
};

/**
 * useStylingProps
 * @description
 * A styling condensed manager that provides theme mathching className and style according to param
 * @param param.align 'center'|'end'|'start'
 * @param param.className string
 * @param param.color {Color} "dark" | "light" | "primary" | ... | "quaternary"
 * @param param.shape "rounded" | "curved" | "square"
 * @param param.size "xs" | "sm" | "md" | "lg" | "xl"
 * @param param.spreading  "plain" | "hollow" | "soft" | "silent"
 * @param param.status "success" | "info" | "warning" | "danger"
 * @param param.style CSSProperties
 * @param param.unboxed true | false
 * @returns
 * - res.style: object used for props that can change over times
 * - res.className: find and associate globalStyle stylesheet properties to the matched param values
 */
export function useStylingProps(param: StylingProps) {
  const {
    align,
    className,
    color,
    columnGap,
    direction,
    margin,
    padding,
    rowGap,
    shape,
    size,
    spreading,
    status,
    style,
    unboxed,
  } = param;
  const theme = useTheme();
  const alignClass = getStylingClass(align);
  const colorClass = getColorClass({ color, spreading });
  const directionClass = getStylingClass(direction);
  const shapeClass = getStylingClass(shape);
  const sizeClass = getStylingClass(size);
  const unboxedClass = getUnboxedClass(unboxed);

  const augmentedSyle = useMemo(
    () => ({
      ...style,
      ...injectStatusStyle({ status, theme, spreading }),
      ...Object.entries({ rowGap, columnGap, margin, padding }).reduce(
        (acc, [k, v]) => (v ? { ...acc, [k]: v } : acc),
        {},
      ),
    }),
    [columnGap, margin, padding, style, status, spreading, rowGap, theme],
  );

  const classname = useMemo(
    () =>
      mergeClassnames(
        className,
        alignClass,
        colorClass,
        directionClass,
        shapeClass,
        sizeClass,
        unboxedClass,
      ),
    [
      className,
      alignClass,
      colorClass,
      directionClass,
      shapeClass,
      sizeClass,
      unboxedClass,
    ],
  );

  return { className: classname, style: augmentedSyle };
}

export default useStylingProps;

/**
 * @description
 * Adapt Props to mere styling props into a single object
 */
export function propsAdapter<T extends StylingProps>(params: T) {
  const {
    align,
    className,
    color,
    columnGap,
    direction,
    margin,
    padding,
    rowGap,
    shape,
    size,
    spreading,
    status,
    style,
    unboxed,
    ...rest
  } = params;
  const stylingProps = {
    align,
    className,
    color,
    columnGap,
    direction,
    margin,
    padding,
    rowGap,
    shape,
    size,
    spreading,
    status,
    style,
    unboxed,
  };
  return { stylingProps, ...rest };
}
