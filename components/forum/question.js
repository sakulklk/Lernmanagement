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

export default function Question() {
  return (
    <Grid item xs={12}>
      <Divider />
      <List>
        <ListItem key="1">
          <Grid container>
            <ListItemIcon>
              <Avatar
                alt="Jessica Prall"
                src="https://material-ui.com/avatar/1.jpg"
              />
            </ListItemIcon>
            <ListItemText primary="Jessica Prall"></ListItemText>
            <Grid item xs={2}></Grid>
          </Grid>
        </ListItem>
        <ListItem key="2">
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              Übung Seite öffnet sich nicht
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <ListItemText
                align="left"
                secondary="Seit der letzten update..."
              ></ListItemText>
            </Grid>
          </Grid>
        </ListItem>
      </List>
      <Divider />
    </Grid>
  );
}
