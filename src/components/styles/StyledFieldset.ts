import { styled } from 'styled-components';

import { Styled } from './Styled';

/**
 * StyledFieldset
 * @styled-components
 */
export const StyledFieldset = styled(Styled).attrs(() => ({ as: 'fieldset' }))`
  border-color: var(--sp-font-color);
  border-width: 0.5px;
  color: var(--sp-font-color);
  max-width: 50em;
  padding: 0.7em;
  border-radius: var(--sp-radius);
  legend {
    padding: 0 2px;
  }
  &.sp-start .sp-legend {
    text-align: left;
  }
  &.sp-center .sp-legend {
    text-align: center;
  }
  &.sp-end .sp-legend {
    text-align: right;
  }
  &.sp-row .sp-fieldset-content {
    display: flex;
    grid-column-gap: 0.7em;
  }
  &.sp-column .sp-fieldset-content {
    display: inline-grid;
    grid-row-gap: 0.7em;
    grid-template-rows: auto;
    text-align: right;
  }
`;
