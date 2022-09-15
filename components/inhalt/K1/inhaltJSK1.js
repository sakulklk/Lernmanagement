import * as React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Paper from '@mui/material/Paper';

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
              h1{
                font-size: 36px;
              }
              h2{
                font-weight: 600;
                font-size: 32px;
                margin-bottom: 9px;
                margin-top: 35px;
              }
              p{
                line-height: 1.6;
              }
              y{
                line-height: 1.6;
                color: #863E15
              }
  
              ul {
                list-style-type: circle;
              }
  
              .u_c{
                color: #0288d1;
                text-decoration: underline;
              }
              code{
                background-color: #e5e5e5;
                border-radius: 10px;
              }

            }
            `}</style>
      <div className="content">
        <h1>Hello, World!</h1>
        <y>
          <Box
            sx={{
              backgroundColor: '#FFFFEA',
              padding: '14px',
            }}
          >
            <TipsAndUpdatesIcon></TipsAndUpdatesIcon>
            <Box
              sx={{
                backgroundColor: '#FFFFEA',
                margin: '25px',
              }}
            >
              <b>Dauer: </b>45-60 Minuten
              <br />
              <ul>
                <li> Beispielprogramm "Hello, World!" </li>
              </ul>
              <b>Ziel: </b> Übung zum Mitmachen und Ausprobieren
            </Box>
          </Box>
        </y>
        <p>
          Die klassische Einführung in eine Programmiersprache besteht darin,
          ein Programm zu schreiben, dass die Begrüßung
        </p>
        <Box
          sx={{
            display: 'flex',
            '& > :not(style)': {
              m: 1,
              width: '100%',
              height: 50,
              background: '#e5e5e5',
            },
          }}
        >
          <Paper
            variant="outlined"
            sx={{
              alignItems: 'center',
              justifyContent: 'flex-start',
              display: 'flex',
              padding: '5px',
            }}
          >
            <code> Hello, World! </code>
          </Paper>
        </Box>

        <p>
          auf dem Bildschirm anzeigt bzw. ausgibt. Wir betrachten dies kurz in
          JavaScript.
        </p>
        <y>
          <Box
            sx={{
              backgroundColor: '#FFFFEA',
              padding: '14px',
            }}
          >
            <TipsAndUpdatesIcon></TipsAndUpdatesIcon>
            <Box
              sx={{
                backgroundColor: '#FFFFEA',
                margin: '25px',
              }}
            >
              Für alle, die schon Programmiererfahrungen haben:
              <br />
              <br />
              Die ersten Schritte sollen zunächst diejenigen an die
              Programmierung heranführen, die noch nie oder nur wenig
              programmiert haben. Am Anfang könnte das meiste demnach schon
              bekannt sein, aber das Tempo wird sich schrittweise erhöhen und
              hoffentlich sind bald auch für Erfahrene einige unbekannte Aspekte
              oder nützliche Tipps dabei.
            </Box>
          </Box>
          <br />
          <br />
          <br />
          <Divider />
          <br />
        </y>
        <h2>Strings für Text</h2>
        <p>
          In fast allen Programmiersprachen wird beliebiger Text wie z.B.{' '}
          <code> Hello, World!</code> als <b>String</b> (Zeichenkette)
          bezeichnet.
          <br />
          <br />
          Strings werden in fast allen Programmiersprachen mit doppelten
          Anführungszeichen umgeben:
        </p>
        <p>
        Strings werden in fast allen Programmiersprachen mit doppelten Anführungszeichen umgeben:
        </p>
        <Divider />
        <br />
        <Grid container>
          <Grid item sm={8} md={8} lg={10}>
            <a href="/uebersichtJS">
              <Button variant="text" startIcon={<ArrowBackIosIcon />}>
                <LockOpenIcon></LockOpenIcon> JavaScript
              </Button>
            </a>
          </Grid>
          <Grid item sm={4} md={4} lg={2}>
            <a href="/grundbegriffe">
              <Button variant="text" endIcon={<ArrowForwardIosIcon />}>
                <LockOpenIcon></LockOpenIcon> Grundbegriffe
              </Button>
            </a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
