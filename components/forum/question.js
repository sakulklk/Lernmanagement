import * as React from 'react';
import Avatar from '@mui/material/Avatar';

import Grid from '@mui/material/Grid';

import Divider from '@mui/material/Divider';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

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
