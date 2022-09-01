import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Was sind Adminrechte?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Wenn ein Nutzer Adminrechte hat,kann er mehr Funktionen der Seite
            nutzen als ein Nutzer ohne Adminrechte. Beispiele für Funktionen
            wären das Erstellen und löschen von Aufgaben.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Weshalb benötigen wir ihre E-mail</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Wir benötigen den Namen ihre E-Mail um sie als ein Dozent der
            Hochschule zu identifizieren.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
