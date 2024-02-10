import { Children, ReactNode, useDeferredValue, useState } from 'react';
import { createPortal } from 'react-dom';

import {
  CustomStylingProps,
  propsAdapter,
  useStylingProps,
} from '../hooks/useStylingProps';
import { ResponsiveStyle } from '../type';
import { Color, Size, Spreading } from '../utils/enum.utils';
import { DefaultProps } from '../utils/type.utils';

import { Styled } from './styles/Styled';
import {
  MenuIconButton,
  StyledMask,
  StyledMenu,
  StyledNav,
  StyledNavHeader,
  StyledNavItem,
} from './styles/StyledMenu';

type MenuButtonType = {
  active: boolean;
  toggleDisplay: () => void;
};
const MenuButton = (props: DefaultProps & MenuButtonType) => {
  const { active, toggleDisplay, ...rest } = props;
  const colors = { backgroundColor: 'var(--sp-font-color)' };
  return (
    <MenuIconButton {...rest} onClick={toggleDisplay}>
      <div
        className="bar1"
        style={{
          ...colors,
          transform: active ? 'translate(0, 11px) rotate(-45deg)' : 'unset',
        }}
      />
      <div
        className="bar2"
        style={{ ...colors, opacity: active ? '0' : '1' }}
      />
      <div
        className="bar3"
        style={{
          ...colors,
          transform: active ? 'translate(0, -11px) rotate(45deg)' : 'unset',
        }}
      />
    </MenuIconButton>
  );
};

type MenuDialogType = DefaultProps &
  CustomStylingProps & {
    active: boolean;
    brand?: ReactNode;
    handleClose: () => void;
  };
const MenuDialog = (props: MenuDialogType) => {
  const { active, brand, children, handleClose, stylingProps } =
    propsAdapter(props);
  const { className } = useStylingProps(stylingProps);
  return (
    <>
      <StyledNav
        className={className}
        $active={active}
        style={active ? { transform: 'scale(1,1)' } : {}}>
        {active && (
          <>
            <StyledNavHeader>
              <span>{brand}</span>
              <MenuButton
                style={{ transform: 'scale(0.67)' }}
                active={active}
                toggleDisplay={handleClose}
              />
            </StyledNavHeader>
            <br />
            {Children.map(children, (child) => (
              <StyledNavItem className="truc">{child}</StyledNavItem>
            ))}
          </>
        )}
      </StyledNav>
      <StyledMask onClick={handleClose} $active={active} />
    </>
  );
};
MenuDialog.defaultProps = { spreading: 'plain' };

const DEFAULT_PROPS = { color: 'dark', spreading: 'hollow' };
type MenuType = DefaultProps &
  Pick<CustomStylingProps, 'color'> & {
    brand?: ReactNode;
    clickable?: boolean;
    color?: Color;
    flexStyle?: ResponsiveStyle;
    /** @description size after the menu is automaticaly uncollapsed */
    hideBefore?: Size;
    /** @description Default to "document.body" */
    parentId?: string;
    spreading?: Spreading;
  } & typeof DEFAULT_PROPS;

/**
 * @description
 * Menu on the navigaiton
 *
 * @example
 *
 * ```jsx
 *     <Menu brand={<MyBrand/>} color="light" parentId="example-dashboard">
 *       <Link to="#">Link 1</Link>
 *       <Link to="#">Link 2</Link>
 *       <Link to="#">Link 3</Link>
 *     </Menu>
 * ```
 *
 * @defaultProps { color: 'dark', spreading: 'hollow' }
 * @component
 */
export function Menu(props: MenuType) {
  const {
    brand = '',
    children,
    flexStyle,
    hideBefore = 'lg',
    parentId,
    stylingProps,
    ...rest
  } = propsAdapter({ ...props, spreading: 'hollow' });
  const [isMenuOpened, setMenuOpened] = useState(false);
  const active = useDeferredValue(isMenuOpened);
  const close = () => setMenuOpened(false);
  const { className, style } = useStylingProps(stylingProps);
  return (
    <StyledMenu {...rest} $trigger={hideBefore}>
      <Styled
        as="nav"
        style={style}
        className={`sp-menu-content ${className}`}
        $responsive={flexStyle}>
        {children}
      </Styled>
      <MenuButton
        className={`sp-menu-trigger ${className}`}
        active={isMenuOpened}
        toggleDisplay={() => setMenuOpened(!isMenuOpened)}
      />
      {createPortal(
        <MenuDialog
          color={props.color}
          brand={brand}
          active={active}
          handleClose={close}>
          {children}
        </MenuDialog>,
        parentId
          ? document.getElementById(parentId) ?? document.body
          : document.body,
        'sp-menu-dialog',
      )}
    </StyledMenu>
  );
}
Menu.defaultProps = DEFAULT_PROPS;
export default Menu;
