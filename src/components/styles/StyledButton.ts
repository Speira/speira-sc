import { styled } from 'styled-components';

import { Styled } from './Styled';

/**
 * StyledButton
 * @styled-components
 *
 */
export const StyledButton = styled(Styled).attrs(() => ({ as: 'button' }))`
  border: none;
  border-radius: var(--sp-radius);
  box-shadow: var(--sp-box-shadow) var(--sp-font-color);
  background-color: var(--sp-bg-color);
  color: var(--sp-font-color);
  cursor: pointer;
  display: inline-flex;
  font-size: 1rem;
  place-content: center;
  place-items: center;
  margin: 0;
  outline: none;
  padding: 0.5em;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 0.1s ease-in-out;
  width: auto;
  &:active {
    opacity: 0.6;
    transform: scale(0.9);
    transform-origin: bottom center;
  }
  &:disabled {
    box-shadow: none;
    cursor: text;
    opacity: 0.6;
    transform: none;
  }
  &:after {
    background-color: var(--sp-font-color);
    border-radius: var(--sp-radius);
    content: '';
    display: flex;
    height: 100%;
    left: 0;
    margin: 0;
    opacity: 0.1;
    padding: 0;
    position: absolute;
    top: 0;
    transform: scale(0, 0);
    transform-origin: center;
    transition: none;
    width: 100%;
  }
  &:hover:after {
    transform: scale(1, 1);
    transition: all 0.3s ease-in-out;
  }

  &:disabled:after {
    transform: none;
  }
  &.sp-xs {
    max-width: 2em;
    padding: 0.4rem;
  }
  &.sp-sm {
    width: 6em;
  }
  &.sp-md {
    width: 10em;
  }
  &.sp-lg {
    width: 16em;
  }
  &.sp-xl {
    min-width: 24em;
  }
`;
