import { ReactNode, useMemo, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import GlobalStyle from '../GlobalStyle';
import initTheme from '../theme';
import { ThemeInterface } from '../type';
import { mergeDeepPartial } from '../utils/object.utils';

import 'normalize.css';

type StyledProviderType = { children: ReactNode };

/**
 * StyledProvider
 * @context
 * @description
 * The Theme Manager
 */
function StyledProvider(props: StyledProviderType) {
  const { children } = props;
  const [theme, setTheme] = useState<DefaultTheme>(initTheme());
  const value: ThemeInterface = useMemo(
    () => ({
      colors: theme.colors,
      radius: theme.radius,
      boxShadow: theme.boxShadow,
      switchToDefault() {
        setTheme(initTheme());
      },
      setNextTheme(nextPartialTheme: Partial<ThemeInterface>) {
        const nextTheme = mergeDeepPartial(initTheme(), nextPartialTheme);
        setTheme(nextTheme);
      },
    }),
    [theme],
  );
  return (
    <ThemeProvider theme={value}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default StyledProvider;
