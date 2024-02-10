import { styled } from 'styled-components';

import { Size } from '../../utils/enum.utils';
import { targetWidth } from '../../utils/responsive.utils';

import { Styled } from './Styled';

const SHARED_PROP = { OFFSET: '32px', TIME: '0.23s', WIDTH: '250px' };

type StyledType = {
  $trigger: Size;
};

/** **************** Standard Menu Part ******************** */

export const StyledMenu = styled(Styled)<StyledType>`
  padding: 0 8px;
  .sp-menu-content {
    border-radius: var(--sp-radius);
  }
  @media (max-width: ${({ $trigger }) => targetWidth[$trigger]}px) {
    display: inline-flex;
    .sp-menu-content {
      position: absolute;
      transform: scale(0, 0);
    }
    .sp-menu-content > * {
      display: flex;
      white-space: nowrap;
    }
  }

  @media (min-width: ${({ $trigger }) => targetWidth[$trigger] + 1}px) {
    .sp-menu-content {
      transition: none;
      column-gap: 0.5rem;
    }
    .sp-menu-trigger {
      transform: scale(0, 0);
    }
  }
`;

export const MenuIconButton = styled(Styled)`
  background-color: transparent !important;
  cursor: pointer;
  display: inline-block;
  .bar1,
  .bar2,
  .bar3 {
    border-radius: 3px;
    height: 5px;
    margin: 6px 0;
    transition: 0.4s;
    width: 35px;
  }
`;

/** **************** Dialog Menu Part ******************** */

export const StyledNav = styled(Styled).attrs<{ $active: boolean }>(
  ({ $active }) => ({
    style: {
      transitionDelay: $active ? 'unset' : SHARED_PROP.TIME,
      transform: $active ? 'scale(1,1)' : 'scale(0,1)',
    },
  }),
)`
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 0;
  overflow-x: hidden;
  position: absolute;
  top: 0;
  transform-origin: left;
  transition: ${SHARED_PROP.TIME};
  transition-timing-function: ease-out;
  width: ${SHARED_PROP.WIDTH};
  z-index: 1;
`;

export const StyledNavHeader = styled(Styled)`
  background-color: rgba(256, 256, 256, 0.02);
  padding: 24px 6px 24px ${SHARED_PROP.OFFSET};
  place-content: space-between;
  place-items: center;
`;

export const StyledNavItem = styled(Styled)`
  cursor: pointer;
  line-height: normal;
  position: relative;
  transition: none;
  & > * {
    margin: 1px 1px;
    padding: 12px 0 12px ${SHARED_PROP.OFFSET};
    text-align: left;
    justify-content: flex-start;
    width: 100%;
  }
  &:hover {
    background-color: rgba(256, 256, 256, 0.02);
    box-shadow: 0px 0px 1px 0px var(--sp-font-color) inset;
  }
  &:after {
    background-color: var(--sp-font-color);
    content: ' ';
    height: 100%;
    opacity: 0.65;
    position: absolute;
    right: 0;
    top: 0;
    transform: scale(0, 1);
    transform-origin: right;
    width: 3%;
  }
  &:hover:after {
    transform: scale(1, 1);
    transition-delay: 0.3s;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
`;

export const StyledMask = styled(Styled).attrs<{ $active: boolean }>(
  ({ $active }) => ({
    style: {
      transitionDelay: $active ? '0.25s' : 'unset',
      transform: $active ? 'scale(1,1)' : 'scale(0,1)',
    },
  }),
)`
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  left: ${SHARED_PROP.WIDTH};
  position: absolute;
  top: 0;
  transform-origin: left;
  transition: ${SHARED_PROP.TIME};
  transition-timing-function: ease-out;
  width: ${`calc(100% - ${SHARED_PROP.WIDTH}`});
`;
