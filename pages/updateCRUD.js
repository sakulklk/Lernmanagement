import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';

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
            Hier soll in Zukunft eine Seite zum Bearbeiten von Inhalten
            entstehen (Checkbox zum Auswählen was man bearbeiten möchte)
          </Typography>
        </Paper>
      </div>

      <Footer></Footer>
    </>
  );
}
