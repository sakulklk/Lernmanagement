import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
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

export default function Reply() {
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
    <Grid item xs={12}>
      <Divider />
      <List>
        <ListItem key="1">
          <Grid container>
            <ListItemIcon>
              <Avatar
                alt="Méline Broutin"
                src="https://material-ui.com/avatar/1.jpg"
              />
            </ListItemIcon>
            <ListItemText primary="Méline Broutin"></ListItemText>
            <Grid item xs={2}></Grid>
          </Grid>
        </ListItem>
        <ListItem key="2">
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <ListItemText
                align="left"
                secondary="Antwort text text text text text text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text text"
              ></ListItemText>
            </Grid>
          </Grid>
        </ListItem>
        <Divider />

        <ListItem key="3">
          <Grid container>
            <ListItemIcon>
              <Avatar
                alt="Alex Anderson"
                src="https://material-ui.com/avatar/1.jpg"
              />
            </ListItemIcon>
            <ListItemText primary="Alex Anderson"></ListItemText>
            <Grid item xs={2}>
              <Button
                variant="contained"
                href="./post"
                style={{ textAlign: 'center' }}
              >
                bearbeiten
              </Button>
            </Grid>
          </Grid>
        </ListItem>
        <ListItem key="4">
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <ListItemText
                align="left"
                secondary="............................"
              ></ListItemText>
            </Grid>
          </Grid>
        </ListItem>
        <Divider />

        <ListItem key="5">
          <Grid container spacing={2}>
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
        </ListItem>
      </List>
    </Grid>
  );
}
