import React, { createContext, PropsWithChildren, useContext } from 'react';
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material';
import { getDesignTokens } from '../../themes/themes';

type ColorModeContextProps = {
  toggleColorMode: () => void;
};

export const ColorModeContext = createContext<ColorModeContextProps>({ toggleColorMode: () => {} });

export const useMuiThemeProvider = () => useContext(ColorModeContext);

export default function MuiThemeProvider({ children }: PropsWithChildren) {
  const [mode, setMode] = React.useState<PaletteMode>('light');

  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
