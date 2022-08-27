import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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
        style={{ margin: '10px', padding: '10px', textAlign: 'center' }}
      >
        Willkommen ! Tipp: Melde Dich an um hier immer deine aktuellen
        Lernsprachen zu sehen.
      </Paper>
      <Paper elevation={5} style={{ margin: '10px' }}>
        <List style={{ maxHeight: '250px', overflowY: 'scroll' }}>
          {languages.map((language) => (
            <ListItem>
              <Grid container spacing={1}>
                <Grid item xs style={{ textAlign: 'center' }}>
                  {language}
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
