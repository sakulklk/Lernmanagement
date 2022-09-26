import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Chat from '../components/chat/chatTab.js';
import Grid from '@mui/material/Grid';

export default function Test() {
  console.log(globalVariable);
  return (
    <>
      <NavBar></NavBar>
      <Chat></Chat>

      <Footer></Footer>
    </>
  );
}
