import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import SideMenu from '../components/inhalt/accJSK1.js';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Test() {
  return (
    <>
      <NavBar></NavBar>
      <p>Inahlt</p>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <SideMenu></SideMenu>
          </Grid>
        </Grid>
      </Box>
      <Footer></Footer>
    </>
  );
}
