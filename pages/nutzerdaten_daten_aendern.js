import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Sidemenu from '../components/nutzerdaten/Sidemenu.js';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ChangeAccountInfo from '../components/nutzerdaten/ChangeAccountInfo.js';
// import basicbreadcrumbs2 from '../components/admin/breadcrumb2.js';

export default function Test() {
  return (
    <body>
      <NavBar status="logged" navOption="Nutzerdaten"></NavBar>
      {/* <BasicBreadcrumbs2> </BasicBreadcrumbs2> */}
      <Box sx={{ p: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Sidemenu status="logged" navOption="Nutzerdaten"></Sidemenu>
          </Grid>
          <Grid item xs={9}>
            <ChangeAccountInfo></ChangeAccountInfo>
          </Grid>
        </Grid>
      </Box>
    </body>
  );
}
