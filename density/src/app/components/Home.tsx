// pages/Home.js
import React from 'react';
import { Box, Button } from '@mui/material';

const Home = () => {
  return (
    <Box display="flex" justifyContent="space-around" alignItems="center" marginTop="50px" className="two-sided-section">
      {/* Content Side */}
      <Box flex={1}  p={4} className="content-side">
      <h2 style={{ fontSize: '3rem' ,color:"white" }}>Make every Trade count with <span style={{ color: 'yellow' }}>Crypto Futures</span></h2>
        <Button className="trade-button" variant="contained" color="primary">
          Trade Now
        </Button>
        <Box className="social-icons" mt={2}>
          <a href="#"><img src="/youtube-icon.png" alt="YouTube" /></a>
          <a href="#"><img src="/twitter-icon.png" alt="Twitter" /></a>
          <a href="#"><img src="/insta-icon.png" alt="Instagram" /></a>
        </Box>
      </Box>
      
      {/* Image Side */}
      <Box flex={1} display="flex" justifyContent="space-around" position="relative" className="image-side">
        <img src="https://density.exchange/_next/image?url=%2Fimages%2FHeroMobile.gif&w=256&q=75" alt="Web" style={{ position: 'relative', top: "80px", left: '250px', zIndex: 5, width: '30%', height: '20%' }}  />
        <img src="https://density.exchange/_next/image?url=%2Fimages%2Fweb.png&w=3840&q=75" alt="Mobile" style={{ position: 'absolute', zIndex: 1, right:"10px" }} />
      </Box>
    </Box>
    
  );
};

export default Home;
