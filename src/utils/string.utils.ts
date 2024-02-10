import { Align, Color, Direction, Shape, Size, Spreading } from './enum.utils';

/**
 * enClassname
 * @description
 * Adapt props to be placed in the className of an Component
 */
export function enClassname(props: string[], className?: string) {
  const base = className || '';
  return [base]
    .concat(props.map((value) => (value ? `${value}` : '')))
    .join(' ')
    .trim();
}

type ColorClassParam = {
  color?: Color;
  spreading?: Spreading;
};

/**
 *
 * @description
 * Turns colors related className to an adapted className
 */
export const getColorClass = ({ color, spreading }: ColorClassParam) => {
  if (color && spreading && spreading !== 'plain')
    return `sp-${spreading}-${color}`;
  if (color) return `sp-${color}`;
  return '';
};
/**
 *
 * @description
 * Turns unboxed related className to an adapted className
 */
export const getUnboxedClass = (unboxed?: boolean) =>
  unboxed ? 'sp-unboxed' : undefined;

/**
 *
 * @description
 * Turns "direction" related className to an adapted className
 */
export const getStylingClass = (prop?: Align | Direction | Shape | Size) =>
  prop ? `sp-${prop}` : undefined;

/**
 *
 * @description
 * Safe ClassName merging method
 */
export function mergeClassnames(...classnames: (string | undefined)[]) {
  return classnames.filter(Boolean).join(' ');
}
