import React from 'react';
import { Box, Tooltip, IconButton, useTheme } from '@mui/material';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useMuiThemeProvider } from '../../../../styles/components/MuiThemeProvider';

export default function ThemeSwitcher() {
  const colorMode = useMuiThemeProvider();
  const theme = useTheme();

  return (
    <Box flexGrow={0}>
      <Tooltip title={`Switch to ${theme.palette.mode === 'light' ? 'Dark mode' : 'Light mode'}`}>
        <IconButton sx={{ ml: 0 }} onClick={colorMode.toggleColorMode} color="inherit" size="small">
          {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Tooltip>
    </Box>
  );
}
