import * as React from 'react';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import Divider from '@mui/material/Divider';
import GapText from '/components/uebungen/GapText.js';
import Crosswords from '/components/uebungen/Crosswords.js';
import MultipleChoice from '/components/uebungen/MultipleChoice.js';

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
        <h3> 1. Aufgabe: Lückentext</h3>
        <h5> Klicke die Karten an und wähle den richtigen Platz </h5>
        <GapText></GapText>
        <br />
        <h3> 2. Aufgabe: Kreuzworträtsel</h3>
        <h5>
          {' '}
          Finde die entsprechenden Wörter und schreibe sie in ihre Spalte/ Zeile
          ein{' '}
        </h5>
        <Crosswords />
        <br />
        <h3> 3. Aufgabe: MultipleChoice</h3>
        <h5> Beantworte 3 Fragen richtig </h5>
        <br />
        <MultipleChoice />
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
