import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function Chat() {
  return (
    <div>
      {/* <style jsx>{`
    table: {
      minWidth: 650,
    },
    chatSection:{
      width:'100%',
      height: '80vh',
    },
    borderRight500: {
      borderRight: '1px solid #e0e0e0',
    },
    messageArea: {
      height: '70vh',
      overflow: 'auto',
    },
    `}</style> */}
      <Grid container>
        <Grid item xs={3}>
          <List>
            <ListItem>
              <ListItemIcon>
                <Avatar
                  alt="Alexander Anderson"
                  src="https://material-ui.com/avatar/1.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Alexander Anderson"></ListItemText>
            </ListItem>
          </List>
          <Divider />
          <Grid item xs={3} style={{ padding: '10px' }}>
            <TextField label="Search" variant="outlined" fullWidth />
          </Grid>
          <Divider />
          <List>
            <ListItem button key="Evan Adams">
              <ListItemIcon>
                <Avatar
                  alt="Evan Adams"
                  src="https://material-ui.com/avatar/1.jpg"
                />
              </ListItemIcon>
              <ListItemText secondary="Dozent" primary="Evan Adams">
                Evan Adams
              </ListItemText>
            </ListItem>
            <ListItem button key="Josh Smith">
              <ListItemIcon>
                <Avatar
                  alt="Josh Smith"
                  src="https://material-ui.com/avatar/3.jpg"
                />
              </ListItemIcon>
              <ListItemText secondary="TIF21D" primary="Josh Smith">
                Josh Smith
              </ListItemText>
            </ListItem>
            <ListItem button key="Frank Hills">
              <ListItemIcon>
                <Avatar
                  alt="Frank Hills"
                  src="https://material-ui.com/avatar/2.jpg"
                />
              </ListItemIcon>
              <ListItemText secondary=" TIF21C" primary="Frank Hills">
                Frank Hills
              </ListItemText>
            </ListItem>
          </List>
          <List>
            <ListItem button key="Group">
              <ListItemIcon>
                <AvatarGroup max={3}>
                  <Avatar
                    alt="Alexander Anderson"
                    src="https://material-ui.com/avatar/1.jpg"
                  />
                  <Avatar
                    alt="Evan Adams"
                    src="https://material-ui.com/avatar/1.jpg"
                  />
                  <Avatar
                    alt="Josh Smith"
                    src="https://material-ui.com/avatar/3.jpg"
                  />
                </AvatarGroup>
              </ListItemIcon>
              <ListItemText
                secondary="Evan Adams, Josh Smith, Me"
                primary="3 Musketiere"
              >
                Evan Adams, Josh Smith, Me
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={9}>
          <List>
            <ListItem button key="Group">
              <ListItemIcon>
                <AvatarGroup max={3}>
                  <Avatar
                    alt="Alexander Anderson"
                    src="https://material-ui.com/avatar/1.jpg"
                  />
                  <Avatar
                    alt="Evan Adams"
                    src="https://material-ui.com/avatar/1.jpg"
                  />
                  <Avatar
                    alt="Josh Smith"
                    src="https://material-ui.com/avatar/3.jpg"
                  />
                </AvatarGroup>
              </ListItemIcon>
              <ListItemText
                secondary="Evan Adams, Josh Smith, Me"
                primary="3 Musketiere"
              >
                Evan Adams, Josh Smith, Me
              </ListItemText>
            </ListItem>
          </List>
  

          <Box
            sx={{
              marginTop: 100,
              width: 'auto',
              height: 'auto',
              backgroundColor: 'blue',
              '&:hover': {
                backgroundColor: 'blue',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            {/* <Grid item xs={9}> */}
            <List className="messageArea">
              <ListItem key="1">
                <Grid container direction="column" alignItems="flex-end">
                  <Grid item xs={12}>
                    <Paper
                      elevation={1}
                      style={{
                        textAlign: 'left',
                        width: '650px',
                        padding: '10px',
                        background: '#8FB1CC',
                      }}
                    >
                      Hey, wie geht es euch?
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <ListItemText
                      align="right"
                      secondary="09:30"
                    ></ListItemText>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem key="2">
                <Grid container>
                  <Grid item xs={12}>
                    <ListItemText
                      align="left"
                      primary="Evan Adams"
                    ></ListItemText>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper
                      elevation={1}
                      style={{
                        textAlign: 'left',
                        width: '650px',
                        padding: '10px',
                        background: '#EEECF1',
                      }}
                    >
                      Hey Alex, alles gut und dir? Hast du dir schon den neuen
                      Stoff durchgelesen?
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <ListItemText align="left" secondary="09:31"></ListItemText>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem key="3">
                <Grid container direction="column" alignItems="flex-end">
                  <Grid item xs={12}>
                    <Paper
                      elevation={1}
                      style={{
                        textAlign: 'left',
                        width: '650px',
                        padding: '10px',
                        background: '#8FB1CC',
                      }}
                    >
                      Bei mir auch alles super! Nein, tätsachlich noch nicht...
                      wollen wir es zusammen machen? Josh bist du dabei?
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <ListItemText
                      align="right"
                      secondary="10:30"
                    ></ListItemText>
                  </Grid>
                </Grid>
              </ListItem>
            </List>
            <Divider />
            <Grid container style={{ padding: '20px' }}>
              <Grid item xs={11}>
                <TextField
                  id="outlined-basic-email"
                  label="Type Something"
                  fullWidth
                />
              </Grid>
              <Grid xs={1} align="right">
                <Fab color="primary" aria-label="add">
                  <SendIcon />
                </Fab>
              </Grid>
              {/* </Grid> */}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
