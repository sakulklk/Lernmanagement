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
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

export default function Test() {
  let [timer, setTimer] = React.useState('no');

  function handleClick_StartTimer() {
    setTimer((timer = 'startTimer'));
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
          <div style={{ paddingBottom: '65px' }}>

      <NavBar status="logged" navOption="Nutzerdaten"></NavBar>

      <Paper
        elevation={5}
        style={{
          margin: ' auto',
          marginTop: '30px',
          width: '1000px',
          height: '500px',
        }}
      >
        {timer == 'startTimer' ? (
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
        ) : (
          <Box
            sx={{
              display: 'flex',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h6"
              style={{
                fontWeight: 'bold',
              }}
            >
              Wenn du die Sanduhr unten anklickst, startet der Timer. Viel
              Erfolg !
            </Typography>
          </Box>
        )}
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
        {timer == 'startTimer' ? (
          <IconButton
            aria-label="ArrowForwardIosIcon"
            color="primary"
            size="large"
            onClick={handleClick_NextExercice}
          >
            <ArrowForwardIosIcon fontSize="large" />
          </IconButton>
        ) : (
          <IconButton
            aria-label="HourglassEmptyIcon"
            color="primary"
            size="large"
            onClick={handleClick_StartTimer}
          >
            <HourglassEmptyIcon fontSize="large" />
          </IconButton>
        )}
      </Paper>
</div>
      <Footer></Footer>
    </>
  );
}
