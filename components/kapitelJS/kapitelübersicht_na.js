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
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Stack from '@mui/material/Stack';

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
  const [expanded, setExpanded] = React.useState(0);

  const [open, setOpen] = React.useState(true);

  const [checked, setChecked] = React.useState(false);
  const handleChangeCheck = (event) => {
    setChecked(event.target.checked);
  };

  const handleChangePanel = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [value, setValue] = React.useState(0);

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <style jsx>{`
    .acc{
      margin-top: 50px;
      margin-bpttom: 80px;
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
      margin-left: auto;
      text-align: center;
      margin-rigth: auto;
    }
    .hover:hover{
      color: #0288d1;
      text-decoration: underline;
    }
      `}</style>

      <h1> Wilkommen auf der JavaScript Lernseite! </h1>
      {/* <Box sx={{ width: '100%' }} alignItems="center" justifyContent="center"> */}
      <Stack sx={{ width: '100%' }} alignItems="center" justifyContent="center">
        <Collapse in={open}>
          <Alert
            severity="info"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
            fullWidth
          >
            <Typography>
              <AlertTitle>Info</AlertTitle>
              <h3>
                Melde Dich bitte an um alle Funktionen nutzen zu können!
                <br /> Dein Fortschritt geht bei schließen der Seite sonst
                <b> verloren</b> und Du musst alle Kapitel erneut freischalten!
                <br />
                <a href="signUp" className="hover">
                  Hier geht es zum Login!
                </a>
              </h3>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Diese Info nicht mehr anzeigen"
              />
              {/* <Checkbox
                checked={checked}
                onChange={handleChangeCheck}
                inputProps={{ 'aria-label': 'controlled' }}
              /> */}
            </Typography>
          </Alert>
        </Collapse>
        {/* <Button
          disabled={open}
          variant="outlined"
          onClick={() => {
            setOpen(true);
          }}
        >
          Info
        </Button> */}
        {/* </Box> */}
      </Stack>
      {/* <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="info">
          <Typography>
            <AlertTitle>Info</AlertTitle>
            <h3>
              {' '}
              Melde Dich bitte an um alle Funktionen nutzen zu können! Dein
              Fortschritt geht bei
               schließen der Seite sonst <b>verloren</b> und
              Du musst alle Kapitel erneut freischalten!
              <br />
              <a href="signUp" className="hover">
                {' '}
                Hier geht es zum Login!
              </a>
            </h3>
          </Typography>
        </Alert>
      </Stack> */}
      <div className="acc">
        <Accordion
          expanded={expanded === 'panel0'}
          onChange={handleChangePanel('panel0')}
        >
          <AccordionSummary aria-controls="panel0d-content" id="panel0d-header">
            <Typography>Einführung in JavaScript</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList
                      onChange={handleChangeTabs}
                      variant="scrollable"
                      aria-label="lab API tabs example"
                    >
                      <Tab label="Geschichte von JavaScript" value="1" />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    Geschichte von JavaScript. Interessiert? Na dann lies Dich
                    doch mal ein!
                  </TabPanel>
                </TabContext>
              </Box>
            </Typography>
            <br />
            <Button id="button" variant="contained" href={'/uebersichtJS'}>
              Erfahre etwas über die Geschichte von Javascript!{' '}
            </Button>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChangePanel('panel1')}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <LockOpenIcon></LockOpenIcon>
            <Typography>1 - Einleitung</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                      value={value}
                      onChange={handleChangeTabs}
                      variant="scrollable"
                      scrollButtons
                      allowScrollButtonsMobile
                      aria-label="scrollable force tabs example"
                    >
                      <Tab label="Hello, World!" value="1" />
                      <Tab label="Grundbegriffe" value="2" />
                      <Tab label="Variablen und Konstanten" value="3" />
                      <Tab label="Ein- und Ausgaben" value="4" />
                      <Tab label="Datentypen" value="5" />
                      <Tab label="Abfrage" value="6" />
                    </Tabs>
                  </Box>
                  <TabPanel value="1">Inhalt</TabPanel>
                  <TabPanel value="2">Inhalt </TabPanel>
                  <TabPanel value="3">Inhalt </TabPanel>
                  <TabPanel value="4">Inhalt </TabPanel>
                  <TabPanel value="5">Inhalt </TabPanel>
                  <TabPanel value="6">
                    Übungen die weiterführen zum nächsten Kapitel{' '}
                  </TabPanel>
                </TabContext>
              </Box>
            </Typography>
            <br />
            <Button
              id="button"
              variant="contained"
              startIcon={<LockOpenIcon />}
              href={'/uebersichtJS'}
            >
              Fange an zu lernen!
            </Button>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChangePanel('panel2')}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <LockIcon></LockIcon>
            <Typography>Collapsible Group Item #2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                      value={value}
                      onChange={handleChangeTabs}
                      variant="scrollable"
                      scrollButtons
                      allowScrollButtonsMobile
                      aria-label="scrollable force tabs example"
                    >
                      <Tab label="Hello, World!" value="1" />
                      <Tab label="Grundbegriffe" value="2" />
                      <Tab label="Variablen und Konstanten" value="3" />
                      <Tab label="Ein- und Ausgaben" value="4" />
                      <Tab label="Datentypen" value="5" />
                      <Tab label="Abfrage" value="6" />
                    </Tabs>
                  </Box>
                  <TabPanel value="1">Inhalt</TabPanel>
                  <TabPanel value="2">Inhalt </TabPanel>
                  <TabPanel value="3">Inhalt </TabPanel>
                  <TabPanel value="4">Inhalt </TabPanel>
                  <TabPanel value="5">Inhalt </TabPanel>
                  <TabPanel value="6">
                    Übungen die weiterführen zum nächsten Kapitel{' '}
                  </TabPanel>
                </TabContext>
              </Box>
            </Typography>
            <br />
            <Button id="button" variant="contained" startIcon={<LockIcon />}>
              Bitte bearbeite erst das vorherige Kapitel!
            </Button>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChangePanel('panel3')}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <LockIcon></LockIcon>
            <Typography>Collapsible Group Item #3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                      value={value}
                      onChange={handleChangeTabs}
                      variant="scrollable"
                      scrollButtons
                      allowScrollButtonsMobile
                      aria-label="scrollable force tabs example"
                    >
                      <Tab label="Hello, World!" value="1" />
                      <Tab label="Grundbegriffe" value="2" />
                      <Tab label="Variablen und Konstanten" value="3" />
                      <Tab label="Ein- und Ausgaben" value="4" />
                      <Tab label="Datentypen" value="5" />
                      <Tab label="Abfrage" value="6" />
                    </Tabs>
                  </Box>
                  <TabPanel value="1">Inhalt</TabPanel>
                  <TabPanel value="2">Inhalt </TabPanel>
                  <TabPanel value="3">Inhalt </TabPanel>
                  <TabPanel value="4">Inhalt </TabPanel>
                  <TabPanel value="5">Inhalt </TabPanel>
                  <TabPanel value="6">
                    Übungen die weiterführen zum nächsten Kapitel{' '}
                  </TabPanel>
                </TabContext>
              </Box>
            </Typography>
            <br />
            <Button id="button" variant="contained" startIcon={<LockIcon />}>
              Bitte bearbeite erst das vorherige Kapitel!
            </Button>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChangePanel('panel4')}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <LockIcon></LockIcon>
            <Typography>Collapsible Group Item #4</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                      value={value}
                      onChange={handleChangeTabs}
                      variant="scrollable"
                      scrollButtons
                      allowScrollButtonsMobile
                      aria-label="scrollable force tabs example"
                    >
                      <Tab label="Hello, World!" value="1" />
                      <Tab label="Grundbegriffe" value="2" />
                      <Tab label="Variablen und Konstanten" value="3" />
                      <Tab label="Ein- und Ausgaben" value="4" />
                      <Tab label="Datentypen" value="5" />
                      <Tab label="Abfrage" value="6" />
                    </Tabs>
                  </Box>
                  <TabPanel value="1">Inhalt</TabPanel>
                  <TabPanel value="2">Inhalt </TabPanel>
                  <TabPanel value="3">Inhalt </TabPanel>
                  <TabPanel value="4">Inhalt </TabPanel>
                  <TabPanel value="5">Inhalt </TabPanel>
                  <TabPanel value="6">
                    Übungen die weiterführen zum nächsten Kapitel{' '}
                  </TabPanel>
                </TabContext>
              </Box>
            </Typography>
            <br />
            <Button id="button" variant="contained" startIcon={<LockIcon />}>
              Bitte bearbeite erst das vorherige Kapitel!
            </Button>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel5'}
          onChange={handleChangePanel('panel5')}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <LockIcon></LockIcon>
            <Typography>Collapsible Group Item #5</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                      value={value}
                      onChange={handleChangeTabs}
                      variant="scrollable"
                      scrollButtons
                      allowScrollButtonsMobile
                      aria-label="scrollable force tabs example"
                    >
                      <Tab label="Hello, World!" value="1" />
                      <Tab label="Grundbegriffe" value="2" />
                      <Tab label="Variablen und Konstanten" value="3" />
                      <Tab label="Ein- und Ausgaben" value="4" />
                      <Tab label="Datentypen" value="5" />
                      <Tab label="Abfrage" value="6" />
                    </Tabs>
                  </Box>
                  <TabPanel value="1">Inhalt</TabPanel>
                  <TabPanel value="2">Inhalt </TabPanel>
                  <TabPanel value="3">Inhalt </TabPanel>
                  <TabPanel value="4">Inhalt </TabPanel>
                  <TabPanel value="5">Inhalt </TabPanel>
                  <TabPanel value="6">
                    Übungen die weiterführen zum nächsten Kapitel{' '}
                  </TabPanel>
                </TabContext>
              </Box>
            </Typography>
            <br />
            <Button id="button" variant="contained" startIcon={<LockIcon />}>
              Bitte bearbeite erst das vorherige Kapitel!
            </Button>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel6'}
          onChange={handleChangePanel('panel6')}
        >
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <LockIcon></LockIcon>
            <Typography>Collapsible Group Item #5</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                      value={value}
                      onChange={handleChangeTabs}
                      variant="scrollable"
                      scrollButtons
                      allowScrollButtonsMobile
                      aria-label="scrollable force tabs example"
                    >
                      <Tab label="Hello, World!" value="1" />
                      <Tab label="Grundbegriffe" value="2" />
                      <Tab label="Variablen und Konstanten" value="3" />
                      <Tab label="Ein- und Ausgaben" value="4" />
                      <Tab label="Datentypen" value="5" />
                      <Tab label="Abfrage" value="6" />
                    </Tabs>
                  </Box>
                  <TabPanel value="1">Inhalt</TabPanel>
                  <TabPanel value="2">Inhalt </TabPanel>
                  <TabPanel value="3">Inhalt </TabPanel>
                  <TabPanel value="4">Inhalt </TabPanel>
                  <TabPanel value="5">Inhalt </TabPanel>
                  <TabPanel value="6">
                    Übungen die weiterführen zum nächsten Kapitel{' '}
                  </TabPanel>
                </TabContext>
              </Box>
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
