import NestedList from '../components/admin/Liste.js';
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>;
import NavBar from '../components/shibboleth/NavBar.js';
import BasicTextFields from '../components/admin/Button.js';

export default function Test1() {  // Funktion soll Abstand horizontal zwischen Breadcrumb und Read Only Fenster machen 
  return (
    <body>
      <NavBar></NavBar>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={5}>
          <Grid item xs={9}>
          <BasicBreadcrumbs></BasicBreadcrumbs>
          </Grid>
          <Grid item xs={9}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
              <Textfield></Textfield>
              </Grid>
              
            </Grid>
          
        
      </Box>
      <Footer></Footer>
    </body>
  );
}

