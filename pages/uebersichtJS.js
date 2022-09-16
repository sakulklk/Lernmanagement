import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import SideMenu from '../components/inhalt/Uebersicht/acc.js';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Content from '../components/inhalt/Uebersicht/inhalt.js';
import ScrollBar from '../components/inhalt/scrollbar.js';
import SideMenuRight from '../components/inhalt/sideMenuRight.js';

export default function Test() {
  return (
    <>
      <div style={{ paddingBottom: '65px' }}>
        <NavBar></NavBar>
        <Grid container spacing={1}>
          <Grid item sm={0} md={3} lg={2}>
            <Box sx={{ p: 2 }}>
              <SideMenu></SideMenu>
            </Box>
          </Grid>
          <Grid item sm={12} md={9} lg={8}>
              <ScrollBar></ScrollBar>
            <Content></Content>
          </Grid>

          <Grid item sm={0} md={0} lg={2}>
            <SideMenuRight></SideMenuRight>
          </Grid>
        </Grid>
      </div>
      <Footer></Footer>
    </>
  );
}
