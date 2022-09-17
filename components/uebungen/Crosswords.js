import * as React from 'react';
import Grid from '@mui/material/Grid';

export default function Crosswords() {
  const questions = [
    {
      questions: [
        '1: Wofür steht JS?',
        '2: startet eine Schleife',
        '3: Name eines Frameworks für JS',
        '4: Wie nennt einzelne Elemente, die per <Elemente> in React aufrufbar sind?',
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

  function createGridFromArray() {
    return (
      <div>
        <div>
          {questions[0].grid.map((row, idRow) => {
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
                            height: '50px',
                            width: '50px',
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
                            height: '50px',
                            width: '50px',
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
                            height: '50px',
                            width: '50px',
                            marginTop: '-1px',
                            marginLeft: '-1px',
                          }}
                        >
                          <input
                            type="text"
                            maxLength="1"
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

  function createQuestionsFromArray() {
    return (
      <div>
        <Grid container spacing={4}>
          {questions[0].questions.map((element, idElement) => {
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

  return (
    <div style={{ marginBottom: '65px' }}>
      {createQuestionsFromArray()} {createGridFromArray()}
    </div>
  );
}
