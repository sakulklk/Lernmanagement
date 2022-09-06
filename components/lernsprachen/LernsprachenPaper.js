import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function LernsprachenPaper({ name, progress }) {
  return (
    <>
      <Paper
        elevation={5}
        style={{ margin: '20px auto', padding: '20px', width: '80%' }}
      >
        <Grid container>
          <Grid item xs={11}>
            <Typography variant="button" noWrap>
              {name}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Button variant="contained" color="secondary" size="small">
              {' '}
              lernen{' '}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
