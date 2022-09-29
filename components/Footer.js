import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function Footer({}) {
  return (
    <Box
      sx={{
        width: '100%',
        height: 40,
        bottom: 0,
        padding: 0.8,
        position: 'fixed',
        backgroundColor: '#0288d1',
      }}
    >
      <Grid container>
        <Grid
          item
          xs={3}
          style={{
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Link
            href="https://www.dhbw.de/startseite"
            underline="none"
            color="white"
          >
            DHBW
          </Link>
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            textAlign: 'center',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Link href="/kontaktformular_footer" underline="none" color="white">
            Anliegen / Feedback ?
          </Link>
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            textAlign: 'center',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Link href="/AGBDatenschutz" underline="none" color="white">
            Datenschutz und AGB
          </Link>
        </Grid>

        <Grid
          item
          xs={3}
          style={{
            textAlign: 'center',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Link href="/Impressum" underline="none" color="white">
            Impressum
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
