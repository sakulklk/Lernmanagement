import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import VerticalLinearStepper1 from '../MenuDozent.js';

const actions = [
  { icon: <DeleteIcon />, name: 'Löschen' },
  { icon: <SaveIcon />, name: 'Speichern' },
  { icon: <AddCircleIcon />, name: 'Hinzufügen' },
  { icon: <UpgradeIcon />, name: 'Aktualisieren' },
];

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <style jsx>{`
    .acc{
      margin-top: 100px;
      margin-bpttom: 25px;
      text-align: center;
      padding-right: 75px;
      padding-left: 75px;
    }

    h1{
      margin-top: 25px;
      padding-left: 25px;
      text-align: center;
    }

    h3{
      font-weight: lighter;
      padding-left: 25px;
      text-align: center;
    }
    .hover:hover{
      color: #0288d1;
      text-decoration: underline;
    }

        
      `}</style>
      <Typography>
        <h1> Wilkommen auf der JavaScript Lernseite! </h1>
        <h3>
          {' '}
          Sie können die Lernkapitel{' '}
          <b> bearbeiten, löschen und neue ersetllen </b>. <br /> Für Sie gibt
          es keine <i> Freischalte-Funktion</i>. Sie haben jeder Zeit Zugriff
          auf alle Kapitel.
        </h3>
      </Typography>
      <div className="acc">
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Collapsible Group Item #1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <VerticalLinearStepper1></VerticalLinearStepper1>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Collapsible Group Item #2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <VerticalLinearStepper1></VerticalLinearStepper1>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Collapsible Group Item #3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <VerticalLinearStepper1></VerticalLinearStepper1>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>Collapsible Group Item #4</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <VerticalLinearStepper1></VerticalLinearStepper1>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel5'}
          onChange={handleChange('panel5')}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography>Collapsible Group Item #5</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <VerticalLinearStepper1></VerticalLinearStepper1>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel6'}
          onChange={handleChange('panel6')}
        >
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <Typography>Collapsible Group Item #6</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <VerticalLinearStepper1></VerticalLinearStepper1>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: 'absolute', bottom: 60, right: 20 }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Box>
    </div>
  );
}
