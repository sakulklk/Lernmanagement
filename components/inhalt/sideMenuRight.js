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
        <a href="#stringsFürText"> Strings für Text </a> <br />
        <a href="#ausgabe">Ausgabe auf Bildschirm </a>
        <br />
        <a href="#umgebung">Programmierumgebung </a>
        <br />
        <a href="#inspo">Inspiration </a>
        <br />
        <Divider />
        <br />
        <b>Noch Fragen?</b>
        <br />
        <a href="/forum">
          Dann ins Forum damit!
          <ArrowForwardIcon></ArrowForwardIcon>
        </a>
        <br />
        <b>Bitte gebe dein Feedback zu der Übung!</b>
        <br />
        <a href="/feedbackBogen">
          Hier geht es zum Feedback Bogen <ArrowForwardIcon></ArrowForwardIcon>
        </a>
      </Typography>
    </Box>
  );
}
