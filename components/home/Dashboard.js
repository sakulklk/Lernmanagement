import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/joy/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

export default function Dashboard() {
  return (
    <>
      <Grid
        container
        spacing={1}
        style={{ fontFamily: " 'Chakra Petch', sans-serif" }}
      >
        <Grid item xs={4}>
          <Paper
            elevation={5}
            style={{
              margin: '10px',
              padding: '10px',
              textAlign: 'center',
            }}
          >
            <Button size="small">Übungen</Button>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            elevation={5}
            style={{ margin: '10px', padding: '10px', textAlign: 'center' }}
          >
            <Button size="small">Challenges</Button>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            elevation={5}
            style={{
              margin: '10px',
              padding: '10px',
              textAlign: 'center',
            }}
          >
            <Button size="small">Daily</Button>
          </Paper>
        </Grid>
      </Grid>

      <Paper
        elevation={5}
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
        }}
      >
        <Button size="small">n</Button>
      </Paper>
    </>
  );
}
