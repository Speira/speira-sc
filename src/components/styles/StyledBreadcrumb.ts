import { styled } from 'styled-components';

import { Styled } from './Styled';

export const StyledBreadItem = styled(Styled).attrs(() => ({ as: 'li' }))`
  display: inline;
  font-weight: bold;

  &:not(:nth-child(1)):before {
    content: '\\02c3';
    color: var(--sp-soft-color);
    padding: 0 8px;
  }
  a {
    color: var(--sp-soft-color);
    cursor: pointer;
    text-decoration: none;
  }
  a:hover {
    color: var(--sp-font-color);
    text-decoration: underline;
  }
  .sp-current {
    color: var(--sp-font-color);
  }
`;

/**
 * StyledBreadcrumb
 * @styled-components
 */
export const StyledBreadcrumb = styled(Styled).attrs(() => ({ as: 'ul' }))`
  display: flex;
  font-size: 0.9rem;
  list-style: none;
  padding: 0px 0px;
  margin: 0;
`;
