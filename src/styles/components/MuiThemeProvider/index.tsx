import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { lightTheme } from '../../themes/light-theme';
import { darkTheme } from '../../themes/dark-theme';

type ThemeContextProps = {
  themeName: 'lightTheme' | 'darkTheme';
  toggleTheme: () => void;
};
type ChildrenProp = {
  children?: React.ReactNode;
};

const ThemeContext = createContext({} as ThemeContextProps);

export const useMuiThemeProvider = () => {
  return useContext(ThemeContext);
};

export default function MuiThemeProvider({ children }: ChildrenProp) {
  const [themeName, setThemeName] = useState<'lightTheme' | 'darkTheme'>('lightTheme');

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) => (oldThemeName === 'lightTheme' ? 'darkTheme' : 'lightTheme'));
  }, []);

  const theme = useMemo(() => {
    return themeName === 'lightTheme' ? lightTheme : darkTheme;
  }, [themeName]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box width="100vw" height="100vw" bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
