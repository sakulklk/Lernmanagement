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
import DropDownMenu from 'material-ui/DropDownMenu';
import Menu from '@mui/material/Menu';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function Neu() {
  return (
    <Grid item xs={12}>
      <Grid container spacing={1}>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <h3>Typ</h3>
          <ToggleButtonGroup color="primary" exclusive aria-label="Platform">
            <ToggleButton value="FAQ">FAQ</ToggleButton>
            <ToggleButton value="Fragen">Fragen</ToggleButton>
            <ToggleButton value="Kommentare zur Update">Updates</ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <h3>Titel</h3>
          <TextField
            style={{ width: '70%' }}
            id="outlined-basic"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <h3>Text</h3>
          <TextField
            id="outlined-multiline-flexible"
            multiline
            maxRows={10}
            style={{ width: '70%' }}
          />
        </Grid>

        <Grid item xs={10} style={{ textAlign: 'center' }}>
          <div> </div>
        </Grid>
        <Grid item xs={2} style={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            href="./forum"
            style={{ textAlign: 'center' }}
          >
            senden
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
