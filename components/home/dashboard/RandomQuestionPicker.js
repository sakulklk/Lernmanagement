import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Crosswords from '../../uebungen/Crosswords.js';
import GapText from '../../uebungen/GapText.js';
import MultipleChoice from '../../uebungen/MultipleChoice.js';
import DragDrop from '../../uebungen/DragDrop.js';

export default function RandomQuestionPicker() {
  function isCorrect(correct) {
    if (correct) {
      alert('correct');
    }
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
          margin: '30px',
          marginBottom: '5px',
          height: '600px',
          display: 'flex',
          padding: '20px',
        }}
      >
        {randomQuestions[randomNumber]}
      </Paper>
      <Paper
        elevation={5}
        style={{
          margin: '0px 30px',
          marginBottom: '30px',
          height: '60px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <IconButton
          aria-label="RedoOutlinedIcon"
          color="primary"
          size="large"
          onClick={handleClickOnNext}
        >
          <RedoOutlinedIcon fontSize="large" />
        </IconButton>
      </Paper>
    </>
  );
}
