import * as React from 'react';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function LernsprachenKategorie({ name }) {
  return (
    <>
      <Paper
        elevation={5}
        style={{
          padding: '7px',
          textAlign: 'center',
          backgroundColor: '#0288d1',
        }}
      >
        <Typography variant="h6" noWrap color="white" fontWeight="bold">
          {name}
        </Typography>
      </Paper>
    </>
  );
}
