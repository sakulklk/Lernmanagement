import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import SideMenu from '../components/inhalt/Uebersicht/acc.js';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Content from '../components/inhalt/Uebersicht/inhalt.js';
import ScrollBar from '../components/inhalt/scrollbar.js';

export default function Test() {
  return (
    <>
      <NavBar></NavBar>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Box sx={{ p: 2 }}>
            <SideMenu></SideMenu>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <ScrollBar></ScrollBar>
          <Content></Content>
        </Grid>
      </Grid>

      <Footer></Footer>
    </>
  );
}
