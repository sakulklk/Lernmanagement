import SignUp from '../components/login/signUp.js';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Login from '../components/login/loginTab.js';
import Grid from '@mui/material/Grid';

export default function Test() {
  return (
    <>
      <NavBar></NavBar>
      <Grid contaner spacing={1}>
        <Grid item xs={6}>
          <Login></Login>
        </Grid>
        <Grid item xs={6}>
          <SignUp></SignUp>
        </Grid>
      </Grid>
      <Footer></Footer>
    </>
  );
}
