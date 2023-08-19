// components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { PlayCircleFilled } from '@mui/icons-material';
import Image from 'next/image';

const Navbar = () => {
  return (
    <AppBar position="static" color="inherit" sx={{ backgroundColor: 'black' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Typography variant="h6" component="div">
          <Image
            src="https://density.exchange/_next/image?url=%2Fimages%2FMainLogo.png&w=640&q=75"
            alt="Logo"
            width={120}
            height={40}
          />
        </Typography>
        <div>
          <Button color="inherit" sx={{ color: 'white' }}>Career</Button>
          <Button color="inherit" sx={{ color: 'white' }}>Blogs</Button>
          <Button color="inherit" sx={{ color: 'white' }}>LeaderBoard</Button>
          <Button color="inherit" sx={{ color: 'white' }}>Fee Structure</Button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="https://density.exchange/images/PlayStoreNav.svg"
            alt="Google Play"
            width={20}
            height={20}
          />
          <Button
            color="primary"
            variant="contained"
            startIcon={<PlayCircleFilled />}
            sx={{ backgroundColor: 'black' }}
          >
            Trade Now
          </Button>
        </div>
      </Toolbar>
    </AppBar>
    
  );
};

export default Navbar;
