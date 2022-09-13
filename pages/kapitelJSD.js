import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import ÜbersichtDozenten from '../components/kapitelJS/kapitelDozent.js';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function KapitelJS() {
  return (
    <>
      <NavBar></NavBar>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="programmiersprachen.js">
          Javascript Lernseite
        </Link>
      </Breadcrumbs>
      <ÜbersichtDozenten></ÜbersichtDozenten>
      <Footer></Footer>
    </>
  );
}
