import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          width: 200,
          height: 200,
          position: 'fixed',
        },
      }}
    >
      <Paper elevation={5}>
        <Typography>hgf</Typography>
      </Paper>
    </Box>
  );
}
