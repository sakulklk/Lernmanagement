import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(226, 0, 26)',
    },
  },
});

export default function ShibbolethLogin() {
  return (
    <div className="column">
      <style jsx>{`
     .column {
        display: flex;
        flex-direction: column ;
        background-color: white;
        font-family: sans-serif;
        font-size: 18px;
        padding-top: 0px;
        padding-right: 60px;
        padding-bottom: 0px;
        padding-left: 100px;
        grid-template-columns: auto;
        overflow: auto;
        text-align: center;
        overflow: hidden;
      }

      .grid-item {
        font-size: 30px;
        text-align: left;
      }

      h1{
        margin-top: 89px;
        margin-bottom: 20px;
        color: grey;
        font-size: 26px;
        font-weight: normal;
        flex-grow: 1;
        text-align: left;
      }

      h2{
        text-align: left;
        color: grey;
        font-family: sans-serif;
        font-size: 20px;
        font-weight: normal;
      }

      .accordion{
        margin-top: 20px;
      }

      .accordion:hover{
        color: red;
      }

      .hover:hover{
        color: red;
      }


     `}</style>
      <div className="grid-item" id="login-div">
        <h1> Shibboleth Login</h1>
        <div className="username">
          <h2> Username </h2>
          <TextField
            id="outlined-basic"
            className="username"
            variant="outlined"
          />
        </div>
        <div className="password">
          <h2> Password </h2>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="password"
            className="password"
            style={{ width: 'auto' }}
          />
        </div>
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary">
            <Link
              style={{
                color: 'white',
                display: 'block',
                textDecoration: 'none',
              }}
              href={'/'}
            >
              {'Login'}
            </Link>
          </Button>
        </ThemeProvider>

        <div className="accordion">
          <Accordion style={{ border: 'white' }}>
            <AccordionSummary>
              <Typography>
                <b>Which services requires me to log in?</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <a href="/">Lermanangementsystem </a>
              </Typography>
              <br></br>
              <Typography>Contact: Plattform Support</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Typography>
                <b> Forgot password? </b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Students and assistant professors may use our{' '}
                <a className="hover" href="/">
                  User Self Service
                </a>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <b>How do I log off?</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The session is automatically terminated once you close the last
                window of your web browser.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
