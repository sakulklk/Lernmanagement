import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import * as React from 'react';
import { useState } from 'react';

const questions = [
  {
    question: 'Was ist React?',
    answers: [
      'Ein Motorrad',
      'Eine gesellschaftliche Ordnung',
      'Ein Framework',
      'Ein Bauwerk',
    ],
    correct: 'Ein Framework',
  },
  {
    question: 'Wofür steht JS?',
    answers: ['JumboScript', 'JavaScript', 'JuvenileScript', 'JakartaSkript'],
    correct: 'JavaScript',
  },
];

let nextQuestion = true;
let currentQuestion = 0;
let currentAnswers = ['a', 'b', 'c', 'd'];

export default function MultipleChoice(props) {
  const [isCorrect, setCorrect] = useState(false);
  const [isWrong, setWrong] = useState(false);
  const [answerChosen, setAnswerChosen] = useState(true);
  const [toggleQuestion, toggle] = useState(false);
  const [answerID, setAnswerId] = useState('false');

  if (nextQuestion == true && typeof props.questionNumber == 'undefined') {
    currentQuestion = Math.floor(Math.random() * questions.length);
    currentAnswers = questions[currentQuestion].answers.sort(
      () => Math.random() - 0.5
    );
    nextQuestion = false;
  } else if (typeof props.questionNumber !== 'undefined') {
    console.log(props.questionNumber);
    currentQuestion = props.questionNumber;
    currentAnswers = questions[currentQuestion].answers.sort(
      () => Math.random() - 0.5
    );
    nextQuestion = false;
  }

  var question = questions[currentQuestion];
  var answers = currentAnswers;

  function handleAnswer(answer, correct) {
    if (answer == correct) {
      setCorrect(true);
      setWrong(false);
      setAnswerChosen(false);
      if (typeof props.isCorrect == 'function') {
        props.isCorrect(true);
      }

    } else {
      setCorrect(false);
      setWrong(true);
      setAnswerChosen(false);
    }
  }

  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={2}>
          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              style={{
                textAlign: 'center',
              }}
            >
              {question.question}
            </Grid>
            <Divider />
            <Grid item xs={6} style={{ textAlign: 'center' }}>
              <Button
                sx={{
                  padding: '30px',
                  margin: '10px',
                  background: answerID == 0 ? 'lightblue' : 'white',
                }}
                variant="outlined"
                onClick={() => {
                  handleAnswer(answers[0], question.correct);
                  setAnswerId(0);
                }}
              >
                {answers[0]}
              </Button>
            </Grid>
            <Grid item xs={6} style={{ textAlign: 'center' }}>
              <Button
                sx={{
                  padding: '30px',
                  margin: '10px',
                  background: answerID == 1 ? 'lightblue' : 'white',
                }}
                variant="outlined"
                variant="outlined"
                onClick={() => {
                  handleAnswer(answers[1], question.correct);
                  setAnswerId(1);
                }}
              >
                {answers[1]}
              </Button>
            </Grid>
            <Grid item xs={6} style={{ textAlign: 'center' }}>
              <Button
                sx={{
                  padding: '30px',
                  margin: '10px',
                  background: answerID == 2 ? 'lightblue' : 'white',
                }}
                variant="outlined"
                onClick={() => {
                  handleAnswer(answers[2], question.correct);
                  setAnswerId(2);
                }}
              >
                {answers[2]}
              </Button>
            </Grid>
            <Grid
              item
              xs={6}
              style={{
                textAlign: 'center',
              }}
            >
              <Button
                sx={{
                  padding: '30px',
                  margin: '10px',
                  background: answerID == 3 ? 'lightblue' : 'white',
                }}
                variant="outlined"
                onClick={() => {
                  handleAnswer(answers[3], question.correct);
                  setAnswerId(3);
                }}
              >
                {answers[3]}
              </Button>
            </Grid>
          </Grid>
          <Divider />
          <Grid item xs={8} style={{ textAlign: 'center' }}>
            {/*{isCorrect ? <Alert severity="success">Richtig!</Alert> : <></>}
            {isWrong ? <Alert severity="error">Falsch!</Alert> : <></>}*/}
            {answerChosen ? <>Bitte wählen Sie eine Antwort aus!</> : <></>}
          </Grid>
          {/* <Grid item xs={4} style={{ textAlign: 'center' }}>

            <Button
              variant="outlined"
              onClick={() => {
                nextQuestion = true;
                toggle(!toggleQuestion);
                setCorrect(false);
                setWrong(false);
                setAnswerChosen(true);
              }}
            >
              Nächste Frage
            </Button>
          </Grid> */}

        </Paper>
      </Container>
    </div>
  );
}
