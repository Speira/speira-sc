import { styled } from 'styled-components';

import { media } from '../../utils/responsive.utils';

import { Styled } from './Styled';

/**
 * StyledTableRowItem
 * @component
 */
export const StyledTableRowItem = styled(Styled)`
  align-items: center;
  box-shadow: -1px 0 0px 0px var(--sp-font-color);
  display: flex;
  flex-shrink: 0;
  height: 100%;
  justify-content: flex-start;
  min-width: 3em;
  overflow-x: auto;
  padding: 8px;
  text-overflow: ellipsis;
  &:first-child {
    border-left: none;
  }
  &.sp-head {
    column-gap: 4px;
    cursor: text;
    font-weight: bold;
    justify-content: center;
  }
  &.sp-center {
    justify-content: center;
  }
  &.sp-clickable {
    cursor: pointer;
  }
  &.sp-xs {
    width: 4em;
  }
  &.sp-sm {
    width: 6em;
  }
  &.sp-md {
    width: 8em;
  }
  &.sp-lg {
    width: 10em;
  }
  &.sp-xl {
    width: 12em;
  }
  ${media.xl} {
    &.sp-xs {
      width: 6em;
    }
    &.sp-sm {
      width: 9em;
    }
    &.sp-md {
      width: 13em;
    }
    &.sp-lg {
      width: 18em;
    }
    &.sp-xl {
      width: 24em;
    }
  }
`;
