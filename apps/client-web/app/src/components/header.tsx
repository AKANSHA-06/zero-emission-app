'use client';

import UserIcon from '@mui/icons-material/AccountCircle';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import Drawer from '@mui/material/Drawer';
import { OptimizationForm } from './form';

const drawerWidth = 300;

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  boxSizing: 'border-box',
                },
              }}
              variant="permanent"
              anchor="left"
            >
              <OptimizationForm />
            </Drawer>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              disableRipple
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ color: '#fff', ml: 1 }}
              >
                ZERO EMISSION APP
              </Typography>
            </IconButton>
          </div>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography>Welcome </Typography>
            <UserIcon />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
