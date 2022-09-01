import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Textfield() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Um Adminrechte zu beantragen  geben sie uns bitte  ihre E-Mail an. Wir schicken ihnen asnchliessend einen Bestätigungscode."
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
    </Box>
  );
}
