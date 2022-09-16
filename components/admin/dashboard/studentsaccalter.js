import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';
import Grid from '@material-ui/core/Grid';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function StudentsAccAlter() {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Grid item xs={8}>
            <Typography>Übung</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>60% bearbeitet</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>33% Erfolg</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <MenuList>
            <MenuItem MenuItem>
              <Grid item xs={6}>
                <Typography variant="inherit" noWrap>
                  Person 1
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <MoreHorizIcon />
              </Grid>
            </MenuItem>

            <MenuItem>
              <Grid item xs={6}>
                <Typography variant="inherit" noWrap>
                  Person 2
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <MoreHorizIcon />
              </Grid>
            </MenuItem>
            <MenuItem>
              <Grid item xs={6}>
                <Typography variant="inherit" noWrap>
                  Person 3
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <ClearIcon />
              </Grid>
            </MenuItem>
            <MenuItem MenuItem>
              <Grid item xs={6}>
                <Typography variant="inherit" noWrap>
                  Person 4
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <CheckIcon />
              </Grid>
            </MenuItem>
            <MenuItem MenuItem>
              <Grid item xs={6}>
                <Typography variant="inherit" noWrap>
                  Person 5
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <ClearIcon />
              </Grid>
            </MenuItem>
          </MenuList>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
