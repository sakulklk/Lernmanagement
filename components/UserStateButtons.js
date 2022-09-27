import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';

import IconButton from '@mui/material/IconButton';

export default function UserStateButtons() {
  let [userState, setUserState] = React.useState('loggedStudent');

  function setNotLogged() {
    setUserState((userState = 'notLogged'));
    alert(userState);
  }
  function setLoggedStudent() {
    setUserState((userState = 'loggedStudent'));
    alert(userState);
  }
  function setLoggedTeacher() {
    setUserState((userState = 'loggedTeacher'));
    alert(userState);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  return (
    <>
      <Grid container style={{ display: 'flex', justifyContent: 'end' }}>
        <Paper>
          <Grid container style={{ marginRight: '50px' }}>
            <Grid item={3}>
              <Grid container>
                <Button
                  type="button"
                  aria-label="InfoIcon"
                  color="primary"
                  size="small"
                  aria-describedby={id}
                  onClick={handleClick}
                >
                  {' '}
                  <InfoIcon />
                </Button>
                <Popper id={id} open={open} anchorEl={anchorEl}>
                  <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                    <Typography display="block">
                      Untersuchen Sie hier die verschiedenen Ansichten der
                      Prototyp-Webseite je nach Anmeldestatus.
                    </Typography>
                    <Typography display="block">
                      In Zukunft muss hierbei ein Backend implementiert werden,
                      welches die Ansichten automatisches anpasst.
                    </Typography>
                  </Box>
                </Popper>

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
