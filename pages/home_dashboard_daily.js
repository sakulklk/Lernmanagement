import * as React from 'react';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Crosswords from '../components/uebungen/Crosswords.js';
import IconButton from '@mui/material/IconButton';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Alert from '@mui/material/Alert';
export default function Test() {
  let [correctStatus, setCorrectStatus] = React.useState(false);
  let [message, setMessage] = React.useState('no');

  function isCorrect(correct) {
    if (correct) {
      setCorrectStatus((correctStatus = true));
    }
  }
  function handleCheckIfCorrect() {
    if (correctStatus == true) {
      setMessage((message = 'correctMessage'));
    } else {
      setMessage((message = 'wrongMessage'));
    }
    setCorrectStatus((correctStatus = false));
  }
  return (
    <>
      <NavBar status="logged" navOption="Nutzerdaten"></NavBar>

      <div style={{ marginBottom: '65px' }}>
        <Paper
          elevation={5}
          style={{
            margin: '12px',
            marginBottom: '5px',
            height: '600px',
            display: 'flex',
            padding: '20px',
          }}
        >
          {' '}
          <Grid container>
            <Grid item xs={12} style={{ height: '90%' }}>
              <Crosswords isCorrect={isCorrect} />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ display: 'flex', justifyContent: 'end' }}
            >
              <IconButton
                aria-label="CheckBoxIcon"
                color="primary"
                size="large"
                onClick={handleCheckIfCorrect}
              >
                {message == 'correctMessage' ? (
                  <Alert severity="success">Richtig !</Alert>
                ) : null}
                {message == 'wrongMessage' ? (
                  <Alert severity="error">Versuche es nochmal ! </Alert>
                ) : null}
                <CheckBoxIcon
                  fontSize="large"
                  style={{ marginBotom: '0px', marginRight: '0px' }}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      </div>
      <Footer></Footer>
    </>
  );
}
