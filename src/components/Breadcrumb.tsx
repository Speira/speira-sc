import {
  CustomStylingProps,
  propsAdapter,
  useStylingProps,
} from '../hooks/useStylingProps';
import { ResponsiveStyle } from '../type';
import { DefaultProps } from '../utils/type.utils';

import { StyledBreadcrumb, StyledBreadItem } from './styles/StyledBreadcrumb';

const DEFAULT_PROPS = { spreading: 'hollow' };

type BreadcrumbType = DefaultProps &
  Pick<CustomStylingProps, 'color' | 'status' | 'spreading'> & {
    path?: { label: string; url: string }[];
    flexStyle?: ResponsiveStyle;
  };

/**
 * Breadcrumb
 * @example
 * ```jsx
 * <Breadcrumb
 *   color="primary"
 *   path={[
 *     { label: 'home', url: '#' },
 *     { label: 'example', url: '#' },
 *     { label: 'default', url: '#' },
 *   ]}
 * />
 * ```
 *
 *
 * @component
 */
export function Breadcrumb(props: BreadcrumbType) {
  const { flexStyle, path, stylingProps, ...rest } = propsAdapter(props);
  const { className, style } = useStylingProps(stylingProps);
  return (
    <StyledBreadcrumb
      {...rest}
      className={className}
      style={style}
      $responsive={flexStyle}>
      {path &&
        path.map((item, index) => (
          <StyledBreadItem key={item.label}>
            {index === path.length - 1 ? (
              <span className="sp-current">{item.label}</span>
            ) : (
              <a href={item.url} className="sp-item">
                {item.label}
              </a>
            )}
          </StyledBreadItem>
        ))}
    </StyledBreadcrumb>
  );
}
Breadcrumb.defaultProps = DEFAULT_PROPS;

export default Breadcrumb;
