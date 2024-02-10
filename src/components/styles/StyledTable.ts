import { styled } from 'styled-components';

import { Styled } from './Styled';

/**
 * StyledTable
 * @component
 */
export const StyledTable = styled(Styled)`
  border: 1px solid var(--sp-bg-color);
  border-radius: 4px;
  box-shadow: 0 0 2px -1px var(--sp-font-color) inset;
  display: inline-grid;
  max-width: 100%;
  min-height: 6em;
  min-width: 2em;
  overflow: auto auto;
  padding: 0em;
  position: relative;
`;
