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

export default function Chat(){
  return (
    <div>
       <style jsx>{`
    table: {
      minWidth: 650,
    },
    chatSection: {
      width: '100%',
      height: '80vh',
    },
    headBG: {
      backgroundColor: '#960e0e',
    },
    borderRight500: {
      borderRight: '1px solid #e0e0e0',
    },
    messageArea: {
      height: '70vh',
      overflowY: 'auto',
    },
    `}</style>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5" className="header-message">
            Chat
          </Typography>
        </Grid>
      </Grid>
      <Grid container component={Paper} className='chatSection'>
        <Grid item xs={3} className='borderRight500'>
          <List>
            <ListItem button key="JessicaPrall">
              <ListItemIcon>
                <Avatar
                  alt="Jessica Prall"
                  src="https://material-ui.com/avatar/1.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Jessica Prall"></ListItemText>
            </ListItem>
          </List>
          <Divider />
          <Grid item xs={12} style={{ padding: '10px' }}>
            <TextField
              
              label="Search"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Divider />
          <List>
            <ListItem button key="AleynaKoc">
              <ListItemIcon>
                <Avatar
                  alt="Aleyna Koc"
                  src="https://material-ui.com/avatar/1.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Aleyna Koc">Aleyna Koc</ListItemText>
              <ListItemText secondary="online" align="right"></ListItemText>
            </ListItem>
            <ListItem button key="Khemjira Sakulkla">
              <ListItemIcon>
                <Avatar
                  alt="Khemjira Sakulkla"
                  src="https://material-ui.com/avatar/3.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="KhemjiraSakulkla">
                Khemjira Sakulkla
              </ListItemText>
            </ListItem>
            <ListItem button key="MelineBroutin">
              <ListItemIcon>
                <Avatar
                  alt="Meline Broutin"
                  src="https://material-ui.com/avatar/2.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Meline Broutin">
                Meline Broutin
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={9}>
          <List className='messageArea'>
            <ListItem key="1">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    align="right"
                    primary="Hey man, What's up ?"
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText align="right" secondary="09:30"></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="2">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    align="left"
                    primary="Hey, A Good! What about you ?"
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText align="left" secondary="09:31"></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="3">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    align="right"
                    primary="Cool. i am good, let's catch up!"
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText align="right" secondary="10:30"></ListItemText>
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
          </Grid>
        </Grid>
      </Grid>
    </div>
  );

}


