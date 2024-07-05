import { Box, Link, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box bgcolor="primary.main" color="primary.contrastText" p={4} my={6}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Car Rental
        </Typography>
        <Typography variant="body2" color="white" gutterBottom>
          <Link href="#" style={{color:"white"}}>Home</Link>
          {' | '}
          <Link href="#" style={{color:"white"}}>Documentation</Link>
        </Typography>
        <Typography variant="body2" gutterBottom>
          © Aspasija Cvetkoska, 2024. Ljubljana, Slovenia. All rights reserved
        </Typography>
        <Typography variant="body2">
          When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
