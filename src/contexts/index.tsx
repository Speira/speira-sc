import { DefaultProps } from '../utils/type.utils';

import MenuProvider from './MenuContext';
import StyledProvider from './StyledContext';

/**
 * @description
 * Mix all the contexts to provide a single Provider to the main App
 * @returns
 */
export function SCContext({ children }: DefaultProps) {
  return (
    <StyledProvider>
      <MenuProvider>{children}</MenuProvider>
    </StyledProvider>
  );
}

export default SCContext;
