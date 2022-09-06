import * as React from 'react';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function LernsprachenKategorie({ name, progress }) {
  return (
    <>
      <Paper elevation={5} style={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="button" noWrap>
          Kategorie 1
        </Typography>
      </Paper>
    </>
  );
}
