import { CSSProperties } from 'react';
import { ResponsiveStyle } from '../type';
import { DefaultProps } from '../utils/type.utils';
export type TableProps = DefaultProps & {
    flexStyle?: ResponsiveStyle;
    maxHeight?: CSSProperties['maxHeight'];
};
/**
 * Table
 * @component
 * @description
 * Used for Tables, must be used with TableRow and TableRowItem
 */
export declare const Table: import("react").ForwardRefExoticComponent<DefaultProps & {
    flexStyle?: ResponsiveStyle | undefined;
    maxHeight?: CSSProperties['maxHeight'];
} & import("react").RefAttributes<HTMLDivElement>>;
export default Table;
//# sourceMappingURL=Table.d.ts.map