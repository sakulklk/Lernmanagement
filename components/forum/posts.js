import * as React from 'react';

import Button from '@mui/material/Button';

import Grid from '@mui/material/Grid';

import Divider from '@mui/material/Divider';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';

export default function Posts() {
  return (
    <Grid item xs={12}>
      <List>
        <ListItem key="1">
          <Grid container>
            <Grid item xs={2}>
              <ListItemText align="left" primary="Typ"></ListItemText>
            </Grid>
            <Grid item xs={3}>
              <ListItemText align="left" primary="Title"></ListItemText>
            </Grid>
            <Grid item xs={5}>
              <ListItemText align="left" primary="Preview"></ListItemText>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                href="./post"
                style={{ textAlign: 'center' }}
              >
                +
              </Button>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </ListItem>
        <Divider />
        <ListItem key="2">
          <Grid container>
            <Grid item xs={2}>
              <ListItemText align="left" secondary="Frage"></ListItemText>
            </Grid>
            <Grid item xs={3}>
              <ListItemText
                align="left"
                secondary="Übung Seite öffnet sich nicht"
              ></ListItemText>
            </Grid>
            <Grid item xs={5}>
              <ListItemText
                align="left"
                secondary="Seit der letzten update..."
              ></ListItemText>
            </Grid>
            <Grid item xs={2}>
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
        <ListItem key="3">
          <Grid container>
            <Grid item xs={2}>
              <ListItemText align="left" secondary="Q&A"></ListItemText>
            </Grid>
            <Grid item xs={3}>
              <ListItemText
                align="left"
                secondary="Hilfsbereiter Dozenten"
              ></ListItemText>
            </Grid>
            <Grid item xs={5}>
              <ListItemText
                align="left"
                secondary="Mehr und mehr fragen stellen sich über die letzte Übung..."
              ></ListItemText>
            </Grid>
            <Grid item xs={2}>
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
        <ListItem key="4">
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
            <Grid item xs={2}>
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
