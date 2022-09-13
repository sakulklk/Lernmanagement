import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function BoxSx() {
  return (
    <Box
      sx={{
        width: '100%',

        height: 300,
        m: 3,
        position: 'fixed',
      }}
    >
      <Typography style={{ lineHeight: 2.5 }}>
        <b> Auf dieser Seite </b>
        <br />
        1. Inhalt mit verlinkung
        <br />
        2. Inhalt mit verlinkung
        <br />
        3. Inhalt mit verlinkung
      </Typography>
    </Box>
  );
}
