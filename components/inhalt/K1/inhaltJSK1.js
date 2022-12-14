import * as React from 'react';
import Typography from '@mui/material/Typography';

import GapText from '../../uebungen/GapText.js';
import Crosswords from '../../uebungen/Crosswords.js';
import MultipleChoice from '../../uebungen/MultipleChoice.js';

import Box from '@mui/material/Box';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Divider from '@mui/material/Divider';

import Paper from '@mui/material/Paper';

export default function Sidemenu() {
  // const umgebungen = [
  //   'Deno',
  //   'Rome',
  //   'Kennst du weitere und hast damit schon mal gearbeitet?',
  // ];
  // const listOne = umgebungen.map((umgebungen) => <li>{umgebungen}</li>);
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
                list-style-type: disc;
              }
  
              .u_c{
                color: #0288d1;
                text-decoration: underline;
              }
              codest{
                background-color: #F0F0F8;
                border-radius: 5px;
                padding: 0.8px;
              }

            }
            .purple {
              color: #6f42c1;
            }
            .blue {
              color: #1976d2;
            }
            .green {
              color: #22863a;
            }
            
            `}</style>
      <div className="content">
        <h1>Hello, World!</h1>
        <p> </p>
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
              <b>Ziel: </b> ??bung zum Mitmachen und Ausprobieren
            </Box>
          </Box>
        </y>
        <p>
          Die klassische Einf??hrung in eine Programmiersprache besteht darin,
          ein Programm zu schreiben, dass die Begr????ung
        </p>
        <Box
          sx={{
            display: 'flex',
            '& > :not(style)': {
              m: 1,
              width: '100%',
              height: 50,
              background: 'rgba(59,130,246,.13)',
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
              F??r alle, die schon Programmiererfahrungen haben:
              <br />
              <br />
              Die ersten Schritte sollen zun??chst diejenigen an die
              Programmierung heranf??hren, die noch nie oder nur wenig
              programmiert haben.{' '}
              <p id="stringsF??rText">
                Am Anfang k??nnte das meiste demnach schon bekannt sein, aber das
                Tempo wird sich schrittweise erh??hen und hoffentlich sind bald
                auch f??r Erfahrene einige unbekannte Aspekte oder n??tzliche
                Tipps dabei.
              </p>
            </Box>
          </Box>
        </y>
        <h2>Strings f??r Text</h2>
        <Divider />
        <p>
          In fast allen Programmiersprachen wird beliebiger Text wie z.B.{' '}
          <codest>
            <code> Hello, World!</code>
          </codest>{' '}
          als <b>String</b> (Zeichenkette) bezeichnet.
          <br />
          <br />
          Strings werden in fast allen Programmiersprachen mit doppelten
          Anf??hrungszeichen umgeben:
        </p>
        <p>
          Strings werden in fast allen Programmiersprachen mit doppelten
          Anf??hrungszeichen umgeben:
        </p>
        <Box
          sx={{
            display: 'flex',
            '& > :not(style)': {
              m: 1,
              width: '100%',
              height: 50,
              background: 'rgba(59,130,246,.13)',
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
              color: '#22863a',
            }}
          >
            <code> "Hello, World!" </code>
          </Paper>
        </Box>
        <p id="ausgabe">
          {' '}
          F??r das Hello-World-Programm ben??tigen wir also den String{' '}
          <codest>
            <code>"Hello, World!"</code>
          </codest>{' '}
          und einen ???Befehl???, um einen String auf dem Bildschirm anzuzeigen bzw.
          auszugeben.
        </p>
        <h2>Ausgabe auf Bildschirm</h2>
        <Divider />
        <p>
          Um etwas auf dem Bildschirm auszugeben, hat JavaScript z.B. die
          folgende <b>Funktion</b> (manchmal auch <b>Methode</b> genannt):
          <br />
        </p>
        <Box
          sx={{
            display: 'flex',
            '& > :not(style)': {
              m: 1,
              width: '100%',
              height: 50,
              background: 'rgba(59,130,246,.13)',
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
            <code>
              {' '}
              <span className="blue">console</span>.
              <span className="purple">log</span>(){' '}
            </code>
          </Paper>
        </Box>
        <p>
          Die runden Klammern deuten bei Funktionen (und Methoden) an, dass
          diese verwendet bzw. <b>aufgerufen</b> werden.
          <br />
          <br />
          Um mit dieser Funktion etwas bestimmtes auszugeben, m??ssen wir hier
          beim <b>Funktionsaufruf</b> (oder <b>Methodenaufruf</b>) einen{' '}
          <b>Parameter</b> (manchmal auch <b>Argument</b> genannt) in den runden
          Klammern einsetzen. Wir verwenden also den String{' '}
          <codest>
            <code>"Hello, World!"</code>
          </codest>
          :
        </p>
        <Box
          sx={{
            display: 'flex',
            '& > :not(style)': {
              m: 1,
              width: '100%',
              height: 50,
              background: 'rgba(59,130,246,.13)',
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
            <code>
              {' '}
              <span className="blue">console</span>.
              <span className="purple">log</span>(
              <span className="green">"Hello,World!"</span>){' '}
            </code>
          </Paper>
        </Box>
        <p>
          Oft sagen wir hierzu auch ???der Funktion bzw. Methode beim Aufruf ein
          Parameter oder ein Argument ??bergeben???.
          <br />
          <br />
          Es gibt auch Funktionen/Methoden ohne Parameter und solche mit
          mehreren Parametern. Ebenso k??nnen sie ein Ergebnis als{' '}
          <b>R??ckgabewert</b> liefern (hier bei{' '}
          <codest>
            <code>console.log()</code>
          </codest>{' '}
          nicht relevant).
          <br />
          <br />
          Nun haben wir eine korrekte <b>Anweisung</b> in JavaScript
          programmiert.
          <br />
          <br />
          Grundlegend und stark vereinfacht gesagt besteht die Programmierung in
          vielen Sprachen daraus, aufeinanderfolgende Anweisungen zu schreiben,
          die dann ausgef??hrt werden.
          <br />
          <br />
          Ein paar Bemerkungen dazu:
          <br />
          <br />
          <ul>
            <li>
              In JavaScript k??nnen mehrere Anweisungen durch Zeilenumbruch oder
              Semikolon voneinander getrennt werden.
            </li>

            <li>
              {' '}
              Oft ist daher JavaScript-Code mit Semikolon am Ende einer
              Anweisung zu sehen:
              <codest>
                <code> {''}console.log("Hello, World!");</code>
              </codest>
            </li>
            <li>
              {' '}
              Im Unterrichtsmaterial wird meistens das Semikolon am Ende einer
              Anweisung angegeben.{' '}
            </li>
            <li>
              Jeder Browser hat eine JavaScript-Konsole, in der JavaScript-Code
              ausprobiert werden kann. Dort funktioniert auch die Methode
              <codest>
                <code>{''} console.log()</code>
              </codest>
              .
            </li>
            <li>
              {' '}
              Im Browser kann auch etwas in einem UI-Dialog mit{' '}
              <codest>
                <code>alert()</code>
              </codest>
              angezeigt werden.
            </li>
            <li>
              {' '}
              In dieser Vorlesung betrachten wir JavaScript weitestgehend ohne
              HTML und CSS (??? dies findet evtl. in der Vorlesung
              ???Web-Engineering??? <a id="umgebung"></a>statt).
            </li>
          </ul>
        </p>
        <h2>Programmierumgebung</h2>
        <Divider />
        <p>
          F??r die Verwendung einer Programmiersprache werden zus??tzliche
          Werkzeuge wie Editoren, Interpreter/Compiler oder komplette
          Entwicklungsumgebungen ben??tigt.
          <br />
          <br />
          JavaScript hat den Vorteil, dass jeder Browser eine sogenannte Konsole
          hat, in der mit JavaScript experimentiert werden kann (au??er auf dem
          Smartphone oder Tablet). Die Konsole (console) ist Teil der
          Entwicklerwerkzeuge (developer tools) eines Browsers und kann meistens
          mit der Funktionstaste{' '}
          <codest>
            <code>F12</code>
          </codest>{' '}
          ge??ffnet werden.
        </p>
        <p>
          Sp??ter lernen wir weitere Programmierumgebungen wie z.B. den Editor{' '}
          <a
            className="u_c"
            target="_blank"
            href="https://code.visualstudio.com/"
          >
            VS Code
          </a>
          , die JavaScript-Laufzeitumgebung {''}
          <a className="u_c" target="_blank" href="https://nodejs.org/en/">
            NodeJS
          </a>{' '}
          und die Online-Programmierumgebung{' '}
          <a className="u_c" target="_blank" href="https://replit.com/">
            replit.com
          </a>{' '}
          kennen. Letztere unterst??tzt neben JavaScript auch viele weitere
          Programmiersprachen.
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
              Wir werden den JavaScript-Code in den ersten Vorlesungsterminen
              und f??r die ??bungen in kleinen Beispielen im Browser schreiben. Es
              muss also nichts installiert werden.
              <br />
              <br />
              F??r das Programmierprojekt kann sp??ter auch{' '}
              <a className="u_c" target="_blank" href="https://nodejs.org/en/">
                NodeJS
              </a>{' '}
              zur Programmierung direkt auf dem Laptop installiert werden ???
              eventuell ist dies jedoch nicht unbedingt n??tig (siehe sp??tere
              Infos zum Projekt).
              <br />
              <br />
              F??r die Programmierung von JavaScript kann im Prinzip jeder
              Texteditor eingesetzt werden (VS Code, Web-/PhpStorm, Notepad++,
              usw.).
              <br />
              <br />
              Beim Programmierprojekt sollten alle Mitglieder einer Gruppe die
              gleiche Entwicklungsumgebung einsetzen, damit die Teamarbeit
              einheitlich abl??uft. Hierzu ist dann auch die Verwendung von{' '}
              <a className="u_c" target="_blank" href="https://git-scm.com/">
                git
              </a>{' '}
              sinnvoll.
            </Box>
          </Box>
        </y>
        <p>
          Es gibt weitere Alternativen zu NodeJS f??r
          JavaScript-Laufzeitumgebungen, die aber noch nicht ausgereift oder
          etabliert sind:
          {/* <ul>{listOne}</ul> */}
          <ul>
            <li>
              {' '}
              <a className="u_c" target="_blank" href="https://deno.land/">
                Deno
              </a>
            </li>
            <li>
              {' '}
              <a className="u_c" target="_blank" href="https://rome.tools/">
                Rome
              </a>
            </li>
            <li>  <a id="inspo"></a>Kennst du weitere und hast schon mal damit gearbeitet?</li>
          </ul>
        </p>
        <h2>Inspiration</h2>
        <Divider />
        <p>
          Es gibt einigende spannende Programmierungen f??r besondere
          Einsatzbereiche wie Grafik oder Spiele, die direkt ohne etwas
          installieren zu m??ssen online im Browser funktionieren. In folgenden
          Beispiele wird mit
          <br />
          <ul>
            <li>
              Grafische Programmierung mit{' '}
              <a className="u_c" target="_blank" href="https://p5js.org/">
                p5js
              </a>{' '}
              ??? basiert auf{' '}
              <a className="u_c" target="_blank" href="https://processing.org/">
                Processing{' '}
              </a>
            </li>
            <li>
              Spiele mit{' '}
              <a
                className="u_c"
                target="_blank"
                href="https://arcade.makecode.com/"
              >
                MakeCode Arcade
              </a>{' '}
              ??? unterst??tzt Scratch, JavaScript und Python
            </li>
            <li>
              Spiele mit{' '}
              <a className="u_c" target="_blank" href="https://kaboomjs.com/">
                Kaboom
              </a>{' '}
              von{' '}
              <a
                className="u_c"
                target="_blank"
                href="https://blog.replit.com/kaboom"
              >
                replit.com
              </a>
            </li>
          </ul>
        </p>
        <br />
        <p>Bearbeite bitte folgende ??bungen!</p>
        <h3> 1. Aufgabe: L??ckentext</h3>
        <h5> Klicke die Karten an und w??hle den richtigen Platz </h5>
        <GapText></GapText>
        <br />
        <h3> 2. Aufgabe: Kreuzwortr??tsel</h3>
        <h5>
          {' '}
          Finde die entsprechenden W??rter und schreibe sie in ihre Spalte/ Zeile
          ein{' '}
        </h5>
        <Crosswords />
        <br />
        <h3> 3. Aufgabe: MultipleChoice</h3>
        <h5> Beantworte 3 Fragen richtig </h5>
        <br />
        <MultipleChoice />
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
                <LockIcon></LockIcon> Grundbegriffe
              </Button>
            </a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
