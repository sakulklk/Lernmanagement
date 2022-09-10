import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Sidemenu() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Kapitel 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MenuList>
            <MenuItem
              MenuItem
              component={Link}
              href="/nutzerdaten_kontoinformationen"
            >
              <Typography variant="inherit" noWrap>
                1
              </Typography>
            </MenuItem>

            <MenuItem component={Link} href="/nutzerdaten_daten_aendern">
              <Typography variant="inherit" noWrap>
                2
              </Typography>
            </MenuItem>
            <MenuItem
              component={Link}
              href="/nutzerdaten_adminrechte_beantragen"
            >
              <Typography variant="inherit" noWrap>
                3
              </Typography>
            </MenuItem>
          </MenuList>
          <MenuItem
            MenuItem
            component={Link}
            href="/nutzerdaten_kontoinformationen"
          >
            <Typography variant="inherit" noWrap>
              4
            </Typography>
          </MenuItem>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
