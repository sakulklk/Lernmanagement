import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Languages() {
  const loggedIn = false;

  const languages = [
    'JavaScript',
    'Ruby',
    'Python',
    'C#',
    'HTML',
    'CSS',
    'PHP',
    'C++',
    'Prolog',
  ];
  return (
    <>
      <Paper
        elevation={5}
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
        }}
      >
        <Typography variant="subtitle1">
          Willkommen ! Tipp: Melde Dich an um hier immer deine aktuellen
          Lernsprachen zu sehen. Unten kannst Du aus einer der populärsten
          Programmiersprachen wählen oder du navigierst über das Menü zu allen
          Sprachen.
        </Typography>
      </Paper>
      <Paper
        elevation={5}
        style={{
          margin: ' auto',
          width: '70%',
        }}
      >
        <List>
          
          {languages.map((language) => (
            <ListItem>
              <Grid container spacing={1}>
                <Grid item xs style={{ textAlign: 'center' }}>
                  <Typography variant="subtitle1">{language}</Typography>
                </Grid>
                <Grid item xs style={{ textAlign: 'center' }}>
                  <Button variant="contained" color="secondary" size="small">
                    {' '}
                    lernen{' '}
                  </Button>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
      </Paper>
    </>
  );
}
