import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Field() {
  return (
    /*<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >*/
    <>
      <TextField
        id="outlined-basic"
        label="Bestätigunscode"
        variant="outlined"
        text-align='rigth'
        margin="normal"

      />
      </>
    //  </Box> 
  );
}

//  Bestätigungscode Fenster*/
