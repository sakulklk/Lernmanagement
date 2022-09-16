import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/joy/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Typography from '@mui/material/Typography';
export default function ForumQuestion() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
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
  );
}
