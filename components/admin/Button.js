import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//habe fullWidth in TextField reingemacht
export default function BasicTextFields() {
  return (
    /*<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >*/
    <>
      <TextField
        id="outlined-basic"
        label="Bitte geben sie Ihre E-Mail hier ein"
        variant="outlined"
        fullWidth
      />
    </>
    // </Box>
  );
}
