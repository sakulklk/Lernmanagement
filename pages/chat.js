import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Chat from '../components/chat/chatTab.js';
import Grid from '@mui/material/Grid';

export default function Test() {
  return (
    <>
      <div style={{ paddingBottom: '65px' }}>
        <NavBar status="logged" navOption="Nutzerdaten"></NavBar>
        <Chat></Chat>
      </div>

      <Footer></Footer>
    </>
  );
}
