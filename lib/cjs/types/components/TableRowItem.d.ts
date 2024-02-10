import { ResponsiveStyle } from '../type';
import { Size } from '../utils/enum.utils';
import { DefaultProps } from '../utils/type.utils';
export type TableItemType = DefaultProps & {
    center?: boolean;
    clickable?: boolean;
    flexStyle?: ResponsiveStyle;
    head?: boolean;
    size?: Size;
};
/**
 * TableRowItem
 * @component
 * @description
 * A table case
 */
export declare function TableRowItem(props: TableItemType): import("react/jsx-runtime").JSX.Element;
export default TableRowItem;
//# sourceMappingURL=TableRowItem.d.ts.map