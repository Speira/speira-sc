import { styled } from 'styled-components';

import { media } from '../../utils/responsive.utils';

import { Styled } from './Styled';

/**
 * StyledInput
 * @styled-component
 */
export const StyledInput = styled(Styled).attrs(() => ({ as: 'input' }))`
  background-color: var(--sp-bg-color);
  border-radius: var(--sp-radius);
  border-style: solid;
  border-width: 0;
  border-color: var(--sp-font-color);
  outline-color: var(--sp-font-color);
  box-shadow: 0 0 0px 0.5px var(--sp-font-color);
  cursor: text;
  padding: 0.4em 1rem;
  position: relative;
  transition: all 0.18s ease-in-out;
  max-width: 97vw;
  &.sp-border {
    border-width: 1px;
  }
  &.sp-danger {
    border-width: 2px;
  }
  &:hover {
  }
  &:focus {
    box-shadow: 0 0 0.5px 0.5px var(--sp-font-color);
  }
  &[type='checkbox']:focus {
    box-shadow: none;
  }
  &[type='checkbox'],
  &[type='range'],
  &[type='color'] {
    box-shadow: 0 0 0px 0.5px inset var(--sp-font-color);
    padding: 0.2rem;
    border-radius: unset;
    cursor: pointer;
  }
  &:disabled {
    box-shadow: none;
    cursor: text;
    opacity: 0.6;
  }
  &:disabled:after {
    background-color: transparent;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: none;
    width: 100%;
  }
  &.sp-xs {
    width: 3em;
  }
  &.sp-sm {
    width: 8em;
  }
  &.sp-md {
    width: 12em;
  }
  &.sp-lg {
    width: 16em;
  }
  &.sp-xl {
    width: 20em;
  }
  ${media.xl} {
    &.sp-xs {
      width: 3em;
    }
    &.sp-sm {
      width: 8em;
    }
    &.sp-md {
      width: 12em;
    }
    &.sp-lg {
      width: 20em;
    }
    &.sp-xl {
      width: 32em;
    }
  }
`;

const BaseTextarea = styled(StyledInput).attrs(() => ({ as: 'textarea' }))``;

export function StyledTextarea<T extends object>(props: T) {
  return <BaseTextarea {...props} />;
}
