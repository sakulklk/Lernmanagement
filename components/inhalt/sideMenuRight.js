import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
      <Typography
        style={{ lineHeight: 2.5, fontSize: '13px', color: '#759CC9' }}
      >
        <b> Auf dieser Seite </b>
        <br />
        1. Inhalt mit verlinkung
        <br />
        2. Inhalt mit verlinkung
        <br />
        3. Inhalt mit verlinkung
        <br />
        <Divider />
        <br />
        <b>Noch Fragen?</b>
        <br />
        <a href="/forum">
          Dann ins Forum damit!
          <ArrowForwardIcon></ArrowForwardIcon>
        </a>
      </Typography>
    </Box>
  );
}
