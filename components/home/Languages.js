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
    { name: 'JavaScript', route: '/kapitelJS_na' },
    { name: 'HTML', route: '/' },
    { name: 'CSS', route: '/' },
    { name: 'PHP', route: '/' },
    { name: 'Python', route: '/' },
    { name: 'C#', route: '/' },
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
        <Typography variant="subtitle1" fontWeight="bold">
          Willkommen ! Tipp: Melde Dich an um hier immer deine aktuellen
          Lernkategorien zu sehen. Unten kannst Du aus einer Liste der
          populärsten Programmiersprachen wählen oder du navigierst über das
          Menü zu allen Sprachen.
        </Typography>
      </Paper>
      <Paper
        elevation={5}
        style={{
          margin: ' auto',
          width: '30%',
        }}
      >
        <List>
          {languages.map((language) => (
            <ListItem>
              <Grid container spacing={1}>
                <Grid item xs style={{ textAlign: 'center' }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {language.name}
                  </Typography>
                </Grid>
                <Grid item xs style={{ textAlign: 'center' }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    href={language.route}
                  >
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
