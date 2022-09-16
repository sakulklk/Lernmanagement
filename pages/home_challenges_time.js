import * as React from 'react';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from '@mui/material/Typography';
import Timer from 'react-compound-timer';

export default function Test() {
  let [timerStarted, setTimer] = React.useState(false);

  function handleClick_StartTimer() {
    setTimer(true);
  }

  let [score, setScore] = React.useState(0);
  function handleClick_NextExercice() {
    setScore(score + 1);
  }

  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 500) {
          return 0;
        }
        const diff = Math.random() * 1;
        return Math.min(oldProgress + diff, 500);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <NavBar></NavBar>
      <Paper
        elevation={5}
        style={{
          margin: '30px auto 20px auto ',

          width: '1000px',
          height: '50px',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h5"
          style={{ fontWeight: 'bold', padding: 'auto', lineHeight: '2' }}
        >
          Score: {score}
        </Typography>
      </Paper>
      <Paper
        elevation={5}
        style={{ margin: ' auto', width: '1000px', height: '400px' }}
      >
        <Box
          sx={{
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Timer initialTime={5500} direction="backward">
            {() => (
              <React.Fragment>
                <Typography
                  variant="h1"
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  <Timer.Seconds />
                </Typography>
              </React.Fragment>
            )}
          </Timer>
        </Box>
        <LinearProgress
          variant="determinate"
          value={progress}
          style={{ height: '10px' }}
        />
      </Paper>
      <Paper
        elevation={5}
        style={{
          margin: 'auto ',
          marginTop: '20px',
          width: '1000px',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {' '}
        <IconButton
          aria-label="ArrowForwardIosIcon"
          color="primary"
          size="large"
          onClick={handleClick_NextExercice}
        >
          <ArrowForwardIosIcon fontSize="large" />
        </IconButton>
      </Paper>

      <Footer></Footer>
    </>
  );
}
