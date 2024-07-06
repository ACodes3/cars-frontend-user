import { Box, Typography } from '@mui/material';
import React from 'react';

const ContactMap = () => {
  return (
    <Box mt={4}>
      <Typography variant="h5" component="h2" gutterBottom>
        Our Location
      </Typography>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0823069171456!2d-122.41941568468292!3d37.77492977975998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085815c0f3b0b29%3A0xb9d7a1b2c38b2d59!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1611073032690!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      />
    </Box>
  );
};

export default ContactMap;
