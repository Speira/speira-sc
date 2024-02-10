import { Color, Shape, Size, Spreading } from './enum.utils';
/**
 * enClassname
 * @description
 * Adapt props to be placed in the className of an Component
 */
export declare function enClassname(props: string[], className?: string): string;
type ColorClassParam = {
    color?: Color;
    spreading?: Spreading;
};
export declare const getColorClass: ({ color, spreading }: ColorClassParam) => string;
export declare const getShapeClass: (shape?: Shape) => string | undefined;
export declare const getSizeClass: (size?: Size) => string | undefined;
export declare const getUnboxedClass: (unboxed?: boolean) => "sp-unboxed" | undefined;
export declare function mergeClassnames(...classnames: (string | undefined)[]): string;
export {};
//# sourceMappingURL=string.utils.d.ts.map