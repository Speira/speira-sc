import { styled } from 'styled-components';

import { media } from '../../utils/responsive.utils';

import { Styled } from './Styled';

/**
 * StyledDragAndDrop
 * @styled-components
 */
export const StyledDragAndDrop = styled(Styled)`
  background-color: var(--sp-bg-color);
  border-radius: var(--sp-radius);
  cursor: move;
  padding: 0.5rem 1rem;
  width: auto;
  .sp-placeholder {
    font-style: italic;
  }
  .sp-upload {
    padding: 0;
    visibility: hidden;
  }
  ${media.xs} {
    padding: 1em 2em;
  }
`;
