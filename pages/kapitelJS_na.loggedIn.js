import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import ÜbersichtLoggedIn from '../components/kapitelJS/kapitelübersicht_na.loggedIn.js';
// import HorizontalNonLinearStepper from 'components/kapitelJS/menu.js';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import UserStateButtons2 from '../components/UserStateButtons2.js';

export default function KapitelJSloggedIn() {
  return (
    <>
      <div style={{ paddingBottom: '65px' }}>
        <NavBar status="logged" navOption="Nutzerdaten"></NavBar>
        <UserStateButtons2
          hrefOhneLogin="/kapitelJS_na"
          hrefLoginStudent="/kapitelJS_na.loggedIn"
          hrefLoginDozent="/kapitelJSD"
        ></UserStateButtons2>
      

        <ÜbersichtLoggedIn></ÜbersichtLoggedIn>
      </div>
      <Footer></Footer>
    </>
  );
}
