import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const actions = [
  { icon: <LockIcon />, name: 'nicht freigeschalten!' },
  { icon: <LockOpenIcon />, name: 'freigeschalten' },
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
      padding-right: 100px;
      padding-left: 100px;
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
          Melde Dich bitte an um alle Funktionen nutzen zu können! Dein
          Fortschritt geht bei schließen der Seite sonst <b>verloren</b> und Du
          musst alle Kapitel erneut freischalten!
          <br />
          <a href="signUp" className="hover">
            {' '}
            Hier geht es zum Login!
          </a>
        </h3>
      </Typography>
      <div className="acc">
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <LockOpenIcon></LockOpenIcon>
            <Typography>Collapsible Group Item #1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <br />
            <Button
              id="button"
              variant="contained"
              startIcon={<LockOpenIcon />}
            >
              Contained
            </Button>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <LockIcon></LockIcon>
            <Typography>Collapsible Group Item #2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <br />
            <Button id="button" variant="contained" startIcon={<LockIcon />}>
              Contained
            </Button>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <LockIcon></LockIcon>
            <Typography>Collapsible Group Item #3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <br />
            <Button id="button" variant="contained" startIcon={<LockIcon />}>
              Contained
            </Button>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <LockIcon></LockIcon>
            <Typography>Collapsible Group Item #4</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <br />
            <Button id="button" variant="contained" startIcon={<LockIcon />}>
              Contained
            </Button>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel5'}
          onChange={handleChange('panel5')}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <LockIcon></LockIcon>
            <Typography>Collapsible Group Item #5</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <br />
            <Button id="button" variant="contained" startIcon={<LockIcon />}>
              Contained
            </Button>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel6'}
          onChange={handleChange('panel6')}
        >
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <LockIcon></LockIcon>
            <Typography>Collapsible Group Item #6</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <br />
            <Button id="button" variant="contained" startIcon={<LockIcon />}>
              Contained
            </Button>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
