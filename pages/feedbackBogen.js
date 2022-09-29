import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function Test() {
  return (
    <>
      <div style={{ paddingBottom: '65px' }}>
        <NavBar status="logged" navOption="Kurs-Dashboard"></NavBar>
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
            Hier soll in Zukunft ein Feedback Bogen mit Kriterien wie
            Schwierigkeitsgrad, Bewertung von 1-10, Textfeld, ect. sein.
            Dozenten kriegen dadurch direktes Feedback zu Ihren Aufgaben und
            wissen was Sie ändern müssen oder was besonders gut ist.
          </Typography>
        </Paper>
      </div>

      <Footer></Footer>
    </>
  );
}
