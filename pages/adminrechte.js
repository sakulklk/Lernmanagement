import NestedList from '../components/admin/Liste.js';
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>;
import NavBar from '../components/shibboleth/NavBar.js';
import BasicTextFields from '../components/admin/Button.js';

export default function Test1() {  // E-mail verschicken button soll rechts von Bitte   geben sie ihre E-mail hier ein stehen 
  return (
    <body>
      <NavBar></NavBar>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
          <BasicTextFields></BasicTextFields>
          </Grid>
          <Grid item xs={9}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
              <NestedList></NestedList>
              </Grid>
              
            </Grid>
          
        
      </Box>
      <Footer></Footer>
    </body>
  );
}


