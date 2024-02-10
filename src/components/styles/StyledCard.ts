import { styled } from 'styled-components';

import { Styled } from './Styled';

/**
 * StyledCard
 * @styled-component
 */
export const StyledCard = styled(Styled)`
  align-items: center;
  background-color: var(--sp-bg-color);
  border-radius: 2em;
  box-shadow: 0px 0px 0px 1px var(--sp-font-color);
  color: var(--sp-font-color);
  display: flex;
  flex-direction: column;
  height: 250px;
  justify-content: center;
  padding: 1rem;
  row-gap: 1rem;
  width: 260px;
  &.sp-clickable {
    cursor: pointer;
  }
  &.sp-clickable:hover {
    transform: scale(0.96);
    transition: all 0.2s;
  }
  &.sp-clickable:active {
    opacity: 0.7;
  }
`;
