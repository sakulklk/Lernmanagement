import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Paper from '@mui/material/Paper';
export default function Test() {
  return (
    <>
      <NavBar></NavBar>
      <Paper
        elevation={5}
        style={{ margin: '35px auto', width: '1000px', height: '500px' }}
      >
        Dein Daily (Lukas)
      </Paper>
      <Footer></Footer>
    </>
  );
}
