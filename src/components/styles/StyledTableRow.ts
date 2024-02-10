import { styled } from 'styled-components';

import { Styled } from './Styled';

/**
 * BaseTableRow
 * @styled-component
 */
export const StyledTableRow = styled(Styled)`
  align-items: center;
  border-bottom: 1px solid var(--sp-font-color);
  display: flex;
  justify-content: center;
  transition:
    opacity,
    top,
    background-color 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
  &:nth-child(even) {
    background: color-mix(in srgb, var(--sp-font-color) 10%, transparent);
  }
  &.sp-head {
    border-bottom: 2px solid var(--sp-color-primary);
    z-index: 1;
    max-height: 3.5em;
  }
  &.sp-xs {
    height: 2em;
  }
  &.sp-sm {
    height: 3em;
  }
  &.sp-md {
    height: 4em;
  }
  &.sp-lg {
    height: 7em;
  }
  &.sp-xl {
    height: 10em;
  }
`;
