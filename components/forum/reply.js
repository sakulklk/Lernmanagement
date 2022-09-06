import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

export default function Reply() {
  return (
    <Grid item xs={12}>
      <Divider />
      <List>
        <ListItem key="1">
          <Grid container>
            <ListItemIcon>
              <Avatar
                alt="Méline Broutin"
                src="https://material-ui.com/avatar/1.jpg"
              />
            </ListItemIcon>
            <ListItemText primary="Méline Broutin"></ListItemText>
            <Grid item xs={2}></Grid>
          </Grid>
        </ListItem>
        <ListItem key="2">
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <ListItemText
                align="left"
                secondary="Antwort text text text text text text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text text"
              ></ListItemText>
            </Grid>
          </Grid>
        </ListItem>
        <Divider />

        <ListItem key="3">
          <Grid container style={{ padding: '20px' }}>
            <Grid item xs={11}>
              <TextField label="Antworten" fullWidth />
            </Grid>
            <Grid xs={1} align="right">
              <Fab color="primary" aria-label="add">
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </ListItem>
      </List>
    </Grid>
  );
}
