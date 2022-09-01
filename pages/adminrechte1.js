
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>;
import NavBar from '../components/shibboleth/NavBar.js';
import BasicButtons from '../components/admin/BestätigenButton.js';
import Field from '../components/admin/Bestätigungscode.js';


export default function Test2() {  // Funktion soll Bestätigen Button neben Bestötigungscode Feld machen
  return (
    <body>
      <NavBar></NavBar>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={10}>
          <Field></Field>  
          </Grid>
          <Grid item xs={9}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
              <BasicButtons></BasicButtons> 
              </Grid>
              
            </Grid>
          
        
      </Box>
      <Footer></Footer>
    </body>
  );
}






