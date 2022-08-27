import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/joy/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

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
          <Grid container spacing={1}>
            <Grid item xs={10}>
              <TextField
                placeholder="Frage für das Forum"
                variant="outlined"
                color="primary"
              />
            </Grid>
            <Grid item xs={2}>
              <div>
                <Button variant="outlined">
                  <SendIcon />
                </Button>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
