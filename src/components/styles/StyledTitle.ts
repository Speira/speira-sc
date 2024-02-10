import { styled } from "styled-components";

import { Styled } from "./Styled";

/**
 * StyledTitle
 * @styled-components
 */
export const StyledTitle = styled(Styled)<{ as?: string }>`
  color: var(--sp-font-color);
  margin: 0 0 0.5em;
  padding: 0.5em;
  &.sp-no-space {
    margin: unset;
    padding: unset;
  }
`;
