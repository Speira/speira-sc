import { ResponsiveStyle } from '../type';
import { Size } from '../utils/enum.utils';
import { DefaultProps } from '../utils/type.utils';
export type TableRowtype = DefaultProps & {
    flexStyle?: ResponsiveStyle;
    isHead?: boolean;
    isScrolling?: boolean;
    size?: Size;
};
/**
 * TableRow
 * @component
 * @description
 * A row in a Table
 */
export declare function TableRow(props: TableRowtype): import("react/jsx-runtime").JSX.Element;
export default TableRow;
//# sourceMappingURL=TableRow.d.ts.map