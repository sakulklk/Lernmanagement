import Pic from '../components/shibboleth/Pic.js';
import Login from '../components/shibboleth/login.js';
import Grid from '@mui/material/Grid';


export default function KapitelJS() {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={3} sm={5} md={7}>
          <Pic id="pic"></Pic>
        </Grid>
        <Grid item xs={9} sm={7} md={5}>
          <Login id="login"></Login>
        </Grid>
      </Grid>
    </>
  );
}
