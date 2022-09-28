import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Crosswords from '../../uebungen/Crosswords.js';
import GapText from '../../uebungen/GapText.js';
import MultipleChoice from '../../uebungen/MultipleChoice.js';
import DragDrop from '../../uebungen/DragDrop.js';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export default function RandomQuestionPicker() {
  let [correctStatus, setCorrectStatus] = React.useState(false);

  function isCorrect() {
    setCorrectStatus((correctStatus = true));
    alert('true');
  }
  const randomQuestions = [
    <Crosswords />,
    <GapText />,
    <MultipleChoice isCorrect={isCorrect} />,
    <DragDrop />,
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
    <>
      <Paper
        elevation={5}
        style={{
          margin: '12px',
          marginBottom: '5px',
          height: '600px',
          display: 'flex',
          padding: '20px',
        }}
      >
        {' '}
        <Grid container>
          <Grid item xs={12} style={{ height: '90%' }}>
            {randomQuestions[randomNumber]}
          </Grid>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'end' }}>
            <IconButton aria-label="CheckBoxIcon" color="primary" size="large">
              <CheckBoxIcon
                fontSize="large"
                style={{ marginBotom: '0px', marginRight: '0px' }}
              />
            </IconButton>
            <IconButton
              aria-label="ArrowCircleRightIcon"
              color="primary"
              size="large"
              onClick={handleClickOnNext}
            >
              <ArrowCircleRightIcon
                fontSize="large"
                style={{ alignSelf: 'end' }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
