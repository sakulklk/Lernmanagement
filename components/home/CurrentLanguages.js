import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function CurrentLanguages() {
  const languages = [
    { name: 'JavaScript', progress: 78, learningMark: 'JSON' },
    { name: 'Python', progress: 65, learningMark: 'Tkinter' },
    { name: 'HTML', progress: 90, learningMark: 'Profiwissen' },
    { name: 'CSS', progress: 77, learningMark: 'Animationen' },
    { name: 'PHP', progress: 9, learningMark: 'Anwendungsbereiche' },
    { name: 'C++', progress: 13, learningMark: 'Variablen' },
    { name: 'Prolog', progress: 55, learningMark: 'Arithmetik' },
  ];

  return (
    <div>
      <Paper
        elevation={5}
        style={{ margin: '10px', padding: '10px', textAlign: 'center' }}
      >
        Willkommen zurück Alex ! Lerne dort weiter wo du aufgehört hast.
      </Paper>
      <Paper elevation={5} style={{ margin: '10px' }}>
        <List style={{ maxHeight: '250px', overflowY: 'scroll' }}>
          {languages.map((language) => (
            <ListItem>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={2} style={{ textAlign: 'center' }}>
                    {language.name}
                  </Grid>
                  <Grid item xs={4} style={{ textAlign: 'center' }}>
                    {language.learningMark}
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    style={{
                      textAlign: 'right',
                      alignSelf: 'center',
                    }}
                  >
                    {language.progress}%
                  </Grid>
                  <Grid item xs={3} alignSelf="center">
                    <Box sx={{ width: '100%', padding: 'auto' }}>
                      <LinearProgress
                        variant="determinate"
                        value={language.progress}
                        color="secondary"
                        // ?  height=""
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={2} style={{ textAlign: 'center' }}>
                    <Button variant="contained" color="secondary" size="small">
                      {' '}
                      lernen{' '}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
}
