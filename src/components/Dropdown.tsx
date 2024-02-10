import {
  FunctionComponent,
  MouseEvent,
  ReactNode,
  useDeferredValue,
  useState,
} from 'react';

import {
  CustomStylingProps,
  propsAdapter,
  useStylingProps,
} from '../hooks/useStylingProps';
import { ResponsiveStyle } from '../type';
import { mergeClassnames } from '../utils/string.utils';
import { DefaultProps } from '../utils/type.utils';

import { StyledButton } from './styles/StyledButton';
import { StyledDropdown } from './styles/StyledDropdown';

type DropdownType = Omit<DefaultProps, 'children'> &
  CustomStylingProps & {
    flexStyle?: ResponsiveStyle;
    label?: ReactNode;
    clickable?: boolean;
    children: (
      v: FunctionComponent<
        DefaultProps & { href?: string; onClick?: () => void }
      >,
    ) => ReactNode;
  };

/**
 * Dropdown
 * @component
 * @description
 * This is a render function to display customable sub items
 */
export function Dropdown(props: DropdownType) {
  const { children, clickable, flexStyle, label, stylingProps, ...rest } =
    propsAdapter(props);
  const { className, style } = useStylingProps(stylingProps);
  const [isShown, setIsShown] = useState(false);
  const isDShown = useDeferredValue(isShown);
  const handleBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (clickable) setIsShown(!isShown);
  };
  const handleMouseHover = () => !clickable && setIsShown(true);
  const handleMouseOut = () => !clickable && setIsShown(false);
  const handleBlur = () => clickable && setIsShown(false);

  const classed = mergeClassnames('sp-dropdown', className);

  return (
    <StyledDropdown
      {...rest}
      className={classed}
      style={style}
      onBlur={handleBlur}
      onMouseOver={handleMouseHover}
      onMouseLeave={handleMouseOut}
      $responsive={flexStyle}>
      <StyledButton
        className={mergeClassnames('sp-dropbtn', className)}
        onClick={handleBtnClick}>
        <span
          style={{
            marginRight: '4px',
            transform: `rotate(${isDShown ? '90' : '0'}deg)`,
            transition: 'transform, 0.2s',
          }}>
          &#10148;
        </span>
        <span>{label}</span>
      </StyledButton>
      <div
        className="sp-dropdown-content"
        style={{
          transform: `scale(1, ${isDShown ? '1' : '0'})`,
          opacity: isDShown ? '1' : '0',
        }}>
        {children((p) => (
          <a className="sp-option" {...p} />
        ))}
      </div>
    </StyledDropdown>
  );
}

export default Dropdown;
