import { CSSProperties, useMemo } from 'react';

import {
  CustomStylingProps,
  propsAdapter,
  useStylingProps,
} from '../hooks/useStylingProps';
import { ResponsiveStyle } from '../type';
import { Size } from '../utils/enum.utils';
import { DefaultProps } from '../utils/type.utils';

import { StyledTableRow } from './styles/StyledTableRow';

export type TableRowtype = DefaultProps &
  CustomStylingProps & {
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
export function TableRow(props: TableRowtype) {
  const {
    children,
    flexStyle,
    isHead = false,
    id,
    isScrolling = false,
    stylingProps,
    ...rest
  } = propsAdapter({ ...props, size: props.size ?? 'md' });
  const { className, style: propStyle } = useStylingProps(stylingProps);
  const style: CSSProperties | undefined = useMemo(
    () =>
      isScrolling && isHead
        ? {
            background:
              'color-mix(in srgb, var(--sp-font-color) 20%,  var(--sp-bg-color))',
            boxShadow: 'var(--sp-box-shadow-hight) var(--sp-font-color)',
            cursor: 'default',
            opacity: '0.9',
            position: 'sticky',
            top: '0',
            ...propStyle,
          }
        : propStyle,
    [isScrolling, isHead, propStyle],
  );

  return (
    <StyledTableRow
      id={id}
      className={className}
      style={style}
      $responsive={flexStyle}
      {...rest}>
      {children}
    </StyledTableRow>
  );
}

export default TableRow;
