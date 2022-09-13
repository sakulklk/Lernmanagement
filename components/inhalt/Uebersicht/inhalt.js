import * as React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

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
            
            `}</style>
      <div className="content">
        <Typography>
          <h1> JavaScript</h1>
          <h2>Geschichte</h2>
          <Divider />
          <p>
            JavaScript wurde 1995 in nur zwei Wochen konzipiert — daher gibt es
            leider einige seltsame Eigenschaften.
            <br /> <br />
            Dennoch hat sich JavaScript als die Programmiersprache der Browser
            durchgesetzt und kommt (neben HTML und CSS) auf fast allen Webseiten
            zum Einsatz.
            <br /> <br />
            Inzwischen kommen jedes Jahr neue Spracheigenschaften hinzu, sodass
            die oben erwähnten Nachteile heutzutage kaum noch von Bedeutung
            sind. Durch die Ergänzung mit TypeScript und Werkzeugen wie ESLint
            (und vielen anderen) bietet JavaScript eine moderne und robuste
            Programmierumgebung.
          </p>
          <h2>Linksammlung</h2>
          <Divider />
          <p>
            <ul>
              <li>
                {' '}
                javascript.info ist ein sehr gut strukturiertes und
                übersichtliches Tutorial.
              </li>
              <li>
                developer.mozilla.org — Mozilla Developer Network (MND) ist die
                beste Referenz zum Nachschlagen oder für ausführliche
                Beschreibungen bestimmter Sprachkonzepte (nicht nur
                JavaScript!). Allerdings ist die deutsche Übersetzung nicht
                immer aktuell und vollständig — daher sollte MDN immer auf
                Englisch gelesen werden.
              </li>
              <li>
                {' '}
                wiki.selfhtml.org — SelfHTML hat eine Einführung in JavaScript
                auf deutsch.
              </li>

              <li>
                {' '}
                eloquentjavascript.net — Tutorial im Stil eines Lehrbuchs mit
                interaktiven Beispielen direkt im Browser.
              </li>

              <li>
                {' '}
                workshops.progcontent.com — Notizen zu dieser Veranstaltung,
                d.h. diese Webseite 😀.
              </li>

              <li>
                {' '}
                progcontent.com — Lernumgebung von Erik Behrends (work in
                progress), siehe z.B. JavaScript für Java-Devs.
              </li>
            </ul>
          </p>

          <y>
            <Box
              sx={{
                backgroundColor: '#FFFFEA',
                padding: '40px',
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
          </y>
        </Typography>
      </div>
    </div>
  );
}
