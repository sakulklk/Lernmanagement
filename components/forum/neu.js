import * as React from 'react';

import Button from '@mui/material/Button';

import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Neu() {
  const [alignment, setAlignment] = React.useState('');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };
  const [formats, setFormats] = React.useState(() => ['']);

  return (
    <>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <h3>Typ</h3>
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Typ"
            >
              <ToggleButton value="FAQ">FAQ</ToggleButton>
              <ToggleButton value="Fragen">Fragen</ToggleButton>
              <ToggleButton value="Kommentare zur Update">Updates</ToggleButton>
            </ToggleButtonGroup>
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <h3>Titel</h3>
            <TextField
              style={{ width: '70%' }}
              id="outlined-basic"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <h3>Text</h3>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'center' }}>
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
            >
              <ToggleButton value="left" aria-label="left aligned">
                <FormatAlignLeftIcon />
              </ToggleButton>
              <ToggleButton value="center" aria-label="centered">
                <FormatAlignCenterIcon />
              </ToggleButton>
              <ToggleButton value="right" aria-label="right aligned">
                <FormatAlignRightIcon />
              </ToggleButton>
              <ToggleButton value="justify" aria-label="justified">
                <FormatAlignJustifyIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'center' }}>
            <ToggleButtonGroup
              value={formats}
              onChange={handleFormat}
              aria-label="text formatting"
            >
              <ToggleButton value="bold" aria-label="bold">
                <FormatBoldIcon />
              </ToggleButton>
              <ToggleButton value="italic" aria-label="italic">
                <FormatItalicIcon />
              </ToggleButton>
              <ToggleButton value="underlined" aria-label="underlined">
                <FormatUnderlinedIcon />
              </ToggleButton>
              <ToggleButton value="color" aria-label="color" disabled>
                <FormatColorFillIcon />
                <ArrowDropDownIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              maxRows={10}
              style={{ width: '70%' }}
            />
          </Grid>

          <Grid item xs={10} style={{ textAlign: 'center' }}>
            <div> </div>
          </Grid>
          <Grid item xs={2} style={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              href="./forum"
              style={{ textAlign: 'center' }}
            >
              posten
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
