/* eslint-disable import/prefer-default-export */
import { PaletteMode } from '@mui/material';
import { yellow, cyan } from '@mui/material/colors';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: yellow[700],
            dark: yellow[800],
            light: yellow[500],
            contrastText: '#ffffff',
          },
          secondary: {
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: '#ffffff',
          },
          background: {
            default: '#f7f6f3',
            paper: '#fffff',
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: yellow[700],
            dark: yellow[800],
            light: yellow[500],
            contrastText: '#ffffff',
          },
          secondary: {
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: '#ffffff',
          },
          background: {
            default: '#202124',
            paper: '#303134',
          },
        }),
  },
});
