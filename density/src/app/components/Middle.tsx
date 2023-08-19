import React from 'react';
import { Box, Typography } from '@mui/material';

const Middle = () => {
  return (
    <Box display="flex" justifyContent="space-around" alignItems="center" p={4}>
      {/* Conversion Fee */}
      <Box textAlign="center">
        <Typography variant="h4" style={{ color: 'white' }}>0%</Typography>
        <Typography style={{ color: 'white' }}>Conversion Fee (USDT - INR Pair)</Typography>
      </Box>

      {/* Lifetime Volume Traded */}
      <Box textAlign="center">
        <Typography variant="h4" style={{ color: 'white' }}>250Mn+</Typography>
        <Typography style={{ color: 'white' }}>Lifetime Volume Traded</Typography>
      </Box>

      {/* Total Tradable Pairs */}
      <Box textAlign="center">
        <Typography variant="h4" style={{ color: 'white' }}>36+</Typography>
        <Typography style={{ color: 'white' }}>Total Tradable Pairs</Typography>
      </Box>

      {/* Total Users */}
      <Box textAlign="center">
        <Typography variant="h4" style={{ color: 'white' }}>12000+</Typography>
        <Typography style={{ color: 'white' }}>Total Users</Typography>
      </Box>
    </Box>
  );
};

export default Middle;
