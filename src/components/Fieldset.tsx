import {
  CustomStylingProps,
  propsAdapter,
  useStylingProps,
} from '../hooks/useStylingProps';
import { ResponsiveStyle } from '../type';
import { DefaultProps } from '../utils/type.utils';

import { StyledFieldset } from './styles/StyledFieldset';

const DEFAULT_PROPS = { align: 'start', direction: 'column' };

type FieldsetProps = DefaultProps &
  CustomStylingProps & {
    flexStyle?: ResponsiveStyle;
    legend?: string;
  };

/**
 * Fieldset
 * @component
 */
export function Fieldset(props: FieldsetProps) {
  const { children, flexStyle, id, legend, stylingProps, ...rest } =
    propsAdapter(props);

  const { className, style } = useStylingProps(stylingProps);

  return (
    <StyledFieldset
      {...rest}
      id={id}
      style={style}
      className={className}
      $responsive={flexStyle}>
      {legend && <legend className="sp-legend">{legend}</legend>}
      <div className="sp-fieldset-content">{children}</div>
    </StyledFieldset>
  );
}
Fieldset.defaultProps = DEFAULT_PROPS;
export default Fieldset;
