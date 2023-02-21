import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import styled from '@mui/styled-engine';

import PinIcon from '@mui/icons-material/PinDrop';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-router-dom';
import ThemeSwitcher from './components/ThemeSwitcher';

const StyledAppBar = styled(AppBar)({
  background: 'linear-gradient(to bottom, #1f2c67, #030303)',
  opacity: '0.95',
  minHeight: '30px',
  display: 'flex',
});

const StyledContainer = styled(Container)({
  height: '40px',
  minHeight: '40px',
  display: 'flex',
  alignItems: 'center',
});

const StyledToolbar = styled(Toolbar)({
  height: '40px',
  minHeight: '40px',
});

const pages = ['About'];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <StyledAppBar position="static">
      <StyledContainer maxWidth="xl">
        <StyledToolbar disableGutters>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">
            <Typography
              variant="h6"
              noWrap
              alignItems="center"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 900,
                letterSpacing: '.15rem',
                textDecoration: 'none',
              }}
            >
              <PinIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              GROOVEMAPS
            </Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              height: '40px',
              minHeight: '30px',
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <PinIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">
              GROOVEMAPS
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <ThemeSwitcher />
        </StyledToolbar>
      </StyledContainer>
    </StyledAppBar>
  );
}
