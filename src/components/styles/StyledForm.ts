import { styled } from 'styled-components';

import { media } from '../../utils/responsive.utils';

import { Styled } from './Styled';

/**
 * StyledForm
 * @styled-component
 */
export const StyledForm = styled(Styled).attrs(() => ({ as: 'form' }))`
  border-radius: var(--sp-radius);
  display: flex;
  flex-direction: column;
  margin: auto;
  min-height: 3em;
  padding: 1rem;
  transition: height 1s;
  row-gap: 0.6rem;
  &.sp-xs {
    width: 90%;
  }
  &.sp-sm {
    width: 95%;
  }
  &.sp-md {
    width: 97%;
  }
  &.sp-lg {
    width: 100%;
  }
  &.sp-xl {
    width: 100%%;
  }
  ${media.md} {
    &.sp-xs {
      width: 12em;
    }
    &.sp-sm {
      width: 24em;
    }
    &.sp-md {
      width: 36em;
    }
    &.sp-lg {
      width: 48em;
    }
    &.sp-xl {
      width: 60em;
    }
  }
`;
