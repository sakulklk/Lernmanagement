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
      route: '/hello_world',

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
        <Typography variant="h6" fontWeight="bold">
          Willkommen zurück Alex ! Lerne dort weiter wo du aufgehört hast.
        </Typography>
      </Paper>
      <Paper elevation={5} style={{ margin: '10px' }}>
        <Paper elevation={3}>
          <Grid
            container
            style={{ textAlign: 'center', background: '#0288d1' }}
          >
            <Grid item xs={2}>
              <Typography variant="h6" fontWeight="bold" color="white">
                Lernkategorie
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" fontWeight="bold" color="white">
                Aktuelles Kapitel
              </Typography>
            </Grid>
            <Grid item xs={6} color="white">
              <Typography
                variant="h6"
                fontWeight="bold"
                textAlign="left"
                paddingLeft="220px"
              >
                Fortschritt
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <List style={{ maxHeight: '250px', overflowY: 'scroll' }}>
          {currentLanguages.map((currentLanguage) => (
            <ListItem>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={2} style={{ textAlign: 'center' }}>
                    <Typography variant="h6" fontWeight="bold">
                      {currentLanguage.name}{' '}
                    </Typography>
                  </Grid>
                  <Grid item xs={4} style={{ textAlign: 'center' }}>
                    <Typography variant="h6" color="gray">
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
                    <Typography variant="subtitle1" fontWeight="bold">
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

                  <Grid
                    item
                    xs={2}
                    style={{ textAlign: 'center', paddingLeft: '25px' }}
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      size="medium"
                      href={currentLanguage.route}
                    >
                      {' '}
                      lernen
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
