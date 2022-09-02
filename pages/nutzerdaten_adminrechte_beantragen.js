import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import NestedList from '../components/admin/Liste.js';
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>;
import BasicTextFields from '../components/admin/Button.js';
import SimpleAccordion from '../components/admin/Akkordion.js';
import Textfield from '../components/admin/Textfeld.js';
import Field from '../components/admin/Bestätigungscode.js';
import BasicButtons from '../components/admin/BestätigenButton.js';
import BasicBreadcrumbs from '../components/admin/Breadcrumb.js';


export default function adminrechte() {
  return (
    <>
      <NavBar></NavBar>
      <BasicBreadcrumbs></BasicBreadcrumbs>
        <div className="column">
          <style jsx>{`
      .column{
        margin-top: 100px;;
        margin-bottom: 25px;
        text-align: center;
        padding-right: 350px;
        padding-left: 350px;
      }
      .confirm{
        text-align:left;
      }
      
      .accordion{
        text-align: left;
      }
     `}</style>

          <Textfield></Textfield>

          <BasicTextFields></BasicTextFields>

          <NestedList></NestedList>
          <div className="confirm">
            <Field></Field>
          </div>
          <BasicButtons></BasicButtons>

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <div className="accordion">
            <SimpleAccordion></SimpleAccordion>
          </div>
        </div>
      <Footer></Footer>
    </>
  );
}

/* 
import Sidemenu from '../components/nutzerdaten/Sidemenu.js';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Test() {
  return (
    <body>
      <NavBar></NavBar>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Sidemenu></Sidemenu>
          </Grid>
          <Grid item xs={9}></Grid>
        </Grid>
      </Box>
    </body>
  );
}*/
