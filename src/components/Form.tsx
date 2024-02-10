import {
  CustomStylingProps,
  propsAdapter,
  useStylingProps,
} from '../hooks/useStylingProps';
import { ResponsiveStyle } from '../type';
import { Size } from '../utils/enum.utils';
import { DefaultProps } from '../utils/type.utils';

import { StyledForm } from './styles/StyledForm';

type FormProps = DefaultProps &
  CustomStylingProps & {
    flexStyle?: ResponsiveStyle;
    size?: Size;
  };

/**
 * Form
 * @component
 */
export function Form(props: FormProps) {
  const { children, flexStyle, id, stylingProps, ...rest } = propsAdapter({
    ...props,
    size: props.size ?? 'md',
  });
  const { className, style } = useStylingProps(stylingProps);
  return (
    <StyledForm
      {...rest}
      id={id}
      className={className}
      style={style}
      $responsive={flexStyle}>
      {children}
    </StyledForm>
  );
}

export default Form;
