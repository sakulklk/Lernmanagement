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

export default function Sidemenu() {
  return (
    <Paper elevation={5}>
      <MenuList>
        <MenuItem
          MenuItem
          component={Link}
          href="/nutzerdaten_kontoinformationen"
        >
          <Typography variant="inherit" noWrap>
            Kontoinformationen und Statistiken
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem component={Link} href="/nutzerdaten_daten_aendern">
          <Typography variant="inherit" noWrap>
            Daten ändern
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem component={Link} href="/nutzerdaten_adminrechte_beantragen">
          <Typography variant="inherit" noWrap>
            Adminrechte beantragen
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
