import { createContext, useContext, useMemo, useState } from 'react';

import { DefaultProps } from '../utils/type.utils';

interface MenuContextype {
  isMenuOpened: boolean;
  setMenuOpened: (nextState: boolean) => void;
}

const MenuContext = createContext<MenuContextype | null>(null);

/**
 * MenuProvider
 * @provider
 */
export default function MenuProvider(props: DefaultProps) {
  const [isMenuOpened, setMenuOpened] = useState(false);
  const value = useMemo(
    () => ({
      isMenuOpened,
      setMenuOpened,
    }),
    [isMenuOpened],
  );
  return <MenuContext.Provider {...props} value={value} />;
}

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context)
    throw new Error(
      'The component calling useMenu must be inside MenuProvider',
    );
  return context;
};
