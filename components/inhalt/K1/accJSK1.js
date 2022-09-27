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
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';

export default function Sidemenu() {
  return (
    <>
      <div>
        <Uebersicht />
      </div>

      <div className="text">
        <style jsx>{`
            .text{
              position: fixed;

              width: 16%;

              margin-top: 50px;
            }
            `}</style>
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
              <MenuItem MenuItem component={Link} href="/hello_world">
                <Typography variant="inherit" noWrap>
                  <LockOpenIcon />
                  Hello, World!
                </Typography>
              </MenuItem>

              <MenuItem /*component={Link} href="/grundbegriffe"*/>
                <Typography variant="inherit" noWrap>
                  <LockIcon /> Grundbegriffe
                </Typography>
              </MenuItem>

              <MenuItem /*component={Link} href="/var_konst"*/>
                <Typography variant="inherit" noWrap>
                  <LockIcon />
                  Variablen und Konstanten
                </Typography>
              </MenuItem>
              <MenuItem
              /*MenuItem
                component={Link}
                href="/nutzerdaten_kontoinformationen"*/
              >
                <Typography variant="inherit" noWrap>
                  <LockIcon /> Ein- und Ausgabe
                </Typography>
              </MenuItem>
              <MenuItem
              /* MenuItem
                component={Link}
                href="/nutzerdaten_kontoinformationen"*/
              >
                <Typography variant="inherit" noWrap>
                  <LockIcon /> Datentypen
                </Typography>
              </MenuItem>
              <MenuItem MenuItem component={Link} href="/ubuengAll">
                <Typography variant="inherit" noWrap>
                  <LockOpenIcon />
                  Übungen
                </Typography>
              </MenuItem>
            </MenuList>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
