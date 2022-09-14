import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

export default function Neu() {
  const [alignment, setAlignment] = React.useState('');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

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
