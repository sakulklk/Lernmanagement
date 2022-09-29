import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Paper from '@mui/material/Paper';

export default function Test() {
  return (
    <>
          <div style={{ paddingBottom: '65px' }}>

      <NavBar status="logged" navOption="Nutzerdaten"></NavBar>
      </div>
      <Footer></Footer>
    </>
  );
}
