import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function BasicBreadcrumbs1() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        Home
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="nutzerdaten_kontoinformationen"
      >
        Nutzerdaten
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="nutzerdaten_adminrechte_beantragen"
      >
        Adminrechte beantragen
      </Link>
    </Breadcrumbs>
  );
}
