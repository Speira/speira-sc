import { WebTarget } from 'styled-components';

import {
  CustomStylingProps,
  propsAdapter,
  useStylingProps,
} from '../hooks/useStylingProps';
import { ResponsiveStyle } from '../type';
import { DefaultProps } from '../utils/type.utils';

import { StyledLink } from './styles/StyledLink';

const DEFAULT_PROPS = { as: 'a', spreading: 'hollow' };

type LinkType = DefaultProps &
  Omit<CustomStylingProps, 'unboxed' | 'size'> & {
    as?: WebTarget;
    boxed?: boolean;
    flexStyle?: ResponsiveStyle;
    href?: string;
    to?: string;
  } & typeof DEFAULT_PROPS;

/**
 * Link
 * @component
 * @description
 */
export function Link(props: LinkType) {
  const { as, flexStyle, href, children, to, stylingProps, ...rest } =
    propsAdapter(props);
  const { className, style } = useStylingProps(stylingProps);

  return (
    <StyledLink
      {...rest}
      as={as}
      className={className}
      href={href}
      style={style}
      to={to}
      $responsive={flexStyle}>
      {children}
    </StyledLink>
  );
}

Link.defaultProps = DEFAULT_PROPS;

export default Link;
