import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function Footer({}) {
  return (
    <Box
      sx={{
        marginTop: '10px',
        width: '100%',
        height: 55,
        bottom: 0,
        padding: 0.8,
        position: 'static',
        backgroundColor: 'primary.main',
      }}
    >
      <Grid container>
        <Grid item xs={3} style={{ textAlign: 'center' }}>
          <Link href="#" underline="none" color="white">
            DHBW
          </Link>
        </Grid>
        <Grid item xs={3} style={{ textAlign: 'center', color: 'white' }}>
          <Link href="/kontaktformular_footer" underline="none" color="white">
            Anliegen / Feedback ?
          </Link>
        </Grid>
        <Grid item xs={3} style={{ textAlign: 'center', color: 'white' }}>
          <Grid container>
            <Grid item xs={12} style={{ textAlign: 'center', color: 'white' }}>
              <Link href="#" underline="none" color="white">
                Datenschutzrichtlinien
              </Link>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center', color: 'white' }}>
              <Link href="#" underline="none" color="white">
                AGB
              </Link>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={3} style={{ textAlign: 'center', color: 'white' }}>
          <Link href="#" underline="none" color="white">
            Impressum
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
