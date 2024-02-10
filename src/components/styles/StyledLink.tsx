import { ReactNode } from 'react';
import { styled } from 'styled-components';

import { Styled } from './Styled';

const config = { shouldForwardProp: (p: string) => p !== 'locale' };

/**
 * UnstyledLink
 * @styled-components
 * @description
 * Link with no style
 *
 */
export const UnstyledLink = styled.a.withConfig(config)`
  text-decoration: none;
  &:visited {
    color: currentColor;
  }
`;

/**
 * StyledLink
 * @styled-components
 * @description
 * Styled link
 *
 */
export const StyledLink = styled(Styled)`
  align-content: center;
  align-items: center;
  background-color: var(--sp-bg-color);
  color: var(--sp-font-color);
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  padding: 6px 8px;
  text-decoration: none;

  &:active {
    opacity: 0.5;
  }
  &:hover {
    opacity: 0.7;
  }
`;

type LinkableType = { children?: ReactNode; link?: string };
/**
 * Linkable
 * @description
 * Allow to turn any component into link
 */
export function Linkable(props: LinkableType) {
  const { link, children } = props;
  if (!link) return <>{children}</>;
  return <UnstyledLink href={link}>{children}</UnstyledLink>;
}
