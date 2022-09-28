import * as React from 'react';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import Divider from '@mui/material/Divider';

export default function Sidemenu() {
  return (
    <div>
      <style jsx>{`
            .bar{
              position: fixed;
              width: 100%;
              height: 312px;
            }

            .content{
              margin-right: 50px;
              margin-left: 50px;

            }
            `}</style>
      <div className="content">
        <h1>Übe das Gelernte</h1>

        <p>
          Hier ist nochmal ein Mix aus verschiedenen Aufgaben zu dem Kapitel.
          Bitte bearbeite alle bevor du zum nächsten Kapitel übegehst
        </p>

        <Divider />
        <br />
        <Grid container>
          <Grid item sm={7} md={7} lg={9}>
            <a href="/hello_world">
              <Button variant="text" startIcon={<ArrowBackIosIcon />}>
                <LockOpenIcon></LockOpenIcon> Anfang des Kapitels
              </Button>
            </a>
          </Grid>
          <Grid item sm={5} md={5} lg={3}>
            {/* <a href="/JSK1"> */}
            <Button variant="text" endIcon={<ArrowForwardIosIcon />}>
              <LockIcon /> Nächstes Kapitel
            </Button>
            {/* </a> */}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
