import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={5} direction="row">
      <Button variant="contained">Bestätigen</Button>
    </Stack>
  );
}
