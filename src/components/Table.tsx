import { CSSProperties, ForwardedRef, forwardRef } from 'react';

import {
  CustomStylingProps,
  propsAdapter,
  useStylingProps,
} from '../hooks/useStylingProps';
import { DefaultProps } from '../utils/type.utils';

import { StyledTable } from './styles/StyledTable';

export type TableProps = DefaultProps &
  CustomStylingProps & {
    maxHeight?: CSSProperties['maxHeight'];
    maxWidth?: CSSProperties['maxWidth'];
  };

/**
 * Table
 * @component
 * @description
 * Used for Tables, must be used with TableRow and TableRowItem
 */
export const Table = forwardRef(
  (props: TableProps, ref?: ForwardedRef<HTMLDivElement>) => {
    const {
      maxHeight = '20rem',
      maxWidth,
      stylingProps,
      ...rest
    } = propsAdapter(props);

    const { className, style } = useStylingProps(stylingProps);
    return (
      <>
        {/* <div style={{ overflowX: 'scroll', maxWidth }}> */}
        <StyledTable
          {...rest}
          className={className}
          style={{ ...style, maxHeight }}
          ref={ref}
        />
        {/*  </div> */}
      </>
    );
  },
);

export default Table;
