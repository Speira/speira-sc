import { ReactNode } from 'react';

import {
  CustomStylingProps,
  propsAdapter,
  useStylingProps,
} from '../hooks/useStylingProps';
import { ResponsiveStyle } from '../type';
import { DefaultProps } from '../utils/type.utils';

import { StyledTitle } from './styles/StyledTitle';

const DEFAULT_PROPS = { as: 'h1', spreading: 'hollow' };

export type TitleProps = DefaultProps &
  CustomStylingProps & {
    /** Default to: 'h1' */
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b' | 'strong';
    flexStyle?: ResponsiveStyle;
    label?: ReactNode;
  } & typeof DEFAULT_PROPS;

/**
 * Title
 * @component
 * @description
 * Component for displaying title
 * @example
 * ```jsx
 * <Title as="b" label="Card" />
 * ```
 * ```jsx
 * <Title as="h2">
 *  <div>My Title</div>
 * </Title>
 * ```
 */
export function Title(props: TitleProps) {
  const { as, children, flexStyle, label, stylingProps, ...rest } =
    propsAdapter(props);
  const { className, style } = useStylingProps(stylingProps);
  return (
    <StyledTitle
      {...rest}
      as={as}
      style={style}
      className={className}
      $responsive={flexStyle}>
      {label}
      {children}
    </StyledTitle>
  );
}
Title.defaultProps = DEFAULT_PROPS;
export default Title;
