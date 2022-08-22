import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function Dashboard() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={3}>
        <Paper
          elevation={5}
          style={{ margin: '10px', padding: '10px', textAlign: 'center' }}
        >
          Übungen
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper
          elevation={5}
          style={{ margin: '10px', padding: '10px', textAlign: 'center' }}
        >
          Challenges
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper
          elevation={5}
          style={{
            margin: '10px',
            padding: '10px',
            textAlign: 'center',
          }}
        >
          Daily
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper
          elevation={5}
          style={{
            margin: '10px',
            padding: '10px',
            textAlign: 'center',
          }}
        >
          Forum
        </Paper>
      </Grid>
    </Grid>
  );
}
