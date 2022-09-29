import * as React from 'react';
import Grid from '@mui/material/Grid';

const questions = [
  {
    questions: [
      '1: Wofür steht JS?',
      '2: startet eine Schleife',
      '3: Name eines Frameworks für JS',
      '4: Wie nennt man einzelne Elemente, die per <Elemente> in React aufrufbar sind?',
      '5: Eine Datenstruktur, die mehrere Elemente beinhaltet',
      '6: Funktion, die true zurückgibt, wenn es sich beim Eingabewert nicht um eine Zahl handelt',
    ],
    grid: [
      [' ', ' ', ' ', '1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', 'J', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      ['3', 'R', 'e', 'a', 'c', 't', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', 'v', ' ', ' ', ' ', ' ', ' ', ' ', '6', ' '],
      [' ', ' ', '5', 'a', 'r', 'r', 'a', 'y', ' ', ' ', 'i', ' '],
      [' ', ' ', ' ', 'S', ' ', ' ', ' ', ' ', ' ', ' ', 's', ' '],
      [' ', ' ', '4', 'c', 'o', 'm', 'p', 'o', 'n', 'e', 'n', 't'],
      [' ', ' ', ' ', 'r', ' ', ' ', ' ', ' ', ' ', ' ', 'a', ' '],
      ['2', 'w', 'h', 'i', 'l', 'e', ' ', ' ', ' ', ' ', 'n', ' '],
      [' ', ' ', ' ', 'p', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', 't', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ],
  },
];

function createGridFromArray(grid, props) {
  return (
    <div>
      <div>
        {grid.map((row, idRow) => {
          return (
            <div
              key={idRow}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              {row.map((element, idElement) => {
                return (
                  <div key={idElement}>
                    {!isNaN(element) && element !== ' ' ? (
                      <div
                        style={{
                          float: 'left',
                          border: '0',

                          height: '40px',
                          width: '40px',

                          textAlign: 'center',
                          backgroundColor: 'transparent',
                          fontSize: '30px',
                          fontWeight: '400',
                          marginTop: '-1px',
                          marginLeft: '-1px',
                        }}
                      >
                        {element}
                      </div>
                    ) : (
                      <></>
                    )}
                    {element === ' ' ? (
                      <div
                        style={{
                          float: 'left',
                          border: '0',

                          height: '40px',
                          width: '40px',

                          marginTop: '-1px',
                          marginLeft: '-1px',
                        }}
                      ></div>
                    ) : (
                      <></>
                    )}
                    {isNaN(element) && element !== ' ' ? (
                      <div
                        style={{
                          border: '1px solid',
                          float: 'left',

                          height: '40px',
                          width: '40px',

                          marginTop: '-1px',
                          marginLeft: '-1px',
                        }}
                      >
                        <input
                          type="text"
                          maxLength="1"
                          onKeyDown={(e) =>
                            handleInput(e, idRow, idElement, props)
                          }
                          style={{
                            border: 'none',
                            padding: '0',
                            width: '100%',
                            height: '100%',
                            textAlign: 'center',
                            backgroundColor: 'transparent',
                            fontSize: '30px',
                            fontWeight: '400',
                            textAnchor: 'middle',
                          }}
                        ></input>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function createQuestionsFromArray(questions) {
  return (
    <div>
      <Grid container spacing={4}>
        {questions.map((element, idElement) => {
          return (
            <Grid
              item
              xs={6}
              style={{
                textAlign: 'center',
              }}
            >
              {element}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

function handleAnswer(correctGrid, answerGrid, props) {
  for (var y = 0; y < correctGrid.length; y++) {
    for (var x = 0; x < correctGrid[y].length; x++) {
      if (correctGrid[y][x].toUpperCase() != answerGrid[y][x].toUpperCase()) {
        console.log('false');
        console.log(answerGrid);
        return false;
      }
    }
  }
  if (typeof props.isCorrect == 'function') {
    console.log('calling isCorrect');
    props.isCorrect(true);
  }
  console.log('correct');
  return true;
}

function handleInput(input, idRow, idColumn, props) {
  if (input.key == 'Backspace') {
    currentFilledGrid[idRow][idColumn] = ' ';
  }
  if (input.key.length != 1) {
    return false;
  }
  if (currentFilledGrid[idRow][idColumn] == ' ') {
    console.log('1aaa');
    if (input.key.toUpperCase() != input.key.toLowerCase()) {
      currentFilledGrid[idRow][idColumn] = input.key;
      handleAnswer(currentCorrectGrid, currentFilledGrid, props);
    } else {
      currentFilledGrid[idRow][idColumn] = '!';
    }
  }
}

function createEmptyGridFromSoulutionGrid(grid) {
  return grid.map((row) => {
    return row.map((element) => {
      if (isNaN(element)) {
        return ' ';
      } else {
        return element;
      }
    });
  });
}
var currentQuestion = questions[0];
var currentCorrectGrid = currentQuestion.grid;
var currentFilledGrid = createEmptyGridFromSoulutionGrid(currentCorrectGrid);
var started = false;

export default function Crosswords(props) {
  if (!started) {
    currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    currentCorrectGrid = currentQuestion.grid;
    currentFilledGrid = createEmptyGridFromSoulutionGrid(currentCorrectGrid);
    started = true;
  }

  return (
    <div style={{ marginBottom: '65px' }}>
      {createQuestionsFromArray(currentQuestion.questions)}
      {createGridFromArray(currentCorrectGrid, props)}
    </div>
  );
}
