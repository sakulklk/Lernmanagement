import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';

export default function Sidemenuad() {
  return (
    <Paper elevation={5}>
      <MenuList>
        <MenuItem MenuItem component={Link} href="/admindashboard">
          <Typography variant="inherit" noWrap>
            Lernstatistiken eure Vorlesungen
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem component={Link} href="/nutzerdaten_daten_aendern">
          <Typography variant="inherit" noWrap>
            Daten ändern
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
