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

export default function Updatepost() {
  return (
    <Grid item xs={12}>
      <List>
        <ListItem key="1">
          <Grid container>
            <Grid item xs={2}>
              <ListItemText align="left" secondary="Update"></ListItemText>
            </Grid>
            <Grid item xs={3}>
              <ListItemText
                align="left"
                secondary="2.0: neue Ubungen"
              ></ListItemText>
            </Grid>
            <Grid item xs={5}>
              <ListItemText
                align="left"
                secondary="Die Update vom 01.09..."
              ></ListItemText>
            </Grid>
            <Grid item xs={2} style={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                href="./post"
                style={{ textAlign: 'center' }}
              >
                +
              </Button>
            </Grid>
          </Grid>
        </ListItem>
        <ListItem key="2">
          <Grid container>
            <Grid item xs={2}>
              <ListItemText align="left" secondary="Update"></ListItemText>
            </Grid>
            <Grid item xs={3}>
              <ListItemText align="left" secondary="3.0"></ListItemText>
            </Grid>
            <Grid item xs={5}>
              <ListItemText align="left" secondary="Neu..."></ListItemText>
            </Grid>
            <Grid item xs={2} style={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                href="./post"
                style={{ textAlign: 'center' }}
              >
                +
              </Button>
            </Grid>
          </Grid>
        </ListItem>
      </List>
    </Grid>
  );
}
