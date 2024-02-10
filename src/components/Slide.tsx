import { Children, useLayoutEffect, useRef, useState } from 'react';

import {
  CustomStylingProps,
  propsAdapter,
  useStylingProps,
} from '../hooks/useStylingProps';
import { useWindowSize } from '../hooks/useWindowSize';
import { ResponsiveStyle } from '../type';
import { Size } from '../utils/enum.utils';
import { keysToString } from '../utils/object.utils';
import { enClassname } from '../utils/string.utils';
import { DefaultProps } from '../utils/type.utils';

import { StyledButton } from './styles/StyledButton';
import { StyledSlide, StyledSlideContent } from './styles/StyledSlide';

type SlideType = DefaultProps &
  CustomStylingProps & {
    flexStyle?: ResponsiveStyle;
    /** The number of items to displays simultaneously */
    range?: number;
    hideAfter?: Size;
    /** Duration of the animation  */
    duration?: number;
    /** Permanent move activated */
    infinite?: boolean;
    /** The space (px) between each item, default to 16 */
    gap?: number;
  };

/**
 * Slide
 * @component
 * @description
 * Component to display elements using a slide animation
 */
export function Slide(props: SlideType) {
  const ref = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();
  const {
    children,
    duration = 8,
    flexStyle,
    stylingProps,
    ...rest
  } = propsAdapter(props);
  const { infinite, gap = 16, hideAfter, range = 5 } = rest;
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState('10em');
  const [isStatic, setStaticState] = useState(false);
  const { className, style } = useStylingProps(stylingProps);
  const count = Children.count(children);
  const getRef = (ind: number) => (ind === 0 ? { ref } : {});

  const dynamicClass = enClassname(
    [keysToString({ [`sp-show-${hideAfter}s`]: hideAfter, infinite })],
    className,
  );

  useLayoutEffect(() => {
    if (ref.current) {
      const firstItemWidth = ref.current.clientWidth + gap;
      setWidth(`${firstItemWidth}px`);
      setStaticState(false);
    }
  }, [gap, windowSize]);

  const marginLeft = `${gap}px`;
  if (isStatic) return isStatic;

  return (
    <>
      <StyledSlide
        className={dynamicClass}
        $responsive={flexStyle}
        $range={range}
        $width={width}
        $duration={duration}
        style={{
          ...style,
          width: `calc(${width} * ${range})`,
          visibility: ref.current ? 'visible' : 'hidden',
        }}>
        <StyledSlideContent
          style={{
            right: `calc(${index} * ${width} + ${gap / range}px)`,
          }}>
          {Children.map(children, (child, ind) => (
            <div style={{ marginLeft }} className="sp-item" {...getRef(ind)}>
              {child}
            </div>
          ))}
          {Children.map(children, (child) => (
            <div style={{ marginLeft }} className="sp-item">
              {child}
            </div>
          ))}
        </StyledSlideContent>
        <StyledButton
          type="button"
          className="sp-prev"
          disabled={index === 0}
          onClick={() => setIndex(index - 1)}>
          <span
            style={{ transform: 'rotate(180deg)', transformOrigin: 'center' }}>
            &#10146;
          </span>
        </StyledButton>

        <StyledButton
          type="button"
          className="sp-next"
          disabled={index === count - range}
          onClick={() => setIndex(index + 1)}>
          <span>&#10147;</span>
        </StyledButton>
      </StyledSlide>
    </>
  );
}
export default Slide;
