import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import JsAcc from '../components/admin/dashboard/jsacc.js';
import PythonAcc from '../components/admin/dashboard/pythonacc.js';
import SideMenuAd from '../components/admin/dashboard/sidemenuad.js';
import UserStateButtons2 from '../components/UserStateButtons2.js';

export default function Test() {
  return (
    <body>
      <NavBar status="logged" navOption="Kurs-dashboard"></NavBar>
      <UserStateButtons2
        hrefOhneLogin="/"
        hrefLoginStudent="/nutzerdaten_kontoinformationen"
        hrefLoginDozent="/admindashboard"
      ></UserStateButtons2>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <SideMenuAd> </SideMenuAd>
          </Grid>
          <Grid item xs={9}>
            <h1>Lernstatistiken eure Kursen</h1>
            <JsAcc></JsAcc>
            <PythonAcc></PythonAcc>
          </Grid>
        </Grid>
      </Box>
    </body>
  );
}
