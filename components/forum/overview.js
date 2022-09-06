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

export default function Overview() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2} style={{ textAlign: 'center' }}>
        <Button
          variant="text"
          href="./faqposts"
          style={{ textAlign: 'center' }}
        >
          FAQ
        </Button>
      </Grid>

      <Grid item xs={2}>
        <Button
          variant="text"
          href="./fragenposts"
          style={{ textAlign: 'center' }}
        >
          Fragen
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button
          variant="text"
          href="./updateposts"
          style={{ textAlign: 'center' }}
        >
          Kommentare zu Updates
        </Button>
      </Grid>
      <Grid item xs={2} style={{ textAlign: 'center' }}>
        <Button
          variant="text"
          href="./forumadmin"
          style={{ textAlign: 'center' }}
        >
          +
        </Button>
      </Grid>
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
                <Button
                  variant="contained"
                  align="left"
                  href="./neupost"
                  style={{ textAlign: 'center' }}
                >
                  Neu
                </Button>
              </Grid>
            </Grid>
          </ListItem>
        </List>
        <Divider />
      </Grid>
    </Grid>
  );
}
