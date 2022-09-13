import * as React from 'react';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';

export default function Test() {
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
          margin: 'auto ',
          marginTop: '20px',
          width: '1000px',
          height: '50px',
        }}
      >
        {' '}
      </Paper>
      <Paper
        elevation={5}
        style={{ margin: '10px auto', width: '1000px', height: '400px' }}
      >
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
          marginTop: '50px',
          width: '1000px',
          height: '50px',
        }}
      ></Paper>
      <Paper
        elevation={5}
        style={{
          margin: 'auto ',
          marginTop: '20px',
          width: '1000px',
          height: '50px',
        }}
      >
        {' '}
      </Paper>

      <Footer></Footer>
    </>
  );
}
