import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/joy/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';
export default function Dashboard() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
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
            <Button href="/home_dashboard_random_challenge" size="small">
              Zufällige Übungen
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            elevation={5}
            style={{ margin: '10px', padding: '10px', textAlign: 'center' }}
          >
            <Button href="/home_dashboard_random_challenge" size="small">Challenges</Button>
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
        {' '}
        <TextareaAutosize
          placeholder="Frage ? Ab damit ins Forum..."
          style={{ width: '100%', padding: '20px', border: '2px solid gray' }}
        />
        <Button size="small">
          <SendIcon />
        </Button>
      </Paper>
    </>
  );
}
