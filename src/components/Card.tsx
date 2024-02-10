import {
  CustomStylingProps,
  propsAdapter,
  useStylingProps,
} from '../hooks/useStylingProps';
import { ResponsiveStyle } from '../type';
import { DefaultProps } from '../utils/type.utils';

import { StyledCard } from './styles/StyledCard';
import { Linkable } from './styles/StyledLink';

type CardType = DefaultProps &
  CustomStylingProps & {
    flexStyle?: ResponsiveStyle;
    height?: string;
    href?: string;
    width?: string;
  };

/**
 * Card
 * @component
 */
export function Card(props: CardType) {
  const { stylingProps, children, flexStyle, href, id, ...rest } =
    propsAdapter(props);

  const { className, style } = useStylingProps(stylingProps);

  return (
    <Linkable link={href}>
      <StyledCard
        {...rest}
        id={id}
        $responsive={flexStyle}
        className={className}
        style={style}>
        {children}
      </StyledCard>
    </Linkable>
  );
}

export default Card;
