import { ReactNode } from 'react';

import ThemeModifier from '../components/ThemeModifier';

import StyledProvider from './StyledContext';

/**
 *
 * @description
 * Used for styleguidist dev environnement only
 * @returns
 */
export default function DevContext({ children }: { children: ReactNode }) {
  return (
    <StyledProvider>
      <ThemeModifier />
      {children}
    </StyledProvider>
  );
}
