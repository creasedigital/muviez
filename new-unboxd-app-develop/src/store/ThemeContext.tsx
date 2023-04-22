import React, { createContext, useContext, useMemo, useState } from 'react';

type AppThemeContextValue = {
  theme: string;
  toggleTheme: () => void;
};

type PropType = React.PropsWithChildren<unknown>;

export const AppThemeContext = createContext<AppThemeContextValue | null>(null);

const AppThemeProvider = ({ children }: PropType) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? prev : 'light'));
  };

  const providerValues = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <AppThemeContext.Provider value={providerValues}>
      {children}
    </AppThemeContext.Provider>
  );
};

export const useAppThemeContext = () => {
  return useContext(AppThemeContext);
};

export default AppThemeProvider;
