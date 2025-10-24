import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './NavBar.css';

const NavBar = () => {
  
  return (
    <AppBar position="fixed" color="transparent" elevation={0} className="navbar">
      <Toolbar className="navbar-toolbar">
        <Typography variant="h6" className="navbar-logo">
          Radu Petrescu
        </Typography>
        <Box className="navbar-links">
          <Button color="inherit" href='/portfolio/#/home'>Home</Button>
          <Button color="inherit" href='/portfolio/#/projects'>Projects</Button>
          <Button color="inherit" href='/portfolio/#/contact'>Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
