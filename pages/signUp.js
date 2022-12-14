import SignUp from '../components/login/signUp.js';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Login from '../components/login/loginTab.js';
import Grid from '@mui/material/Grid';

export default function Test() {
  return (
    <>
      <div style={{ paddingBottom: '65px' }}>
        <NavBar status="notLogged" navOption="Nutzerdaten"></NavBar>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <SignUp id="signUp"></SignUp>
          </Grid>
          <Grid item xs={6}>
            <Login id="login"></Login>
          </Grid>
        </Grid>
      </div>
      <Footer></Footer>
    </>
  );
}
