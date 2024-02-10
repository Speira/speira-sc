import {
  CustomStylingProps,
  propsAdapter,
  useStylingProps,
} from '../hooks/useStylingProps';
import { ResponsiveStyle } from '../type';
import { mergeClassnames } from '../utils/string.utils';
import { DefaultProps } from '../utils/type.utils';

import { StyledTableRowItem } from './styles/StyledTableRowItem';

export type TableItemType = DefaultProps &
  Pick<CustomStylingProps, 'size'> & {
    center?: boolean;
    clickable?: boolean;
    flexStyle?: ResponsiveStyle;
    head?: boolean;
  };

/**
 * TableRowItem
 * @component
 * @description
 * A table case
 */
export function TableRowItem(props: TableItemType) {
  const { center, children, clickable, flexStyle, head, id, stylingProps } =
    propsAdapter({ ...props, size: props.size ?? 'md' });
  const { className, style } = useStylingProps(stylingProps);
  const classname = mergeClassnames(
    className,
    head ? `sp-head` : undefined,
    center ? `sp-center` : undefined,
    clickable ? 'sp-clickabke' : undefined,
  );

  return (
    <StyledTableRowItem
      id={id}
      style={style}
      className={classname}
      $responsive={flexStyle}>
      {children}
    </StyledTableRowItem>
  );
}

export default TableRowItem;
