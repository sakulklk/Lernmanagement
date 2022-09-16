import * as React from 'react';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function DozentenOptionen() {
  return (
    <Paper
      elevation={5}
      style={{
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#bbdefb',
      }}
    >
      <Typography variant="button" noWrap fontWeight="bold">
        Erstellen: Programmiersprache, Kategorie
      </Typography>
    </Paper>
  );
}
