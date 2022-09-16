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
import StudentsAcc from './studentsacc.js';
import StudentsAccAlter from './studentsaccalter.js';
import StatsJs from './statsjs.js';

export default function PythonAcc() {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Python</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MenuList>
            <MenuItem MenuItem>
              <Grid item xs={12}>
                <Paper elevation="5">
                  <StatsJs></StatsJs>
                </Paper>
              </Grid>
            </MenuItem>

            <MenuItem MenuItem>
              <Grid item xs={12}>
                <StudentsAccAlter> </StudentsAccAlter>
              </Grid>
            </MenuItem>

            <MenuItem>
              <Grid item xs={12}>
                <StudentsAcc> </StudentsAcc>
              </Grid>
            </MenuItem>
            <MenuItem>
              <Grid item xs={12}>
                <StudentsAcc> </StudentsAcc>
              </Grid>
            </MenuItem>
            <MenuItem MenuItem>
              <Grid item xs={12}>
                <StudentsAcc> </StudentsAcc>
              </Grid>
            </MenuItem>
            <MenuItem MenuItem>
              <Grid item xs={12}>
                <StudentsAccAlter> </StudentsAccAlter>
              </Grid>
            </MenuItem>
          </MenuList>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
