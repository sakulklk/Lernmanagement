import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function BoxSx() {
  return (
    <Box
      sx={{
        width: '100px',
        backgroundColor: 'blue',
        height: 300,
        b: 6,
        position: 'fixed',
      }}
    >
      <Typography>jhbg</Typography>
    </Box>
  );
}
