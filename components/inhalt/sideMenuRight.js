import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row-reverse',
        p: 80,
        m: 16,

        borderRadius: 10,
      }}
    >
      <Paper elevation={5}>
        <Typography>hgf</Typography>
      </Paper>
    </Box>
  );
}
