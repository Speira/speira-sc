import {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  KeyboardEvent,
  Ref,
} from 'react';

import {
  CustomStylingProps,
  propsAdapter,
  useStylingProps,
} from '../hooks/useStylingProps';
import { ResponsiveStyle } from '../type';
import { ensafe } from '../utils/func.utils';
import { Primitive } from '../utils/type.utils';
import { checkIsBoolean } from '../utils/typeguard.utils';

import { StyledInput, StyledTextarea } from './styles/StyledInput';

type DefaultInput =
  | 'defaultChecked'
  | 'defaultValue'
  | 'id'
  | 'placeholder'
  | 'type'
  | 'value';

type InputAttributes = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  DefaultInput
>;
type InputProps = CustomStylingProps & {
  flexStyle?: ResponsiveStyle;
  isAsync?: boolean;
  onChange: (value?: Primitive) => void;
  onEnterPress?: () => void;
  testId?: string;
  textarea?: boolean;
} & InputAttributes;

/**
 * Input
 * @component
 * @description
 * We can set isAsync at true to improve performance when we want to
 * execute an heavy task on each value update
 */
export function Input(props: InputProps, ref: Ref<HTMLInputElement>) {
  const {
    defaultValue,
    flexStyle,
    id,
    isAsync,
    onChange,
    onEnterPress,
    placeholder,
    stylingProps,
    testId,
    textarea,
    type = 'text',
    value,
    ...rest
  } = propsAdapter({
    ...props,
    size: props.size ?? 'md',
    spreading: props.spreading ?? 'hollow',
  });

  const { className, style } = useStylingProps(stylingProps);

  if (props.status === 'danger') style.borderWidth = '2px';
  const safeChange = ensafe((input) => onChange(input as Primitive));

  const eventAdapter = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.type === 'checkbox') return event.target.checked;
    return event.target.value;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!isAsync) safeChange(eventAdapter(event));
  };

  const handleBlur = (event: ChangeEvent<HTMLInputElement>) => {
    if (isAsync) safeChange(eventAdapter(event));
  };

  const inputProps = {
    ...rest,
    id,
    onKeyUp(e: KeyboardEvent<HTMLInputElement>) {
      if (e.key === 'Enter' && onEnterPress) onEnterPress();
    },
    $responsive: flexStyle,
    checked: checkIsBoolean(value) ? value : undefined,
    className,
    'data-testId': testId,
    defaultValue: checkIsBoolean(value) ? undefined : defaultValue,
    onBlur: handleBlur,
    onChange: handleChange,
    placeholder,
    style,
    type,
    value: checkIsBoolean(value) ? undefined : value,
  };

  if (textarea) return <StyledTextarea ref={ref} {...inputProps} />;
  return <StyledInput ref={ref} {...inputProps} />;
}

export default forwardRef(Input);
