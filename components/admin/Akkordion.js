import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div className='style'>
      <style jsx>{`
      .accordion:hover{
        color: red;
      }

      .hover:hover{
        color: red;
      }


     `}</style>
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
            Wenn ein/e Nutzer/in Adminrechte hat,kann diese/r Übungen und Lernkapital erstellen, löschen und aktualisieren. Außerdem können Admins Ihre DHBW Kurse verwalten.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Weshalb benötigen wir Ihre E-mail</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Wir benötigen den Namen ihre E-Mail um Sie als ein Dozent der
            Hochschule zu identifizieren.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
      <Typography>Sind Sie ein Teil der DHBW?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Dann melden Sie sich bitte über <a className='hover' href='/shibboleth'>
              Shibboleth </a> an.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </div>
  );
}
