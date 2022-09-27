import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function LanguageWidget() {
  const loggedIn = false;
  const currentLanguages = [
    {
      name: 'JavaScript',
      progress: 78,
      learningMark: 'Hello, World!',
      link: '/hello_world',
    },
    { name: 'Python', progress: 65, learningMark: 'Tkinter' },
    { name: 'HTML', progress: 90, learningMark: 'Profiwissen' },
    { name: 'CSS', progress: 77, learningMark: 'Animationen' },
    { name: 'PHP', progress: 9, learningMark: 'Anwendungsbereiche' },
    { name: 'C++', progress: 13, learningMark: 'Variablen' },
    { name: 'Prolog', progress: 55, learningMark: 'Arithmetik' },
  ];
  return (
    <>
      <Paper
        elevation={5}
        style={{ margin: '10px', padding: '10px', textAlign: 'center' }}
      >
        <Typography variant="subtitle1">
          Willkommen zurück Alex ! Lerne dort weiter wo du aufgehört hast.
        </Typography>
      </Paper>
      <Paper elevation={5} style={{ margin: '10px' }}>
        <List style={{ maxHeight: '250px', overflowY: 'scroll' }}>
          {currentLanguages.map((currentLanguage) => (
            <ListItem>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} style={{ alignItems: 'center' }}>
                  <Grid item xs={2} style={{ textAlign: 'center' }}>
                    <Typography variant="subtitle1">
                      {currentLanguage.name}{' '}
                    </Typography>
                  </Grid>
                  <Grid item xs={4} style={{ textAlign: 'center' }}>
                    <Typography variant="subtitle1">
                      {' '}
                      {currentLanguage.learningMark}{' '}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    style={{
                      textAlign: 'right',
                      alignSelf: 'center',
                    }}
                  >
                    <Typography variant="subtitle1">
                      {' '}
                      {currentLanguage.progress}%{' '}
                    </Typography>
                  </Grid>
                  <Grid item xs={3} alignSelf="center">
                    <Box sx={{ width: '100%', padding: 'auto' }}>
                      <LinearProgress
                        variant="determinate"
                        value={currentLanguage.progress}
                        color="secondary"
                        // ?  height=""
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={2} style={{ textAlign: 'center' }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      link={currentLanguages.link}
                    >
                      {' '}
                      <a link={currentLanguages.link}>lernen </a>
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </ListItem>
          ))}
        </List>
      </Paper>
    </>
  );
}
