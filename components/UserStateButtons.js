import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import InfoPopper from './InfoPopper.js';
import IconButton from '@mui/material/IconButton';

export default function UserStateButtons(props) {
  let [userState, setUserState] = React.useState('loggedStudent');

  function setNotLogged() {
    setUserState((userState = 'notLogged'));
    props.notLogged();
  }
  function setLoggedStudent() {
    setUserState((userState = 'loggedStudent'));
    props.loggedStudent();
  }
  function setLoggedTeacher() {
    setUserState((userState = 'loggedTeacher'));
    props.loggedTeacher();
  }

  return (
    <>
      <Grid container style={{ display: 'flex', justifyContent: 'end' }}>
        <Paper>
          <Grid container style={{ marginRight: '50px' }}>
            <Grid item={3}>
              <Grid container>
                <InfoPopper
                  text1="Untersuchen Sie hier die verschiedenen Ansichten der Prototyp-Webseite je nach Anmeldestatus."
                  text2="In Zukunft muss hierbei ein Backend implementiert werden,
                welches die Ansichten automatisches anpasst."
                />

                <Typography
                  variant="subtitle2"
                  style={{
                    paddingTop: '7px',
                    paddingRight: '5px',
                    color: 'grey',
                  }}
                >
                  {' '}
                  Unterschiedliche Ansichten
                </Typography>
              </Grid>
            </Grid>
            <Grid item={3}>
              <Button onClick={setNotLogged}>Kein Login</Button>
            </Grid>
            <Grid item={3}>
              <Button onClick={setLoggedStudent}>Login Student</Button>
            </Grid>
            <Grid item={3}>
              <Button onClick={setLoggedTeacher}>Login Dozent</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}
