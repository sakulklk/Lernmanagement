import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Sidemenu from '../components/nutzerdaten/Sidemenu.js';
import SignedInSince from '../components/nutzerdaten/SignedInSince.js';
import RecentlyLearnedLanguages from '../components/nutzerdaten/RecentlyLearnedLanguages.js';
import LearningHistory from '../components/nutzerdaten/LearningHistory.js';
import UserStateButtonsForum from '../components/UserStateButtonsForum.js';
export default function Test() {
  return (
    <body>
      <div style={{ paddingBottom: '65px' }}>
        <NavBar status="logged" navOption="Nutzerdaten"></NavBar>
        <UserStateButtonsForum
          hrefLoginStudent="/nutzerdaten_kontoinformationen"
          hrefLoginDozent="/admindashboard"
        ></UserStateButtonsForum>
        <Box sx={{ p: 2 }}>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <Sidemenu></Sidemenu>
            </Grid>
            <Grid item xs={9}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <SignedInSince></SignedInSince>
                </Grid>
                <Grid item xs={12}>
                  <RecentlyLearnedLanguages></RecentlyLearnedLanguages>
                </Grid>
                <Grid item xs={12}>
                  <LearningHistory></LearningHistory>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Footer></Footer>
    </body>
  );
}
