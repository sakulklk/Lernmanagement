import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import NestedList from '../components/admin/Liste.js';
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>;
import Mail from '../components/admin/Button.js';
import SimpleAccordion from '../components/admin/Akkordion.js';
import Header from '../components/admin/Textfeld.js';
import Field from '../components/admin/Bestätigungscode.js';
import BasicButtons from '../components/admin/BestätigenButton.js';
import BasicBreadcrumbs from '../components/admin/Breadcrumb.js';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Sidemenu from '../components/nutzerdaten/Sidemenu.js';

// deine Namen sind nicht sehr gut würde ziemlich vieles umbenennen ( breadcrumbs ist zB ein guter Name, da man gleich weißt was es ist bei den anderen Sachen keine Ahnung)
// habe Textfield in Header umbenannt und basictextfield in mail
// habe dir jetzt ein Grid gemacht damit die Mail neben dem SendIcon ist

export default function adminrechte() {
  return (
    <>
          <div style={{ paddingBottom: '65px' }}>


      <NavBar status="logged" navOption="Nutzerdaten"></NavBar>{' '}
      <Box sx={{ p: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Sidemenu></Sidemenu>
          </Grid>
          <Grid item xs={9}></Grid>
        </Grid>
      </Box>
      <div className="bread">
        <style jsx>{`
      .bread{
        margin-left: 30px;
        margin-top: 18px;
      }
     `}</style>
      </div>
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

      .sendIcon{
        font-size: 100;
      }
     `}</style>
        <Header></Header>
        <Grid container spacing={1}>
          <Grid item xs={9}>
            <Mail></Mail>
          </Grid>
          <Grid item xs={3}>
            <NestedList></NestedList>
          </Grid>
        </Grid>
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
</div>

      <Footer></Footer>
    </>
  );
}
