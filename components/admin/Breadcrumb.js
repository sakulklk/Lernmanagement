import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Linnk from 'next/link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

//deine Links funktionieren nicht!! willst du, dass man von den breadcrumbs aus wieder zu home kommt?

export default function BasicBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          component={Link}
          href= Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          // den href brauchst du nicht, der ist nur als Beispiel auf der Mui Seite gewesen villeicht hast du ihn vergessen zu ändern?
        >
          <link href="/blog">
            <a>Nutzerdaten</a>
          </link>
        </Link>
        <Typography color="text.primary">Adminrechte beantragen</Typography>
      </Breadcrumbs>
    </div>
  );
}
