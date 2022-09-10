import * as React from 'react';
import Box from '@mui/material/Box';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';

export default function Sidemenu() {
  return (
    <div className="text">
      <style jsx>{`
            .text{
              position: fixed;
              width: 15%;
            }
            `}</style>

      <MenuList>
        <MenuItem MenuItem component={Link} href="/uebersichtJS">
          <Typography variant="inherit" noWrap>
            JavaScript
          </Typography>
        </MenuItem>
      </MenuList>
    </div>
  );
}
