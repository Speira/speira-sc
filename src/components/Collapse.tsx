import { useDeferredValue, useRef, useState } from 'react';

import {
  CustomStylingProps,
  propsAdapter,
  useStylingProps,
} from '../hooks/useStylingProps';
import { ResponsiveStyle } from '../type';
import { DefaultProps } from '../utils/type.utils';

import { StyledCollapse } from './styles/StyledCollapse';

type CollapseType = DefaultProps &
  CustomStylingProps & {
    label: string;
    place?: 'center' | 'left' | 'right';
    flexStyle?: ResponsiveStyle;
  };

/**
 * Collapse
 * @components
 * @description
 * Collapse content to preserve space
 */
export function Collapse(props: CollapseType) {
  const {
    children,
    flexStyle,
    label,
    place = 'left',
    stylingProps,
    ...rest
  } = propsAdapter(props);
  const { className, style } = useStylingProps(stylingProps);
  const [isCollapsed, setCollapseState] = useState(false);
  const dCollapsed = useDeferredValue(isCollapsed);
  const toggleCollapse = () => setCollapseState(!isCollapsed);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <StyledCollapse
      {...rest}
      style={style}
      className={className}
      $responsive={flexStyle}>
      <button
        className={`sp-btn-collapse sp-${place}`}
        type="button"
        onClick={() => toggleCollapse()}>
        <span>{label}</span>
        <span
          style={{
            transform: `rotate(${dCollapsed ? '-90' : '90'}deg)`,
            transition: 'transform, 0.3s ease-out',
          }}>
          &#10148;
        </span>
      </button>
      <div
        ref={ref}
        className="sp-content"
        style={{
          height: dCollapsed ? `${ref?.current?.clientHeight || 100}px` : '0px',
          padding: dCollapsed ? '1px 8px' : '0px 8px',
        }}>
        {children}
      </div>
    </StyledCollapse>
  );
}
export default Collapse;
