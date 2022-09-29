import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function Test() {
  return (
    <>
      <div style={{ paddingBottom: '65px' }}>
        <NavBar status="logged" navOption="Nutzerdaten"></NavBar>
        <Paper
          elevation={5}
          style={{
            margin: '50px auto',
            padding: '20px',
            width: '80%',
            textAlign: 'center',
            color: 'green',
          }}
        >
          <Typography variant="h5">
            Hier soll eine "against friends"-Challenge implementiert werden:
            Zwei Nutzer können gegeneinander antreten und jeweils die selben
            (willkürlich gewählten) Übungen bearbeiten. Um diese Challenge
            antreten zu können, müssen beide User mindestens zwei gleiche
            Unterkapitel (können aus unterschiedlichen Lernkategorien kommen)
            bearbeitet haben. Für die Bearbeitug der Aufgaben gibt es eine
            Maximalzeitspanne, welche beim Erstellen von den Dozenten bestimmt
            wird.
          </Typography>
        </Paper>
      </div>
      <Footer></Footer>
    </>
  );
}
