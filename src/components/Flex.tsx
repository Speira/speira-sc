import { ForwardedRef, forwardRef } from 'react';
import { styled } from 'styled-components';

import {
  CustomStylingProps,
  propsAdapter,
  useStylingProps,
} from '../hooks/useStylingProps';
import { ResponsiveStyle } from '../type';
import { DefaultProps } from '../utils/type.utils';

import { Styled } from './styles/Styled';

type FlexType = DefaultProps &
  CustomStylingProps & {
    as?: keyof typeof styled;
    flexStyle?: ResponsiveStyle;
    href?: string;
  };

/**
 * Flex
 * @component
 * @description
 * Simple and fast implementation of a Flexible component
 * (NB: "flexStyle" is a mobile first improved styling)
 * @example
 *   <Flex
 *      as="section"
 *      flexStyle={{
 *        fontSize: "2em",
 *        md: { width: "50px" }, // for medium screens (and plus)
 *      }
 *   />
 */
export function Flex(props: FlexType, ref?: ForwardedRef<HTMLElement>) {
  const { as, children, flexStyle, href, id, stylingProps, testId, ...rest } =
    propsAdapter(props);
  const { className, style } = useStylingProps(stylingProps);

  return (
    <Styled
      {...rest}
      as={as}
      $responsive={flexStyle}
      className={className}
      data-testid={testId}
      id={id}
      ref={ref}
      style={style}>
      {!href ? (
        children
      ) : (
        <Styled as="a" href={href}>
          {children}
        </Styled>
      )}
    </Styled>
  );
}

export default forwardRef(Flex);
