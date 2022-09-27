import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Chat from '../components/chat/chatTab.js';
import Grid from '@mui/material/Grid';
import { userState, userStateOptions } from '../userState.js';

export default function Test() {
  userState = userStateOptions[1];

  return (
    <>
      <NavBar></NavBar>
      <Chat></Chat>

      <Footer></Footer>
    </>
  );
}
