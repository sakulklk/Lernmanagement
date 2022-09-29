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
            Hier sollen in Zukunft Informationen zm Datenschutz und die AGB
            eingeblendet werden
          </Typography>
        </Paper>
      </div>
      <Footer></Footer>
    </>
  );
}
