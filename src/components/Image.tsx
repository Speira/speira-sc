import {
  CustomStylingProps,
  propsAdapter,
  useStylingProps,
} from '../hooks/useStylingProps';
import { ResponsiveStyle } from '../type';
import { DefaultProps } from '../utils/type.utils';

import { Styled } from './styles/Styled';

type ImageProps = DefaultProps &
  Pick<CustomStylingProps, 'shape' | 'unboxed'> & {
    flexStyle?: ResponsiveStyle;
    alt?: string;
    blur?: boolean;
    fill?: boolean;
    height?: string | number;
    src: string;
    width?: number | string;
  };

/**
 * Image
 * @component
 * @description
 * It only uses NextImage component
 */
export function Image(props: ImageProps) {
  const {
    alt = 'Image',
    height,
    src,
    stylingProps,
    width,
    ...rest
  } = propsAdapter(props);

  const { className, style } = useStylingProps(stylingProps);

  return (
    <Styled
      {...rest}
      as="img"
      alt={alt}
      className={className}
      src={src}
      style={style}
      width={width}
      height={height}
    />
  );
}

export default Image;
