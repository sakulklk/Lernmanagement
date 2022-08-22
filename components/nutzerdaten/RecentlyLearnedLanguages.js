import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

export default function RecentlyLearnedLanguages() {
  const recentlyLearnedLanguages = [
    { name: 'JavaScript', progress: 78 },
    { name: 'Python', progress: 65 },
    { name: 'Prolog', progress: 55 },
  ]; //drei zuletzt gelernte Sprachen werden hier festgehalten
  return (
    <Paper elevation={5}>
      <Grid container style={{ textAlign: 'center' }}>
        <Grid item xs={12}>
          <Typography> Deine zuletzt gelernten Sprachen </Typography>
        </Grid>
        {recentlyLearnedLanguages.map((recentlyLearnedLanguage) => (
          <Grid item xs={4}>
            {recentlyLearnedLanguage.name}{' '}
          </Grid>
        ))}
        {recentlyLearnedLanguages.map((recentlyLearnedLanguage) => (
          <Grid item xs={4}>
            <CircularProgress
              variant="determinate"
              value={recentlyLearnedLanguage.progress}
            />{' '}
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
