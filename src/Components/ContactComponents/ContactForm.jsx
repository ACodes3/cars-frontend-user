import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';

const ContactForm = () => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <Typography variant="h5" component="h2" gutterBottom>
        Contact Us
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Name"
        variant="outlined"
        required
      />
      <TextField
        fullWidth
        margin="normal"
        label="Email"
        type="email"
        variant="outlined"
        required
      />
      <TextField
        fullWidth
        margin="normal"
        label="Phone"
        type="tel"
        variant="outlined"
      />
      <TextField
        fullWidth
        margin="normal"
        label="Message"
        variant="outlined"
        multiline
        rows={4}
        required
      />
      <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
        Send
      </Button>
    </Box>
  );
};

export default ContactForm;
