import * as React from 'react';

import Grid from '@mui/material/Grid';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';
import Fab from '@mui/material/Fab';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Fragenpost() {
  return (
    <Grid item xs={12}>
      <List>
        <ListItem key="1">
          <Grid container>
            <Grid item xs={2}>
              <ListItemText align="left" secondary="Fragen"></ListItemText>
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
            <Grid xs={2} style={{ textAlign: 'center' }}>
              <Fab
                size="small"
                color="primary"
                aria-label="readmore"
                href="./post"
              >
                <ArrowForwardIosIcon fontSize="small" />
              </Fab>
            </Grid>
          </Grid>
        </ListItem>
      </List>
    </Grid>
  );
}
