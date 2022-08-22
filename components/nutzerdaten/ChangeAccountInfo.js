import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';

export default function ChangeAccountInfo() {
  return (
    <Paper elevation={5}>
      <Grid container sx={{ p: 2 }}>
        <Grid item xs={4}>
          <Grid container sx={{ textAlign: 'center' }}>
            <Grid item xs={12}>
              <Avatar
                alt="Alex Anderson"
                sx={{ width: 120, height: 120, margin: 'auto' }}
              />
            </Grid>
            <Grid item xs={12} sx={{ pt: 2 }}>
              <Button variant="contained" size="small">
                Bild ändern
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={8}>
                  Nutzername: Alex Anderson
                </Grid>
                <Grid item xs={4}>
                  <EditIcon />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={8}>
                  Email-Adresse: AlexAnderson@anderson.com
                </Grid>
                <Grid item xs={4}>
                  <EditIcon />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={8}>
                  Passwort: 
                </Grid>
                <Grid item xs={4}>
                  <EditIcon />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
