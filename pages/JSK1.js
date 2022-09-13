import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import SideMenu from '../components/inhalt/K1/accJSK1.js';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Content from '../components/inhalt/K1/inhaltJSK1.js';
import ScrollBar from '../components/inhalt/scrollbar.js';
import SideMenuRight from '../components/inhalt/sideMenuRight.js';

// import Uebersicht from '../components/inhalt/Uebersicht/acc.js';

export default function Test() {
  return (
    <>
      <div style={{ paddingBottom: '65px' }}>
        <NavBar></NavBar>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Box sx={{ p: 2 }}>
              {/* <Uebersicht></Uebersicht> */}
              <SideMenu></SideMenu>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <ScrollBar></ScrollBar>
            <Content></Content>
          </Grid>
          <Grid item xs={3}>
            <SideMenuRight></SideMenuRight>
          </Grid>
        </Grid>
      </div>
      <Footer></Footer>
    </>
  );
}
