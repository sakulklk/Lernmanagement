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
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Button variant="text" style={{ textAlign: 'center' }}>
          FAQ
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="text" style={{ textAlign: 'center' }}>
          Bugfixes
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="text" style={{ textAlign: 'center' }}>
          Fragen
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="text" style={{ textAlign: 'center' }}>
          Updates
        </Button>
      </Grid>
    </Grid>
  );
}
