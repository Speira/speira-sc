import { styled } from 'styled-components';

import { ResponsiveStyle } from '../../type';
import { toStylesheet } from '../../utils/responsive.utils';

type Responsive = { $responsive?: ResponsiveStyle };

/**
 * Styled
 * @styled-components
 *  $responsive = {
 *    fontSize: "2em",
 *    width: "40px",
 *    md: {
 *      // for medium screens (and more)
 *      width: "50px"
 *    },
 *    lg: {
 *      // for large screens (and more)
 *      width: "60px"
 *    }
 *  }
 */
export const Styled = styled.div<Responsive>`
  color: var(--sp-font-color);
  display: flex;
  text-decoration: none;
  &:visited {
    color: var(--sp-font-color);
  }
  &&& {
    ${({ $responsive }) => toStylesheet($responsive) ?? ''}
  }
`;

export default Styled;
