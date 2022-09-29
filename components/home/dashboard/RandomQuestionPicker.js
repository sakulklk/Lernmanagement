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
import Alert from '@mui/material/Alert';

export default function RandomQuestionPicker() {
  let [correctStatus, setCorrectStatus] = React.useState(false);
  let [message, setMessage] = React.useState('no');

  function isCorrect(correct) {
    if (correct) {
      setCorrectStatus((correctStatus = true));
    }
  }
  function handleCheckIfCorrect() {
    if (correctStatus == true) {
      setMessage((message = 'correctMessage'));
    } else {
      setMessage((message = 'wrongMessage'));
    }
    setCorrectStatus((correctStatus = false));
  }
  const randomQuestions = [
    <Crosswords isCorrect={isCorrect} />,
    <GapText isCorrect={isCorrect} />,
    <MultipleChoice isCorrect={isCorrect} />,
  ];

  let [randomNumber, setRandomNumber] = React.useState(
    Math.floor(Math.random() * randomQuestions.length)
  );
  function handleClickOnNext() {
    //oldRandomNumber = randomNumber
    setRandomNumber(
      //while(oldRandomNumber == randomNumber){
      (randomNumber = Math.floor(Math.random() * randomQuestions.length))
      //oldRandomNumber = randomNumber
      // }
    );
    setCorrectStatus((correctStatus = false));
    setMessage((message = 'no'));
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
            {message == 'correctMessage' ? (
              <Alert severity="success">Richtig !</Alert>
            ) : null}
            {message == 'wrongMessage' ? (
              <Alert severity="error">Versuche es nochmal ! </Alert>
            ) : null}

            <IconButton
              aria-label="CheckBoxIcon"
              color="primary"
              size="large"
              onClick={handleCheckIfCorrect}
            >
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
