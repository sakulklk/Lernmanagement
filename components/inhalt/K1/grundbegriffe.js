import * as React from 'react';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LockOpenIcon from '@mui/icons-material/LockOpen';
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
        <h2> Work in progress </h2>
        <h3>Hier sollte das Thema Grundbegriffe stehen</h3>

        <p>
          Dieser Bereich kann erst nach richtigem bearbeiten der vorherigen
          Aufgaben erreicht werden. Es muss eine Funktion erstellt werden,
          welche die richtige Auswertung mit dem Freischalten des nächsten
          Kapitels ermöglicht. Außerdem muss das SideMenuRight "Auf dieser
          Seite" dem Kapitel entsprechend immer geänder werden
        </p>
        <Divider />
        <br />
        <p>
          Beim Klicken auf das nächste Kapitel passiert jetzt nichts. Es müssen
          auf diese Seite noch Übungen implementiert werden und natürlich dann
          auch die Freischalte-Funktion. Danach müssen die Inhalte exemplarisch
          wie die der Seiten "Geschichte von JS" und "Hello, World!" sein.
        </p>
        <Divider />
        <br />
        <Grid container>
          <Grid item sm={7} md={7} lg={9}>
            <a href="/hello_world">
              <Button variant="text" startIcon={<ArrowBackIosIcon />}>
                <LockOpenIcon></LockOpenIcon> Hello, World!
              </Button>
            </a>
          </Grid>
          <Grid item sm={5} md={5} lg={3}>
            <a href="/var_konst">
              <Button variant="text" endIcon={<ArrowForwardIosIcon />}>
                <LockOpenIcon></LockOpenIcon> Variablen und Konstanten
              </Button>
            </a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
