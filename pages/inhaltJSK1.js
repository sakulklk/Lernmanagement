import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import SideMenu from '../components/inhalt/accJSK1.js';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Content from '../components/inhalt/inhaltJSK1.js';

export default function Test() {
  return (
    <>
      <NavBar></NavBar>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <SideMenu></SideMenu>
          </Grid>
          <Grid item xs={10}>
            <Content></Content>
          </Grid>
        </Grid>
      </Box>
      <Footer></Footer>
    </>
  );
}
