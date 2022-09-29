import * as React from 'react';

import Grid from '@mui/material/Grid';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Fab from '@mui/material/Fab';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Updatepost() {
  return (
    <Grid item xs={12}>
      <List>
        <ListItem key="1">
          <Grid container>
            <Grid item xs={2}>
              <ListItemText
                align="left"
                secondary="Kommentare zu Update"
              ></ListItemText>
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
        <ListItem key="2">
          <Grid container>
            <Grid item xs={2}>
              <ListItemText
                align="left"
                secondary="Kommentare zu Update"
              ></ListItemText>
            </Grid>
            <Grid item xs={3}>
              <ListItemText align="left" secondary="3.0"></ListItemText>
            </Grid>
            <Grid item xs={5}>
              <ListItemText align="left" secondary="Neu..."></ListItemText>
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
