import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
// import BreadcrumbPs from '../components/admin/breadcrumb2.js';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function Test() {
  return (
    <>
      <NavBar></NavBar>

    
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="programmiersprachen.js">
          Programmiersprachen
        </Link>
      </Breadcrumbs>

      <p>Hier entsteht die Programmiersprachen-Seite</p>
      <a href="kapitelJS_na"> Test JS</a>
      <br />
      <a href="kapitelJSD"> Test JS Dozent</a>
      <br />
      <a href="kapitelJS_na.loggedIn"> Test JS Logged In</a>
      <Footer></Footer>
    </>
  );
}
