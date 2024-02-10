import useStylingdProps, {
  CustomStylingProps,
  propsAdapter,
} from '../hooks/useStylingProps';
import { ResponsiveStyle } from '../type';
import { ensafe } from '../utils/func.utils';
import { DefaultProps } from '../utils/type.utils';

import { StyledButton } from './styles/StyledButton';

type ButtonProps = DefaultProps &
  CustomStylingProps & {
    flexStyle?: ResponsiveStyle;
    href?: string;
    label?: string;
    onClick?: () => void;
  };

/**
 *
 *  #### **Theme color**
 *  The button color will focus on the `status` prop if present,
 *  if not it will focus on the `className` prop (like "sp-primary")
 *
 */
export function Button(props: ButtonProps) {
  const {
    flexStyle,
    href,
    label = '',
    onClick = () => {},
    stylingProps,
    testId,
    ...rest
  } = propsAdapter(props);

  const { className, style } = useStylingdProps(stylingProps);

  const handleClick = () => {
    ensafe(onClick)();
  };

  return (
    <StyledButton
      {...rest}
      $responsive={flexStyle}
      style={style}
      as={href ? 'a' : undefined}
      className={className}
      data-testid={testId}
      href={href}
      onClick={href ? undefined : handleClick}
      type="button">
      {!!label && <span>{label}</span>}
      {props.children}
    </StyledButton>
  );
}

export default Button;
