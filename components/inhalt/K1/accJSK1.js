import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Uebersicht from '../Uebersicht/acc.js';

export default function Sidemenu() {
  return (
    <div>
      <Uebersicht />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>1 - Grundlagen</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MenuList>
            <MenuItem
              MenuItem
              component={Link}
              href="/nutzerdaten_kontoinformationen"
            >
              <Typography variant="inherit" noWrap>
                Hello, World!
              </Typography>
            </MenuItem>

            <MenuItem component={Link} href="/nutzerdaten_daten_aendern">
              <Typography variant="inherit" noWrap>
                Grundbegriffe
              </Typography>
            </MenuItem>
            <MenuItem
              component={Link}
              href="/nutzerdaten_adminrechte_beantragen"
            >
              <Typography variant="inherit" noWrap>
                Variablen und Konstanten
              </Typography>
            </MenuItem>
          </MenuList>
          <MenuItem
            MenuItem
            component={Link}
            href="/nutzerdaten_kontoinformationen"
          >
            <Typography variant="inherit" noWrap>
              Ein- und Ausgabe
            </Typography>
          </MenuItem>
          <MenuItem
            MenuItem
            component={Link}
            href="/nutzerdaten_kontoinformationen"
          >
            <Typography variant="inherit" noWrap>
              Datentypen
            </Typography>
          </MenuItem>
          <MenuItem
            MenuItem
            component={Link}
            href="/nutzerdaten_kontoinformationen"
          >
            <Typography variant="inherit" noWrap>
              Übungen
            </Typography>
          </MenuItem>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
