import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@material-ui/core/Box';

export default function StatsJs() {
  return (
    <Paper elevation={1}>
      <Grid container style={{ textAlign: 'center' }}>
        <Grid item xs={12}>
          <h3>Statistiken</h3>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="inherit" noWrap>
            Studenten in den Kurs:
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="inherit" noWrap>
            Vollstandig vertig:
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="inherit" noWrap>
            Prozent des Erfolgs bei Übungen:
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="inherit" noWrap>
            5
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" value={60} />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="caption"
                component="div"
                color="text.secondary"
              >
                60%
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" value={55} />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="caption"
                component="div"
                color="text.secondary"
              >
                55%
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
