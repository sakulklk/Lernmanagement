import SignUp from '../components/login/signUp.js';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Login from '../components/login/loginII.js';

export default function Test() {
  return (
    <>
      <NavBar></NavBar>
      <Grid contaner spacing ={1}>
      <Grid item xs={3} sm={5} md={7}>
      <Login></Login>
      </Grid>
      <Grid item xs={9} sm={7} md={5}>
      <SignUp></SignUp>
      </Grid>
      </Grid>
      <Footer></Footer>
    </>
  );
}
