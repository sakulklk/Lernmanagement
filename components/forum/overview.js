import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import Fab from '@mui/material/Fab';

export default function Overview() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2} style={{ textAlign: 'center' }}>
        <h3> Filters: </h3>
      </Grid>
      <Grid item xs={8} style={{ textAlign: 'center' }}></Grid>
      <Grid item xs={2} style={{ textAlign: 'center' }}></Grid>

      <Grid item xs={4} style={{ textAlign: 'center' }}>
        <Paper
          elevation={5}
          style={{ margin: '10px', padding: '10px', textAlign: 'center' }}
        >
          <Button
            variant="text"
            href="./faqposts"
            style={{ textAlign: 'center' }}
          >
            FAQ
          </Button>
        </Paper>
      </Grid>

      <Grid item xs={4} style={{ textAlign: 'center' }}>
        <Paper
          elevation={5}
          style={{ margin: '10px', padding: '10px', textAlign: 'center' }}
        >
          <Button
            variant="text"
            href="./fragenposts"
            style={{ textAlign: 'center' }}
          >
            Fragen
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={4} style={{ textAlign: 'center' }}>
        <Paper
          elevation={5}
          style={{ margin: '10px', padding: '10px', textAlign: 'center' }}
        >
          <Button
            variant="text"
            href="./updateposts"
            style={{ textAlign: 'center' }}
          >
            Kommentare zu Updates
          </Button>
        </Paper>
      </Grid>

      <Divider />
      <Grid item xs={12}>
        <List>
          <ListItem key="1">
            <Grid container>
              <Grid item xs={2}>
                <ListItemText align="left" primary="Typ"></ListItemText>
              </Grid>
              <Grid item xs={3}>
                <ListItemText align="left" primary="Titel"></ListItemText>
              </Grid>
              <Grid item xs={5}>
                <ListItemText align="left" primary=""></ListItemText>
              </Grid>
              <Grid item xs={2} style={{ textAlign: 'center' }}>
                <Fab size="small" aria-label="add" href="./neupost">
                  <AddToQueueIcon fontSize="small" />
                </Fab>
              </Grid>
            </Grid>
          </ListItem>
        </List>
        <Divider />
      </Grid>
    </Grid>
  );
}
