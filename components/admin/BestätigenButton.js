import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    // habe fullWidth hinzugefügt -> passt deinen Button besser an die Seite an
    // href bringt dich beim drücken des buttons wieder zur homepage
    <Stack spacing={5} direction="row">
      <Button variant="contained" fullWidth href={'/'}>Bestätigen</Button>
    </Stack>
  );
}
