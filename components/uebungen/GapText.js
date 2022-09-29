import * as React from 'react';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import Grid from '@mui/material/Grid';

const texts = [
  {
    text: [
      'JavaScript ist eine ',
      ' ',
      ' die üblicherweise in Webseiten Verwendung findet und dann durch den ',
      ' ',
      ' des Besuchers ausgeführt wird. Ursprünglich, im Jahr 1995, wurde JavaScript noch ',
      ' ',
      ' genannt und diente in erster Linie dazu, die Formulareingaben eines Besuchers zu überprüfen. Es wurde von ',
      ' ',
      ' entwickelt und fand später in allen Browsern Verwendung. Üblicherweise wird JavaScript gemeinsam mit der Beschreibungssprache HTML und der Stylesheet-Sprache CSS verarbeitet. ',
      ' ',
      ' sorgt dabei für den Aufbau des Grundgerüsts der Webseite, mittels ',
      ' ',
      ' erfolgt die Formatierung.',
    ],
    answers: [
      'Skriptsprache',
      'Browser',
      'Livescript',
      'Netscape',
      'HTML',
      'CSS',
    ],
  },
];

function handleAnswer(chosenAnswers, correctAnswers, props) {
  chosenAnswers = chosenAnswers.filter((index) => !isNaN(index));
  if (chosenAnswers.length != correctAnswers.length) {
    return false; //not all gaps filled yet
  }
  for (var i = 0; i < correctAnswers.length; i++) {
    if (chosenAnswers[i] != correctAnswers[i]) {
      return false; //answers incorrect
    }
  }
  if (typeof props.isCorrect == 'function') {
    props.isCorrect(true);
  }
  return true;
}

var started = false;
var currentQuestion = texts[0];
var currentAnswers = texts[0].answers;
var currentCorrectAnswers = currentAnswers;

export default function GapText(props) {
  const [selectedAnswer, setSelectedAnswer] = useState('none');
  const [chosenAnswers, setChosenAnswers] = useState([]);
  const [toggle, toggleRefresh] = useState(false);

  if (!started) {
    currentQuestion = Math.floor(Math.random() * texts.length);
    currentAnswers = [...texts[currentQuestion].answers].sort(
      () => Math.random() - 0.5
    );
    currentCorrectAnswers = texts[currentQuestion].answers.map((answer) => {
      return currentAnswers.indexOf(answer);
    });
    started = true;
  }

  return (
    <div style={{ fontSize: '20px', marginTop: '50px' }}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid container spacing={0} sx={{ justifyContent: 'center' }}>
          {currentAnswers.map((answer, id) => (
            <div>
              {chosenAnswers.indexOf(id) == -1 ? (
                <Paper
                  onClick={() => {
                    setSelectedAnswer(id);
                  }}
                  elevation={2}
                  sx={{
                    width: '10em',
                    height: '2em',
                    textAlign: 'center',
                    float: 'left',
                    fontSize: '30px',
                    margin: '1em',
                    background: selectedAnswer == id ? 'lightblue' : 'white',
                  }}
                >
                  {answer}
                </Paper>
              ) : (
                <></>
              )}
            </div>
          ))}
        </Grid>
      </Box>
      <div>
        {texts[currentQuestion].text.map((textPart, id) => {
          return (
            <div style={{ display: 'inline' }}>
              {' '}
              {textPart === ' ' && isNaN(chosenAnswers[id]) ? (
                <div
                  style={{
                    display: 'inline-block',
                    border: '1px solid black',
                    borderRadius: '15px',
                  }}
                  id={id}
                  onClick={() => {
                    if (selectedAnswer != 'none') {
                      var newChosenAnswers = chosenAnswers;
                      newChosenAnswers[id] = selectedAnswer;
                      handleAnswer(
                        newChosenAnswers,
                        currentCorrectAnswers,
                        props
                      );
                      setChosenAnswers(newChosenAnswers);
                      setSelectedAnswer('none');
                    }
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
              ) : (
                textPart
              )}
              {textPart === ' ' && !isNaN(chosenAnswers[id]) ? (
                <div
                  style={{
                    display: 'inline',
                    border: '1px solid black',
                    borderRadius: '15px',
                  }}
                >
                  &nbsp;{currentAnswers[chosenAnswers[id]]}
                  <Button
                    sx={{ margin: 'auto' }}
                    variant="text"
                    onClick={() => {
                      var newChosenAnswers = chosenAnswers;
                      delete newChosenAnswers[id];
                      handleAnswer(
                        newChosenAnswers,
                        currentCorrectAnswers,
                        props
                      );
                      setChosenAnswers(newChosenAnswers);
                      toggleRefresh(!toggle);
                    }}
                  >
                    <DeleteForeverRoundedIcon />
                  </Button>
                </div>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
