import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Crosswords from '../../uebungen/Crosswords.js';

export default function RandomQuestionPicker() {
  const randomQuestions = [
    <Crosswords />,
    'Random Übung 2 (Lukas)',
    'Random Übung 3 (Lukas)',
    'Random Übung 4 (Lukas)',
  ];

  let [randomNumber, setRandomNumber] = React.useState(
    Math.floor(Math.random() * randomQuestions.length)
  );
  function handleClickOnNext() {
    setRandomNumber(
      (randomNumber = Math.floor(Math.random() * randomQuestions.length))
    );
  }

  const random = Math.floor(Math.random() * randomQuestions.length);
  return (
    <Paper elevation={5} style={{ margin: '40px', height: '500px' }}>
      <Grid container style={{ height: '100%' }}>
        <Grid item xs={12} style={{ height: '80%', textAlign: 'center' }}>
          <Paper
            style={{
              height: '100%',
              textAlign: 'center',
            }}
          >
            {randomQuestions[randomNumber]}
          </Paper>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4} style={{ textAlign: 'center' }}>
          <IconButton
            aria-label="RedoOutlinedIcon"
            color="primary"
            size="large"
            onClick={handleClickOnNext}
          >
            <RedoOutlinedIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item xs={4}>
          {' '}
        </Grid>
      </Grid>
    </Paper>
  );
}
