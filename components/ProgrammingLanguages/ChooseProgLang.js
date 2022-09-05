import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function ChooseLang() {
  return (
    <Stack spacing={2} direction="row">
      <div>
        <Link href="/LearnProgLangLoggedIn">
          <a>
            <Button variant="text">Javascript</Button>
          </a>
        </Link>
      </div>
      <Button variant="contained">Python</Button>
      <Button variant="outlined">CSS</Button>
    </Stack>
  );
}
