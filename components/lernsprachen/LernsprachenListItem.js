import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function LernsprachenMenuItem({ name, progress }) {
  return (
    <>
       <Paper elevation={5}>
        <Typography variant="inherit" noWrap>
          {name}
        </Typography>
        </Paper>
    </>
  );
}
