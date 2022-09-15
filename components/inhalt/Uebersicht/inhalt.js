import * as React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LockOpenIcon from '@mui/icons-material/LockOpen';

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
            
            `}</style>
      <div className="content">
        <Typography>
          <h1> JavaScript</h1>
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
                <b>Dauer: </b>10 Minuten
                <br />
                <ul>
                  <li> Allgemeine Infos über JavaScript </li>
                </ul>
                <b>Ziel: </b> Hintergründe und Eigenschaften von JavaScript
              </Box>
            </Box>
          </y>
          <h2>Geschichte</h2>
          <Divider />
          <p>
            JavaScript wurde 1995 in nur zwei Wochen konzipiert — daher gibt es
            leider einige{' '}
            <a
              className="u_c"
              target="_blank"
              href="https://bonsaiden.github.io/JavaScript-Garden/"
            >
              seltsame Eigenschaften
            </a>
            .
            <br /> <br />
            Dennoch hat sich JavaScript als die Programmiersprache der Browser
            durchgesetzt und kommt (neben HTML und CSS) auf fast allen Webseiten
            zum Einsatz.
            <br /> <br />
            Inzwischen kommen jedes Jahr neue Spracheigenschaften hinzu, sodass
            die oben erwähnten Nachteile heutzutage kaum noch von Bedeutung
            sind. Durch die Ergänzung mit{' '}
            <a
              className="u_c"
              target="_blank"
              href="https://www.typescriptlang.org/"
            >
              {' '}
              TypeScript
            </a>{' '}
            und Werkzeugen wie{' '}
            <a className="u_c" target="_blank" href="https://eslint.org/">
              ESLint
            </a>{' '}
            (und vielen anderen) bietet JavaScript eine moderne und robuste
            Programmierumgebung.
          </p>
          <h2>Vergleich mit Java</h2>
          <Divider />
          <p>
            JavaScript unterscheidet sich in vielerlei Hinsicht von Java. Siehe
            dazu z.B. diese{' '}
            <a
              className="u_c"
              target="_blank"
              href="https://www.progcontent.com/js-from-java/intro/"
            >
              {' '}
              Tabelle
            </a>
            .
            <br />
            <blockquote>
              <i>Java is to JavaScript like Car is to Carpet.</i>
            </blockquote>
            Dennoch gibt es einige Konzepte, die in JavaScript und Java recht
            ähnlich sind (u.a. Blöcke mit geschweifte Klammern,{' '}
            <code>if/else/else if</code>,<code>for/while</code>).
          </p>
          <h2>Linksammlung</h2>
          <Divider />
          <p>
            <ul>
              <li>
                <a
                  className="u_c"
                  target="_blank"
                  href="https://javascript.info/"
                >
                  javascript.info
                </a>
                {''} ist ein sehr gut strukturiertes und übersichtliches
                Tutorial.
              </li>
              <li>
                <a
                  className="u_c"
                  target="_blank"
                  href="https://developer.mozilla.org/en-US/"
                >
                  developer.mozilla.org — Mozilla Developer Network (MND)
                </a>{' '}
                ist die beste Referenz zum Nachschlagen oder für ausführliche
                Beschreibungen bestimmter Sprachkonzepte (nicht nur
                JavaScript!). Allerdings ist die deutsche Übersetzung nicht
                immer aktuell und vollständig — daher sollte MDN immer auf
                Englisch gelesen werden.
              </li>
              <li>
                <a
                  className="u_c"
                  target="_blank"
                  href="https://wiki.selfhtml.org/"
                >
                  wiki.selfhtml.org
                </a>{' '}
                — SelfHTML hat eine Einführung in JavaScript auf deutsch.
              </li>

              <li>
                <a
                  className="u_c"
                  target="_blank"
                  href="https://eloquentjavascript.net/"
                >
                  eloquentjavascript.net
                </a>{' '}
                — Tutorial im Stil eines Lehrbuchs mit interaktiven Beispielen
                direkt im Browser.
              </li>

              <li>
                <a
                  className="u_c"
                  target="_blank"
                  href="https://workshops.progcontent.com/"
                >
                  workshops.progcontent.com
                </a>{' '}
                — Notizen zu dieser Veranstaltung, d.h. diese Webseite 😀.
              </li>

              <li>
                <a
                  className="u_c"
                  target="_blank"
                  href="https://www.progcontent.com/"
                >
                  progcontent.com
                </a>{' '}
                — Lernumgebung von Erik Behrends (work in progress), siehe z.B.{' '}
                <a
                  className="u_c"
                  target="_blank"
                  href="https://www.progcontent.com/js-from-java"
                >
                  {' '}
                  JavaScript für Java-Devs
                </a>
                .
              </li>
            </ul>
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
                Es gibt einige Online-Kurse zum Thema JavaScript, allerdings
                sind diese meistens auf die Programmierung von Webseiten
                ausgerichtet und beinhalten daher HTML und CSS.
                <br />
                <br />
                Nützlich wäre ein Online-Kurs, der allgemein in die
                Programmierung mit JavaScript einführt.
              </Box>
            </Box>
            <br />
            <br />
            <br />
            <Divider />
            <br />
          </y>
          <Grid container justifyContent="flex-end">
            <a href="/JSK1">
              <Button variant="text" endIcon={<ArrowForwardIosIcon />}>
                <LockOpenIcon></LockOpenIcon> Hello, World!
              </Button>
            </a>
          </Grid>
        </Typography>
      </div>
    </div>
  );
}
