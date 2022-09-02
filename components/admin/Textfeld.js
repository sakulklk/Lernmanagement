import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Textfield() {
  return (
    //ich mache hier jetzt einfach header rein falls es nicht gut ist wieder raus machen
    <div>
      <h3>
        Um Adminrechte zu beantragen, geben Sie uns bitte im folgenden Feld Ihre
        E-Mail an. <br></br> Wir schicken Ihnen anschließend einen Bestätigungscode.
      </h3>
    </div>
    /*
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '130ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Um Adminrechte zu beantragen  geben sie uns bitte im folgenden Feld ihre E-Mail an. Wir schicken ihnen anschliessend einen Bestätigungscode."
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
    </Box>
    */
  );
}
