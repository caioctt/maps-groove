import React from 'react';
import { Box, Switch } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useMuiThemeProvider } from '../../styles/components/MuiThemeProvider';

export default function ThemeSwitch() {
  const { toggleTheme } = useMuiThemeProvider();

  return (
    <Box display="flex" margin="auto">
      <Switch
        sx={{ m: 0 }}
        onChange={toggleTheme}
        icon={<LightModeIcon sx={{ m: 0 }} />}
        checkedIcon={<DarkModeIcon sx={{ m: 0 }} />}
      />
    </Box>
  );
}
